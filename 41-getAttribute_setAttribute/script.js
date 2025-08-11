
//What they are?
// element.getAttribute(name) — returns the attribute value as a string, or null if the attribute doesn't exist.
// element.setAttribute(name, value) — sets the attribute name to the string form of value on element.
// These operate on attributes (the markup-level, string key/value pairs), not directly on JS object properties of DOM nodes — that difference matters a lot.


// <div id="card" class="product" data-id="42">Hello</div>

const card = document.getElementById('card');

card.getAttribute('class');       // "product"
card.getAttribute('data-id');     // "42"
card.getAttribute('nonexistent'); // null

card.setAttribute('title', 'Product card');
card.getAttribute('title');       // "Product card"

card.setAttribute('data-price', 199);
card.getAttribute('data-price');  // "199"   <-- value is converted to string


//If you want to remove an attribute:

card.removeAttribute('title');
card.hasAttribute('title'); // false


//Attributes vs. Properties — the important difference
// Attributes are the string values written in HTML (what getAttribute()/setAttribute() read/write).
// Properties are JS object properties on DOM elements (e.g., el.value, el.checked, el.className), often typed (booleans, numbers, objects).

//Example (common gotcha):

// <input id="name" value="Alice">

const i = document.getElementById('name');
i.getAttribute('value'); // "Alice"  (the attribute / initial value)
i.value                 // "Alice"  (live property)

i.value = 'Bob';
i.getAttribute('value'); // still "Alice"  (attribute not automatically updated)

//So:
// Attributes often represent initial markup/defaults.
// Properties are the element’s current, live state.
// Some attributes are reflected to properties (and vice versa) — but which attributes reflect is element-specific. Don’t rely on automatic reflection for every attribute.
// Rule of thumb: use properties for live state (.value, .checked, .disabled, .classList, .style), and use attributes for markup-like or serialized data (data-*, ARIA, title, href etc.).


//Boolean attributes (checked / disabled / selected)
// Boolean attributes are presence attributes: if present → true, if not → false.

//<input id="cb" type="checkbox" checked>

const cb = document.getElementById('cb');

// Preferred: check the property
cb.checked  // true  (boolean)

// getAttribute gives a string or empty string depending on markup/browser,
// so it's less reliable for boolean checks:
cb.getAttribute('checked') // "" or "checked"  (presence, not a boolean)

// Setting/unsetting:

// Preferred:
cb.checked = false;          // changes live state
// To change the attribute itself:
cb.removeAttribute('checked'); // remove presence
cb.setAttribute('checked', ''); // add presence

//Recommendation: use the property (.checked, .disabled) for boolean state.


//data-* attributes and dataset
// HTML data-* are perfect for custom data.

// <div id="item" data-id="42" data-user-name="alex"></div>

const it = document.getElementById('item');
it.getAttribute('data-id');     // "42"
it.dataset.id                   // "42"
it.dataset.userName             // "alex"

// set via dataset (recommended)
it.dataset.count = 10;          // sets data-count="10"
// or via setAttribute:
it.setAttribute('data-price', '199');

//dataset exposes camelCase keys mapped from hyphenated names (data-user-name → dataset.userName).

/*
When to prefer setAttribute / getAttribute vs properties
Prefer DOM properties or helper APIs when available:

class: el.classList.add('x') / el.className = '...' instead of setAttribute('class', ...).
style: el.style.backgroundColor = 'red' instead of setAttribute('style', 'background-color:red').
boolean state: el.disabled = true instead of setAttribute('disabled', '').
events: el.addEventListener('click', fn) instead of setAttribute('onclick', '...') (security & CSP).

Use setAttribute/getAttribute when:

You need to read or write custom attributes (e.g. data-*).
You need to manage ARIA attributes (aria-*).
You are working with attributes that don't have a direct property or when you explicitly want to change the markup-level attribute.
Working with XML/SVG where namespace handling is required.

Small cheatsheet (what to use):
Read/modify boolean UI state (checked/disabled): use properties (.checked, .disabled).
Add/remove classes: classList (add, remove, toggle).
Inline style: el.style.prop.
Custom data: dataset or setAttribute('data-...').
ARIA attributes / generic attributes: setAttribute / getAttribute.
SVG namespaced attributes: setAttributeNS / getAttributeNS.
Event listeners: addEventListener (not setAttribute('onclick',...)).

Useful, copyable examples:

Toggle a "disabled" attribute (preferred and attribute-level ways):

// preferred
button.disabled = true;
button.disabled = false;

// attribute-level
button.setAttribute('disabled', '');
button.removeAttribute('disabled');


Read / write JSON-ish data safely:

const card = document.getElementById('card');
card.setAttribute('data-meta', JSON.stringify({id: 42, price: 199}));
const meta = JSON.parse(card.getAttribute('data-meta'));


Observe attribute changes:

const obs = new MutationObserver(muts => console.log(muts));
obs.observe(card, { attributes: true, attributeOldValue: true });
card.setAttribute('data-id', '100'); // observer will notify


Custom element responding to attributes:

class CounterEl extends HTMLElement {
  static get observedAttributes() { return ['count']; }
  attributeChangedCallback(name, oldV, newV) {
    if (name === 'count') this.render();
  }
  render() { this.textContent = `Count: ${this.getAttribute('count')}`; }
}
customElements.define('x-counter', CounterEl);
const c = document.createElement('x-counter');
c.setAttribute('count', '5'); // shows "Count: 5"
*/