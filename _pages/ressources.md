---
layout: page
title: RESOURCES
permalink: /resources/
description:
nav: true
nav_order: 3
display_categories: [GUIDEBOOK, TEMPLATES]
horizontal: false
---

<!-- pages/resources.md -->
<div class="projects"> <!-- Keep same class if using existing CSS -->
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized rssources -->
  {% for category in page.display_categories %}
    <a id="{{ category }}" href=".#{{ category }}">
      <h2 class="category">{{ category }}</h2>
    </a>
    {% assign categorized_resources = site.resources | where: "category", category %}
    {% assign sorted_resources = categorized_resources | sort: "importance" %}

    {% if page.horizontal %}
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2">
        {% for ressource in sorted_resources %}
          {% include projects_horizontal.liquid project=ressource %}
        {% endfor %}
      </div>
    </div>
    {% else %}
    <div class="row row-cols-1 row-cols-md-3">
      {% for ressource in sorted_resources %}
        {% include projects.liquid project=ressource %}
      {% endfor %}
    </div>
    {% endif %}

{% endfor %}

{% else %}
{% assign sorted_resources = site.resources | sort: "importance" %}

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
      {% for ressource in sorted_resources %}
        {% include projects_horizontal.liquid project=ressource %}
      {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for ressource in sorted_resources %}
      {% include projects.liquid project=ressource %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
