[![](https://data.jsdelivr.com/v1/package/gh/gtref/JQCdNv10.1.0/badge)](https://www.jsdelivr.com/package/gh/gtref/JQCdNv10.1.0)




# JQCdN v10.1.0

JQCdN is a simple JavaScript library and CSS stylesheet that demonstrates how to create a CDN-like project. It provides a small set of jQuery-like functions for DOM manipulation and a few basic CSS styles.

## Usage

To use JQCdN in your project, you can include the `jqcdn.js` and `jqcdn.css` files in your HTML file.

```html
<!DOCTYPE html>
<html>
<head>
  <title>JQCdN Example</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/gtref/JQCdNv10.1.0@e5e75144eb74d4746fbc41f5f3a95fa669aed866/jqcdn.css">
</head>
<body>

  <h1 id="my-heading">Hello, World!</h1>
  <button id="my-button">Click Me</button>

  <script src="https://cdn.jsdelivr.net/gh/gtref/JQCdNv10.1.0@e5e75144eb74d4746fbc41f5f3a95fa669aed866/jqcdn.js"></script>
  <script>
    // Example usage:
    var heading = JQCdN.get('#my-heading');
    heading.addClass('jqcdn-hello');

    var button = JQCdN.get('#my-button');
    button.on('click', function() {
      alert('Button clicked!');
    });
  </script>

</body>
</html>
```

## CSS Utility Library

`jqcdn.css` is a minimal, utility-first CSS library to help you style your projects without writing custom CSS. It includes helpers for:

- **Display:** `d-flex`, `d-grid`, `d-none`, etc.
- **Flexbox:** `flex-col`, `items-center`, `justify-between`, etc.
- **Spacing:** Margin and padding utilities like `m-4` (1rem) and `p-2` (0.5rem).
- **Sizing:** `w-full`, `h-screen`, etc.
- **Typography:** `text-lg`, `font-bold`, `text-center`, etc.
- **Colors:** A simple palette for text and background colors.
- **Borders:** `border`, `rounded-lg`, etc.

You can inspect the `jqcdn.css` file to see all available classes.

## Templating

JQCdN includes a simple templating engine to help you create dynamic content.

### `JQCdN.template(templateString)`

This function takes a template string with `{{placeholders}}` and returns a template function. The template function can then be called with a data object to generate the final HTML.

### `.html(htmlString)`

This method, available on `Element` and `ElementCollection` objects, sets the `innerHTML` of the selected element(s).

### Example

```html
<div id="user-profile"></div>

<script>
  var user = {
    name: 'John Doe',
    email: 'john.doe@example.com'
  };

  var templateString = '<h2>{{ name }}</h2><p>{{ email }}</p>';
  var template = JQCdN.template(templateString);
  var html = template(user);

  JQCdN.get('#user-profile').html(html);
</script>
```

## CDN

You can use JQCdN as a CDN by serving the files directly from this GitHub repository using a service like [jsDelivr](https://www.jsdelivr.com/).

To get the CDN links, use the following format:

```
https://www.jsdelivr.com/package/gh/gtref/JQCdNv10.1.0?tab=files
```

Replace `{user}`, `{repo}`, and `{version}` with your GitHub username, repository name, and the desired version (e.g., a git tag or commit hash).

For example, to use version 10.1.0 of the files from this repository, you would use the following links:

**CSS:**
```
https://cdn.jsdelivr.net/gh/gtref/JQCdNv10.1.0@e5e75144eb74d4746fbc41f5f3a95fa669aed866/jqcdn.css
```

**JavaScript:**
```
https://cdn.jsdelivr.net/gh/gtref/JQCdNv10.1.0@e5e75144eb74d4746fbc41f5f3a95fa669aed866/jqcdn.js
```

**Note:** You will need to replace `your-username` and `your-repo-name` with the actual username and repository name. You will also need to create a git tag for the version you want to use (e.g., `v10.1.0`).

## API

### `JQCdN.get(selector)`

Selects elements from the DOM using a CSS selector and returns an `ElementCollection` that can be chained with other methods. This collection is chainable even if no elements are found.

### `JQCdN.ajax(options)`

Performs an asynchronous HTTP (Ajax) request. It's a simple wrapper around the `fetch` API.

**Options:**
- `url`: The URL to request.
- `method`: The HTTP method (e.g., 'GET', 'POST'). Defaults to 'GET'.
- `data`: Data to be sent to the server. It is converted to a JSON string if it's an object.
- `success`: A function to be called if the request succeeds. It receives the response data (parsed as JSON if possible).
- `error`: A function to be called if the request fails.

**Example:**
```javascript
JQCdN.ajax({
  url: 'https://api.example.com/data',
  success: function(data) {
    console.log(data);
  },
  error: function(err) {
    console.error('Request failed', err);
  }
});
```

### `Element` and `ElementCollection` Methods

#### Manipulation
- `.html(htmlString)`: Gets the HTML contents of the first element or sets the HTML contents of all selected elements.
- `.text(textString)`: Gets the text content of the first element or sets the text content of all selected elements.
- `.css(prop, value)`: Gets the value of a style property for the first element, or sets one or more CSS properties for all selected elements.
- `.addClass(className)`: Adds a class to the selected element(s).
- `.removeClass(className)`: Removes a class from the selected element(s).

#### Events
- `.on(eventName, handler)`: Attaches an event listener to the selected element(s).

#### Traversal
- `.find(selector)`: Gets the descendants of each element in the current set of matched elements, filtered by a selector.
- `.parent()`: Gets the parent of each element in the current set of matched elements.
- `.children()`: Gets the children of each element in the current set of matched elements.
- `.siblings()`: Gets the siblings of each element in the current set of matched elements.
- `.closest(selector)`: For each element in the set, gets the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
