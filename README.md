# JQCdN CLI

A simple command-line tool to scaffold a sample project using the JQCdN browser library.

## Installation

To install the JQCdN CLI, you need to have Node.js and npm installed. Then, you can install the package globally from npm (once it's published):

```bash
npm install -g jqcdn
```

Alternatively, you can clone this repository and link it locally for development:
```bash
git clone https://github.com/gtref/JQCdNv10.1.0.git
cd JQCdNv10.1.0
npm link
[![](https://data.jsdelivr.com/v1/package/npm/jqcdn/badge)](https://www.jsdelivr.com/package/npm/jqcdn)  [![GitHub forks](https://img.shields.io/github/forks/gtref/JQCdNv10.1.0?style=social)](https://github.com/gtref/JQCdNv10.1.0/network) ![GitHub release (latest by date)](https://img.shields.io/github/v/release/gtref/JQCdNv10.1.0)

# JQCdN v10.9.0 and v10.4.0



JQCdN is a modern, lightweight, zero-dependency alternative to jQuery for DOM manipulation, traversal, and asynchronous requests. It is available via the `JQCdN()` or `$` function.

## Usage

To use JQCdN in your project, include the `jqcdn.js` and `jqcdn.css` files in your HTML file. The recommended way is to use the versioned jsDelivr npm CDN link.

```html
<!DOCTYPE html>
<html>
<head>
  <title>JQCdN Example</title>

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/jqcdn@10.9.0/jqcdn.min.css">
  <script src="https://cdn.jsdelivr.net/npm/jqcdn@10.9.0/jqcdn.min.js"></script>


</head>
<body>
  <div id="main" class="card">
    <div class="card-body">
      <h1 id="my-heading" class="card-title">Hello, World!</h1>
    </div>
  </div>

  <script>
    // Show a splash screen on load, and hide it after 1.5 seconds
    $.splashScreen('show');
    setTimeout(() => $.splashScreen('hide'), 1500);
  </script>
</body>
</html>
```

## CSS Utility & Component Library

`jqcdn.css` is a minimal CSS library to help you style your projects quickly. It includes:
- **Utility Classes:** Helpers for display, flexbox, spacing, sizing, and typography.
- **Components:** Pre-styled components like `.card`, `.btn`, `.alert`, `.form-control`, and the new `.splash-screen` with a `.spinner`.

## CDN


You can use JQCdN as a CDN by serving the files directly from npm via jsDelivr. Use the following versioned link for stability:

You can use JQCdN as a CDN by serving the files directly from this GitHub repository using jsDelivr. Use the following versioned link for stability:



**CSS:** `https://cdn.jsdelivr.net/npm/jqcdn@10.9.0/jqcdn.min.css`


**JavaScript:** `https://cdn.jsdelivr.net/npm/jqcdn@10.9.0/jqcdn.min.js`

```
https://www.jsdelivr.com/package/npm/jqcdn

```

## Usage

The primary command is `create`. This command will generate a sample `index.html` file in your current directory. This HTML file is pre-configured to use the JQCdN browser library and CSS from a CDN.

To use it, simply run:
```bash
jqcdn create
```


This will create an `index.html` file with a sample to-do list application. You can open this file in your browser to see the JQCdN library in action.

## API Reference

### Core Function: `$(selector)` or `JQCdN(selector)`

The core function is the entry point to the library.

-   **`$(selector)`**: If the selector is a string, it returns a new `QueryWrapper` instance containing all matching elements. If the selector is a DOM node, it wraps it.



-   **`$(selector)`**: If the selector is a string, it returns a new `QueryWrapper` instance containing all matching elements. If the selector is a DOM node or an existing `QueryWrapper`, it wraps it.
-   **`$(function() { ... })`**: If a function is passed, it executes when the DOM is fully loaded (equivalent to `DOMContentLoaded`).


### Static Methods

-   **`$.ajax({ options })`**: Performs an asynchronous HTTP request.
-   **`$.splashScreen(action)`**: Controls the global splash screen. `action` can be `'show'` or `'hide'`.

### Wrapper Methods (Chainable)

#### Manipulation
-   `.html(content)`, `.text(content)`, `.val(value)`: Get or set content.
-   `.append(content)`: Appends content to elements.
-   `.attr(name, value)`: Get or set an attribute.
-   `.css(styles)`: Get or set CSS styles.
-   `.addClass(name)`, `.removeClass(name)`, `.toggleClass(name)`: Manipulate classes.
-   `.remove()`, `.empty()`: Remove elements or their content.
-   `.toggle()`: Toggle element visibility.

#### Traversal & Filtering
-   `.find(selector)`, `.parent()`, `.children(selector)`, `.closest(selector)`: Traverse the DOM tree.
-   `.first()`, `.last()`, `.is(selector)`, `.each(callback)`: Filter and iterate over elements.

#### Events
-   `.on(eventName, selector, handler)`: Attaches an event listener, with optional delegation.
-   `.off(eventName, handler)`: Removes an event listener.



--



#### Events
- `.on(eventName, handler)`: Attaches an event listener to the selected element(s).

#### Traversal
- `.find(selector)`: Gets the descendants of each element in the current set of matched elements, filtered by a selector.
- `.parent()`: Gets the parent of each element in the current set of matched elements.
- `.children()`: Gets the children of each element in the current set of matched elements.
- `.siblings()`: Gets the siblings of each element in the current set of matched elements.
- `.closest(selector)`: For each element in the set, gets the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.


--
#contribution
--
Below is a list of this repos contributers. Thanks to them for helping me.

[![contributors](https://contrib.rocks/image?repo=gtref/JQCdNv10.1.0)](https://github.com/gtref/JQCdNv10.1.0/graphs/contributors)


### Commands

-   `jqcdn create`: Creates the sample `index.html` file.
-   `jqcdn help` (or any other command): Displays the help message.

---

*Note: The JQCdN browser library and CSS files are still available in the `src` directory of this package.*