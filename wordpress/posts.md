---
id: {{id}}
title: '{{{title.rendered}}}'
# subtitle: '{{wps_subtitle}}'
# occhiello: '{{acf.occhiello}}'
author:
  {{#_embedded.author}}
  - id: {{id}}
    name: {{name}}
  {{/_embedded.author}}
date: {{date}}

# location:
#   {{#acf.location}} 
#   - id: {{ID}}
#     name: {{post_title}}
#     slug: {{post_name}}
#   {{/acf.location}}
#   {{^acf.location}}
#   - id: null
#     name: null
#     slug: null
#   {{/acf.location}}
modified: {{modified}}
slug: {{slug}}
type: {{type}}
featured: {{sticky}}
format: {{format}}
preview: ' {{{excerpt.rendered}}} '
{{#with _embedded}}
  {{#each wp:term}}
  {{#wp_term this}}
  {{#each .}}
{{@key}}:
  {{#each .}}
  - name: {{name}}
    slug: {{slug}}
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
