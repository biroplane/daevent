---
id: {{id}}
title: '{{{title.rendered}}}'
author:
  {{#_embedded.author}}
  - id: {{id}}
    name: {{name}}
  {{/_embedded.author}}
date: {{date}}
modified: {{modified}}
slug: {{slug}}
type: portfolio-item
format: {{format}}
preview: '{{{excerpt.rendered}}}'

{{#with _embedded}}
  {{#each wp:term}}
  {{#wp_term this}}
  {{#each .}}
{{@key}}:
  {{#each .}}
  - {{slug}}
  {{/each}}
  {{/each}}
  {{/wp_term}}
  {{/each}}
{{/with}}
featured_image: 
  {{#with _embedded}}
  {{#each wp:featuredmedia}}
  - id: {{id}}
    title: {{title.rendered}}
    src: {{media_details.sizes.medium.source_url}}
    thumbnail: {{{media_details.sizes.thumbnail.source_url}}}
    {{/each}}
  {{/with}}

---

{{{formatHtml content.rendered}}}
