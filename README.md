<p align="center">
  <img src="http://checkthese.com/img/IMG_0160.PNG?3" alt="Capricorne888" width="200" height="200">
</p>

# WAI-ARIA Role Application Script

This repository contains a JavaScript script designed to automatically apply WAI-ARIA roles and properties to dynamic content on a website, enhancing compatibility with screen readers and improving accessibility.

## Overview

WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications) provides a framework to improve the accessibility of web content and applications for people with disabilities. This script serves as a starting point for developers looking to integrate ARIA roles into their websites.

## What is WAI-ARIA? 

Imagine WAI-ARIA as a special set of instructions that help computers talk to people who can't see the screen. Just like how traffic signs guide drivers, WAI-ARIA guides computers on how to describe web pages to people using screen readers.

- **Roles**: These tell the computer what each part of a webpage does. For example, a "navigation" role tells the screen reader that this part helps you move around the site.
  
- **Properties**: These give extra details, like whether something can be clicked or if it's currently open or closed.

- **Live Regions**: These notify users about changes on the page, like when new messages arrive, so they don't miss important updates.

Overall, WAI-ARIA makes websites easier for everyone to use, especially those who rely on assistive technologies.

## Features

- **Applies ARIA Roles**: Automatically assigns roles such as `tablist`, `tab`, and `dialog` to specified elements.
- **Enhances Screen Reader Compatibility**: Uses `aria-live` for notifying users of dynamic content updates.
- **Customizable**: Can be adapted to fit different website structures and additional ARIA roles.

## Installation

1. Add to your page:
   ```bash
   <script src="https://cdn.jsdelivr.net/gh/capricorne888/WAI-ARIA@main/wai-aria.js"></script>

or copy the wai-aria.js to your site and add the <script> source to your page.
