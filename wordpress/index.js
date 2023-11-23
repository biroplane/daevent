/* eslint-disable import/order */
// const path = require('path')
import axios from "axios";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import Turndown from "turndown";
import lodash from "lodash";
// import { JSDOM } from "jsdom";
// import Mustache from "mustache";
import Hb from "handlebars";

import path from "path";
import { fileURLToPath } from "url";

const _td = new Turndown();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// let products = []
const WORDPRESS_URL = "https://www.daeventpuglia.it/wp-json/wp/v2";

let page = 1;
const pageSize = 51;
let latest = new Date("2001-01-01T00:00:00Z");

/**
// ? TODO: modified_after=2021-10-01T00:00:00Z
*/

const renderToFile = (items, folder, tempFile = "posts") => {
  const _template = readFileSync(
    path.join(__dirname, tempFile + ".md")
  ).toString();
  const base = path.join(__dirname, "../content", folder);
  // fs.rmdirSync(base, { recursive: true })
  if (!existsSync(base)) {
    mkdirSync(base);
  }
  items.forEach((post) => {
    // const output = Hb.template(template, { data: _posts });
    const template = Hb.compile(_template);
    const output = template(post);
    if (!existsSync(`${base}`)) {
      mkdirSync(`${base}`);
    }

    if (post.type === "post") {
      writeFileSync(`${base}/${post.slug}.md`, output);
    } else {
      writeFileSync(`${base}/${post.slug}.md`, output);
    }
  });

  // console.log('Dirname ', __dirname)
  // writeFileSync(
  //   path.join(__dirname, "../public", "latest.json"),
  //   JSON.stringify({
  //     latest: new Date(),
  //   })
  // );
};

const getPosts = async (page, endpoint) => {
  try {
    const _posts = await axios({
      method: "GET",
      url: WORDPRESS_URL + endpoint,
      params: {
        per_page: pageSize,
        page,
        _embed: true,
        modified_after: latest,
      },
    });

    page++;
    if (_posts.data.length === pageSize) {
      // return posts.concat(_posts.data.slice(0, pageSize - 1), aw)
      return _posts.data
        .slice(0, pageSize - 1)
        .concat(await getPosts(page, endpoint));
    } else {
      return _posts.data;
    }
  } catch (error) {
    console.log("Errore get post ", error.data);
  }
};

const init = () => {
  /**
   * Controllo che esite il file latest
   * il file "latest.json" memorizza l'ultimo fetch
   */

  const dest = path.join(__dirname, "../public", "latest.json");

  if (existsSync(dest)) {
    const _latest = readFileSync(
      path.join(__dirname, "../public", "latest.json")
    ).toString();
    latest = JSON.parse(_latest).latest;
  }

  getPosts(page, `/posts`).then((_posts) => {
    console.log(`Attendo posts `, _posts.length);
    page = 0;
    renderToFile(_posts, "/blog");
  });
  getPosts(page, `/tags`).then((_posts) => {
    console.log(`Attendo posts `, _posts.length);
    page = 0;
    renderToFile(_posts, "/tags", "tags");
  });
  getPosts(page, `/categories`).then((_posts) => {
    console.log(`Attendo posts `, _posts.length);
    page = 0;
    renderToFile(_posts, "/categories", "categories");
  });
  getPosts(page, `/portfolio_category`).then((_posts) => {
    console.log(`Attendo posts `, _posts.length);
    page = 0;
    renderToFile(_posts, "/portfolio-category", "categories");
  });
  getPosts(page, `/portfolio_skills`).then((_posts) => {
    console.log(`Attendo posts `, _posts.length);
    page = 0;
    renderToFile(_posts, "/portfolio-skills", "categories");
  });
  getPosts(page, `/portfolio_tags`).then((_posts) => {
    console.log(`Attendo posts `, _posts.length);
    page = 0;
    renderToFile(_posts, "/portfolio-tags", "categories");
  });
  getPosts(page, `/avada_portfolio`).then((_posts) => {
    page = 0;
    renderToFile(_posts, "/portfolio", "portfolio-items");
  });
};

function htmlToMarkdown(inputHtml) {
  // Creare un oggetto JSDOM con solo il body

  return _td.turndown(inputHtml);
}

function getTerm(items, options) {
  if (!Array.isArray(items) || items.length === 0) return;
  const allItems = lodash.groupBy(items, "taxonomy");
  return options.fn(allItems);
}

Hb.registerHelper("formatHtml", htmlToMarkdown);
Hb.registerHelper("wp_term", getTerm);
Hb.registerHelper("console", function (str) {
  console.log(
    "%cValue %s",
    "color:red;font-size:24px",
    JSON.parse(JSON.stringify(str))
  );
});
init();
