# JQCdN v10.2.0

JQCdN is a modern, lightweight, zero-dependency alternative to jQuery for DOM manipulation, traversal, and asynchronous requests. It is available via the `JQCdN()` or `$` function.

## Usage

To use JQCdN in your project, include the `jqcdn.js` and `jqcdn.css` files in your HTML file. The recommended way is to use the versioned jsDelivr CDN link.

```html
<!DOCTYPE html>
<html>
<head>
  <title>JQCdN Example</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/gtref/JQCdNv10.1.0@Version10.2.0/jqcdn.css">
  <script src="https://cdn.jsdelivr.net/gh/gtref/JQCdNv10.1.0@Version10.2.0/jqcdn.js"></script>
</head>
<body>

  <div id="main" class="card">
    <div class="card-body">
      <h1 id="my-heading" class="card-title">Hello, World!</h1>
      <p>This is a sample website using JQCdN.</p>
      <button id="my-button" class="btn btn-primary">Click Me</button>
    </div>
  </div>

  <script>
    // You can use either $ or JQCdN
    $(function() {
      // This function runs when the DOM is ready
      const heading = $('#my-heading');
      heading.css({ color: '#007bff' });

      $('#my-button').on('click', function() {
        $(this).text('Clicked!');
      });
    });
  </script>

</body>
</html>
```

## CSS Utility & Component Library

`jqcdn.css` is a minimal CSS library to help you style your projects quickly. It includes:
- **Utility Classes:** Helpers for display, flexbox, spacing, sizing, and typography (e.g., `.d-flex`, `.p-4`, `.text-center`).
- **Components:** Pre-styled components like `.card`, `.btn`, `.alert`, and `.form-control`.

## CDN

You can use JQCdN as a CDN by serving the files directly from this GitHub repository using jsDelivr. Use the following versioned link for stability:

**CSS:** `https://cdn.jsdelivr.net/gh/gtref/JQCdNv10.1.0@Version10.2.0/jqcdn.css`

**JavaScript:** `https://cdn.jsdelivr.net/gh/gtref/JQCdNv10.1.0@Version10.2.0/jqcdn.js`


## API Reference

### Core Function: `$(selector)` or `JQCdN(selector)`

The core function is the entry point to the library.

-   **`$(selector)`**: If the selector is a string, it returns a new `QueryWrapper` instance containing all matching elements. If the selector is a DOM node or an existing `QueryWrapper`, it wraps it.
-   **`$(function() { ... })`**: If a function is passed, it executes when the DOM is fully loaded (equivalent to `DOMContentLoaded`).

### Static Methods

-   **`$.ajax({ options })`**: Performs an asynchronous HTTP request using `fetch`. Returns a promise and accepts `success` and `error` callbacks.

### Wrapper Methods (Chainable)

#### Manipulation
-   `.html(content)`: Gets or sets the inner HTML.
-   `.text(content)`: Gets or sets the text content.
-   `.val(value)`: Gets or sets the value of form elements.
-   `.append(content)`: Appends content to the end of each selected element.
-   `.attr(name, value)`: Gets or sets an attribute.
-   `.css(styles)`: Gets a style property or sets multiple styles from an object.
-   `.addClass(name)`, `.removeClass(name)`, `.toggleClass(name)`: Manipulate CSS classes.
-   `.remove()`: Removes the selected elements from the DOM.
-   `.empty()`: Removes all child nodes from the selected elements.
-   `.toggle()`: Toggles the display (visible/hidden) of elements.

#### Traversal & Filtering
-   `.find(selector)`: Finds descendant elements.
-   `.parent()`: Gets the direct parent of each element.
-   `.children(selector)`: Gets the children of each element, optionally filtered by a selector.
-   `.closest(selector)`: Finds the first ancestor that matches the selector.
-   `.first()`: Reduces the set of matched elements to the first one.
-   `.last()`: Reduces the set of matched elements to the last one.
-   `.is(selector)`: Checks if any of the matched elements match the given selector.
-   `.each(callback)`: Iterates over the set of matched elements.

#### Events
-   `.on(eventName, selector, handler)`: Attaches an event listener. Supports event delegation by providing a `selector`.
-   `.off(eventName, handler)`: Removes an event listener.