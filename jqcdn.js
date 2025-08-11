/**
 * JQCdN v10.2.0 (based on Refined-Query)
 * A modern, lightweight, zero-dependency alternative to jQuery.
 */
(function(window) {
    'use strict';

    class QueryWrapper {
        constructor(selector) {
            if (!selector) { this.elements = []; return; }
            if (selector instanceof QueryWrapper) { return selector; }
            if (typeof selector === 'string') { this.elements = Array.from(document.querySelectorAll(selector.trim())); }
            else if (selector.nodeType || selector === window) { this.elements = [selector]; }
            else { this.elements = Array.from(selector); }
        }

        get length() { return this.elements.length; }
        each(callback) { this.elements.forEach((el, i) => callback.call(el, i, el)); return this; }
        first() { return new QueryWrapper(this.elements[0]); }
        last() { return new QueryWrapper(this.elements[this.elements.length - 1]); }
        is(selector) { return this.elements.some(el => el.matches(selector)); }

        addClass(className) { this.elements.forEach(el => el.classList.add(className)); return this; }
        removeClass(className) { this.elements.forEach(el => el.classList.remove(className)); return this; }
        toggleClass(className) { this.elements.forEach(el => el.classList.toggle(className)); return this; }

        html(content) {
            if (content === undefined) return this.elements[0]?.innerHTML ?? '';
            this.elements.forEach(el => el.innerHTML = content);
            return this;
        }
        text(content) {
            if (content === undefined) return this.elements[0]?.textContent ?? '';
            this.elements.forEach(el => el.textContent = content);
            return this;
        }
        css(styles) {
            if (typeof styles === 'string') return this.elements[0]?.style[styles] ?? '';
            this.elements.forEach(el => Object.assign(el.style, styles));
            return this;
        }
        attr(name, value) {
            if (value === undefined) return this.elements[0]?.getAttribute(name);
            this.elements.forEach(el => el.setAttribute(name, value));
            return this;
        }
        val(value) {
            if (value === undefined) return this.elements[0]?.value;
            this.elements.forEach(el => el.value = value);
            return this;
        }

        append(content) {
            this.elements.forEach(el => {
                if (typeof content === 'string') { el.insertAdjacentHTML('beforeend', content); }
                else if (content instanceof QueryWrapper) { content.elements.forEach(child => el.appendChild(child.cloneNode(true))); }
                else { el.appendChild(content); }
            });
            return this;
        }
        remove() { this.elements.forEach(el => el.parentNode?.removeChild(el)); return this; }
        empty() { this.elements.forEach(el => el.innerHTML = ''); return this; }
        toggle() { this.elements.forEach(el => el.style.display = el.style.display === 'none' ? '' : 'none'); return this; }

        on(eventName, selector, handler) {
            const events = eventName.split(' ');
            if (typeof selector === 'function') {
                handler = selector;
                events.forEach(eName => this.elements.forEach(el => el.addEventListener(eName, handler)));
            } else {
                events.forEach(eName => {
                    this.elements.forEach(el => {
                        el.addEventListener(eName, e => {
                            const delegateTarget = e.target.closest(selector);
                            if (delegateTarget) { handler.call(delegateTarget, e); }
                        });
                    });
                });
            }
            return this;
        }
        off(eventName, handler) {
            const events = eventName.split(' ');
            events.forEach(eName => this.elements.forEach(el => el.removeEventListener(eName, handler)));
            return this;
        }

        find(selector) {
            const newElements = this.elements.flatMap(el => Array.from(el.querySelectorAll(selector)));
            return new QueryWrapper(newElements);
        }
        parent() {
            const parents = this.elements.map(el => el.parentElement).filter(el => el);
            return new QueryWrapper([...new Set(parents)]);
        }
        children(selector = null) {
            const children = this.elements.flatMap(el => Array.from(el.children));
            const filtered = selector ? children.filter(el => el.matches(selector)) : children;
            return new QueryWrapper([...new Set(filtered)]);
        }
        closest(selector) {
            const closest = this.elements.map(el => el.closest(selector)).filter(el => el);
            return new QueryWrapper([...new Set(closest)]);
        }
    }

    const JQCdN = function(selector) {
        if (typeof selector === 'function') {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', selector);
            } else {
                selector();
            }
        } else {
            return new QueryWrapper(selector);
        }
    };

    JQCdN.ajax = async function({ url, method = 'GET', data = null, headers = {}, success = () => {}, error = () => {} }) {
        const options = {
            method,
            headers: { 'Content-Type': 'application/json', ...headers },
        };
        if (data && (method === 'POST' || method === 'PUT')) {
            options.body = JSON.stringify(data);
        }
        try {
            const response = await fetch(url, options);
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            const responseData = await response.json();
            success(responseData);
            return responseData;
        } catch (err) {
            error(err);
            throw err;
        }
    };

    window.JQCdN = JQCdN;
    window.$ = JQCdN; // Provide $ as an alias for convenience
})(window);
