[![](https://data.jsdelivr.com/v1/package/npm/jqcdn/badge)](https://www.jsdelivr.com/package/npm/jqcdn) [![GitHub forks](https://img.shields.io/github/forks/gtref/JQCdNv10.1.0?style=social)](https://github.com/gtref/JQCdNv10.1.0/network) ![GitHub release (latest by date)](https://img.shields.io/github/v/release/gtref/JQCdNv10.1.0)

# JQCdN v1.10.0: CLI & Browser Library

JQCdN is a dual-purpose project providing a powerful, lightweight browser library (like jQuery) and a command-line tool (CLI) to manage your web projects.

## CLI Tool

### Installation

To install the JQCdN CLI, you need to have Node.js and npm installed. Then, you can install the package globally:

```bash
# Once published to npm
npm install -g jqcdn
```

Or, for development, clone this repository and link it locally:
```bash
git clone https://github.com/gtref/JQCdNv10.1.0.git
cd JQCdNv10.1.0
npm link
```

### CLI Usage & Commands

The CLI helps you manage your web projects.

-   **`jqcdn create`**: Creates a new sample `index.html` file in the current directory.
-   **`jqcdn serve`**: Starts a local development server to view your project live.
-   **`jqcdn build`**: Bundles your project assets into a `dist` directory.
-   **`jqcdn help`**: Displays this help message.

---

## Browser Library (`jqcdn.min.js` & `jqcdn.min.css`)

The CLI scaffolds a project that uses the JQCdN browser library. It's a modern alternative to jQuery with a familiar API.

### CDN Links

Use the following versioned links from the jsDelivr npm CDN for stability:

-   **CSS:** `https://cdn.jsdelivr.net/npm/jqcdn@1.10.0/jqcdn.min.css`
-   **JavaScript:** `https://cdn.jsdelivr.net/npm/jqcdn@1.10.0/jqcdn.min.js`

### API Reference

#### Core Function: `$(selector)` or `JQCdN(selector)`
-   **`$(selector)`**: Selects elements from the DOM.
-   **`$(function() { ... })`**: Executes code when the DOM is ready.

#### Static Methods
-   **`$.ajax({ options })`**: Performs an AJAX request.
-   **`$.splashScreen(action)`**: Shows or hides a global loading spinner (`'show'` or `'hide'`).

#### Wrapper Methods (Chainable)
-   **Manipulation**: `.html()`, `.text()`, `.val()`, `.append()`, `.attr()`, `.css()`, `.addClass()`, `.removeClass()`, `.toggleClass()`, `.remove()`, `.empty()`, `.toggle()`
-   **Dimensions**: `.width()`, `.height()`
-   **Animation**: `.fadeIn()`, `.fadeOut()`
-   **Traversal**: `.find()`, `.parent()`, `.children()`, `.closest()`, `.first()`, `.last()`, `.is()`, `.each()`
-   **Events**: `.on()`, `.off()`

### CSS Library Reference
- **Utilities**: Flexbox, spacing, typography, colors, borders, etc.
- **Components**: `.card`, `.btn`, `.alert`, `.form-control`, `.splash-screen`, `.spinner`, and `.modal`.

---
# Contribution
Below is a list of this repo's contributors. Thanks to them for helping me.

[![contributors](https://contrib.rocks/image?repo=gtref/JQCdNv10.1.0)](https://github.com/gtref/JQCdNv10.1.0/graphs/contributors)