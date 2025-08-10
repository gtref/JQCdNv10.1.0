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
        this.el.innerHTML = htmlString;
        return this;
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

    ElementCollection.prototype.html = function(htmlString) {
        this.nodes.forEach(function(node) {
            node.html(htmlString);
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
      if (elements.length === 0) {
          return null;
      } else if (elements.length === 1) {
          return new Element(elements[0]);
      } else {
          return new ElementCollection(elements);
      }
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

    JQCdN.hello = function() {
      console.log('Hello from JQCdN!');
    };

    return JQCdN;
  }

  if (typeof(JQCdN) === 'undefined') {
    window.JQCdN = define_jqcdn();
  }
})(window);
