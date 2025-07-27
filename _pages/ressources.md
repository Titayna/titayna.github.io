---
layout: page
title: RESSOURCES
permalink: /ressources/
description:
nav: true
nav_order: 3
display_categories: [TEMPLATES, GUIDEBOOK]
horizontal: false
---

<!-- pages/ressources.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized ressources -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_ressources = site.ressources | where: "category", category %}
  {% assign sorted_ressources = categorized_ressources | sort: "importance" %}
  <!-- Generate cards for each ressource -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for ressource in sorted_ressources %}
      {% include projects_horizontal.liquid project=ressource %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for ressource in sorted_ressources %}
      {% include projects.liquid project=ressource %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}
{% else %}
  {% assign sorted_ressources = site.ressources | sort: "importance" %}
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for ressource in sorted_ressources %}
      {% include projects_horizontal.liquid project=ressource %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for ressource in sorted_ressources %}
      {% include projects.liquid project=ressource %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
