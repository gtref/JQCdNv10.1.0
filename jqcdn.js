/**
 * JQCdN v10.1.0
 * A simple library for demonstrating CDN functionality.
 */

(function(window) {
  'use strict';

  function define_jqcdn() {
    var JQCdN = {};

    JQCdN.version = '10.1.0';

    // A wrapper for a single DOM element
    function Element(el) {
      this.el = el;
    }

    Element.prototype.addClass = function(className) {
      this.el.classList.add(className);
      return this;
    };

    Element.prototype.removeClass = function(className) {
      this.el.classList.remove(className);
      return this;
    };

    Element.prototype.on = function(eventName, handler) {
        this.el.addEventListener(eventName, handler);
        return this;
    };

    Element.prototype.html = function(htmlString) {
        if (htmlString === undefined) {
            return this.el.innerHTML;
        }
        this.el.innerHTML = htmlString;
        return this;
    };

    Element.prototype.text = function(textString) {
        if (textString === undefined) {
            return this.el.textContent;
        }
        this.el.textContent = textString;
        return this;
    };

    Element.prototype.css = function(prop, value) {
        if (value === undefined && typeof prop === 'string') {
            return window.getComputedStyle(this.el).getPropertyValue(prop);
        }
        if (typeof prop === 'object') {
            for (var key in prop) {
                this.el.style[key] = prop[key];
            }
        } else {
            this.el.style[prop] = value;
        }
        return this;
    };

    Element.prototype.find = function(selector) {
        var elements = this.el.querySelectorAll(selector);
        return new ElementCollection(Array.from(elements));
    };

    Element.prototype.parent = function() {
        var parent = this.el.parentElement;
        return new ElementCollection(parent ? [parent] : []);
    };

    Element.prototype.children = function() {
        return new ElementCollection(Array.from(this.el.children));
    };

    Element.prototype.siblings = function() {
        if (!this.el.parentElement) {
            return new ElementCollection([]);
        }
        var siblings = Array.from(this.el.parentElement.children).filter(function(child) {
            return child !== this.el;
        }.bind(this));
        return new ElementCollection(siblings);
    };

    Element.prototype.closest = function(selector) {
        var closestEl = this.el.closest(selector);
        return new ElementCollection(closestEl ? [closestEl] : []);
    };

    // A wrapper for a collection of DOM elements
    function ElementCollection(nodes) {
        this.nodes = [];
        for (var i = 0; i < nodes.length; i++) {
            this.nodes.push(new Element(nodes[i]));
        }
    }

    ElementCollection.prototype.addClass = function(className) {
        this.nodes.forEach(function(node) {
            node.addClass(className);
        });
        return this;
    };

    ElementCollection.prototype.find = function(selector) {
        var allFound = [];
        this.nodes.forEach(function(node) {
            var foundNodes = node.el.querySelectorAll(selector);
            allFound.push.apply(allFound, Array.from(foundNodes));
        });
        var uniqueFound = Array.from(new Set(allFound));
        return new ElementCollection(uniqueFound);
    };

    ElementCollection.prototype.parent = function() {
        var allParents = [];
        this.nodes.forEach(function(node) {
            if (node.el.parentElement) {
                allParents.push(node.el.parentElement);
            }
        });
        var uniqueParents = Array.from(new Set(allParents));
        return new ElementCollection(uniqueParents);
    };

    ElementCollection.prototype.children = function() {
        var allChildren = [];
        this.nodes.forEach(function(node) {
            allChildren.push.apply(allChildren, Array.from(node.el.children));
        });
        return new ElementCollection(allChildren);
    };

    ElementCollection.prototype.siblings = function() {
        var allSiblings = [];
        this.nodes.forEach(function(node) {
            if (node.el.parentElement) {
                var siblings = Array.from(node.el.parentElement.children).filter(function(child) {
                    return child !== node.el;
                });
                allSiblings.push.apply(allSiblings, siblings);
            }
        });
        var uniqueSiblings = Array.from(new Set(allSiblings));
        return new ElementCollection(uniqueSiblings);
    };

    ElementCollection.prototype.closest = function(selector) {
        var allClosest = [];
        this.nodes.forEach(function(node) {
            var closestEl = node.el.closest(selector);
            if (closestEl) {
                allClosest.push(closestEl);
            }
        });
        var uniqueClosest = Array.from(new Set(allClosest));
        return new ElementCollection(uniqueClosest);
    };

    ElementCollection.prototype.html = function(htmlString) {
        if (htmlString === undefined) {
            return this.nodes.length > 0 ? this.nodes[0].html() : undefined;
        }
        this.nodes.forEach(function(node) {
            node.html(htmlString);
        });
        return this;
    };

    ElementCollection.prototype.text = function(textString) {
        if (textString === undefined) {
            return this.nodes.length > 0 ? this.nodes[0].text() : undefined;
        }
        this.nodes.forEach(function(node) {
            node.text(textString);
        });
        return this;
    };

    ElementCollection.prototype.css = function(prop, value) {
        if (value === undefined && typeof prop === 'string') {
            return this.nodes.length > 0 ? this.nodes[0].css(prop) : undefined;
        }
        this.nodes.forEach(function(node) {
            node.css(prop, value);
        });
        return this;
    };

    ElementCollection.prototype.removeClass = function(className) {
        this.nodes.forEach(function(node) {
            node.removeClass(className);
        });
        return this;
    };

    ElementCollection.prototype.on = function(eventName, handler) {
        this.nodes.forEach(function(node) {
            node.on(eventName, handler);
        });
        return this;
    };


    JQCdN.get = function(selector) {
      var elements = document.querySelectorAll(selector);
      return new ElementCollection(Array.from(elements));
    };

    JQCdN.template = function(templateString) {
      return function(data) {
        return templateString.replace(/\{\{([^}]+)\}\}/g, function(match, key) {
          var keys = key.trim().split('.');
          var value = data;
          for (var i = 0; i < keys.length; i++) {
            if (value === undefined) break;
            value = value[keys[i]];
          }
          return value || '';
        });
      };
    };

    JQCdN.ajax = function(options) {
        var url = options.url;
        var method = options.method || 'GET';
        var success = options.success || function() {};
        var error = options.error || function() {};
        var data = options.data || null;

        var fetchOptions = {
            method: method,
            headers: {}
        };

        if (data) {
            if (typeof data === 'object') {
                fetchOptions.body = JSON.stringify(data);
                fetchOptions.headers['Content-Type'] = 'application/json';
            } else {
                fetchOptions.body = data;
            }
        }

        fetch(url, fetchOptions)
            .then(function(response) {
                if (!response.ok) {
                    throw new Error('Network response was not ok: ' + response.statusText);
                }
                var contentType = response.headers.get('content-type');
                if (contentType && contentType.indexOf('application/json') !== -1) {
                    return response.json();
                }
                return response.text();
            })
            .then(function(data) {
                success(data);
            })
            .catch(function(err) {
                error(err);
            });
    };

    JQCdN.hello = function() {
      console.log('Hello from JQCdN!');
    };

    return JQCdN;
  }

  if (typeof(JQCdN) === 'undefined') {
    window.JQCdN = define_jqcdn();
  }
})(window);
