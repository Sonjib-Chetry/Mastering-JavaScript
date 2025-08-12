
// ======================= BASIC TO ADVANCED CSS IN JS =======================

// ========== 1. Inline style using .style.property ==========
/*
   Directly sets style on an element (inline CSS).
   - Pros: Simple, immediate.
   - Cons: Harder to maintain for large projects.
*/
let body = document.getElementById("myBody");
function changeBodyStyle() {
    body.style.color = "white";
    body.style.backgroundColor = "blue";
}

// ========== 2. Multiple styles using setAttribute("style", "...") ==========
/*
   Sets multiple styles at once as a single string.
   - Pros: Easy to apply many styles quickly.
   - Cons: Overwrites any existing inline styles.
*/
let text = document.getElementById("text");
function changeParaStyle() {
    text.setAttribute("style", "color: red; font-size: 50px; text-align: center;");
}

// ========== 3. Using classList to add/remove CSS classes ==========
/*
   Applies styles from a predefined CSS class.
   - Pros: Reusable, clean, separates concerns.
   - Cons: Requires CSS to be defined beforehand.
*/
let note = document.getElementById("note");
function toggleClass() {
    note.classList.toggle("highlight");
}

// ========== 4. Using style.cssText ==========
/*
   Similar to setAttribute but cleaner in JS syntax.
   - Pros: Allows multiline strings with template literals.
   - Cons: Overwrites all inline styles on that element.
*/
let CSSText = document.getElementById('cssText');
function UseCSSText() {
    CSSText.style.cssText = `
        background-color: yellow;
        font-weight: bold;
        color: red;
        font-size: larger;
    `;
}

// ========== 5. Injecting a <style> Element Dynamically ==========
/*
   Creates a <style> tag with CSS rules and injects it into <head>.
   - Pros: Can create new styles on the fly.
   - Cons: Can bloat <head> if overused.
*/
function injectDynamicStyle() {
    const style = document.createElement('style');
    style.textContent = `
        .dynamic-style {
            background-color: purple;
            color: white;
            padding: 20px;
            border-radius: 10px;
        }
    `;
    document.head.appendChild(style);
    note.classList.add('dynamic-style');
}

// ========== 6. Modifying Stylesheets via document.styleSheets ==========
/*
   Directly adds CSS rules to an existing stylesheet.
   - Pros: Very powerful for advanced scenarios.
   - Cons: Harder to manage and debug.
*/
function addCSSRule() {
    document.styleSheets[0].insertRule(`
        .rule-added {
            border: 3px dashed green;
            padding: 10px;
        }
    `, 0);
    text.classList.add('rule-added');
}

// ========== 7. Using CSS Variables (Custom Properties) ==========
/*
   Updates global CSS variables defined in :root.
   - Pros: Perfect for theming.
   - Cons: Requires predefined variables in CSS.
*/
function updateCSSVariables() {
    document.documentElement.style.setProperty('--main-bg', 'lightpink');
    document.documentElement.style.setProperty('--main-color', 'darkblue');
    note.classList.add('variable-style');
}

// ========== 8. Dynamically Loading External Stylesheets ==========
/*
   Loads a complete external CSS file at runtime.
   - Pros: Useful for theme switching.
   - Cons: May cause flicker when loading.
*/
function loadExternalCSS(href) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
}

// ========== 9. Multiple Inline Styles via Object.assign ==========
/*
   Sets multiple styles using an object.
   - Pros: Keeps styles grouped in JS object syntax.
   - Cons: Still inline styling, so less reusable.
*/
function assignMultipleStyles() {
    Object.assign(text.style, {
        backgroundColor: 'black',
        color: 'yellow',
        padding: '10px',
        fontSize: '18px'
    });
}


/*
Summary Table:

| Method                  | How It Works                                 | Pros                  | Cons                       |
| ----------------------- | -------------------------------------------- | --------------------- | -------------------------- |
| `.style.property`       | Directly set individual styles               | Simple & immediate    | Not reusable, inline only  |
| `setAttribute("style")` | Apply multiple styles as string              | Quick for many styles | Overwrites existing inline |
| `classList`             | Apply/remove predefined CSS classes          | Clean, reusable       | Needs CSS defined          |
| `cssText`               | Apply multiple styles with template literals | Easy multiline        | Overwrites all inline      |
| Inject `<style>`        | Create styles in JS & add to head            | Flexible, dynamic     | Can clutter `<head>`       |
| `document.styleSheets`  | Add rules to existing CSS files              | Very powerful         | Harder to debug            |
| CSS Variables           | Change global theme colors                   | Perfect for theming   | Requires predefined vars   |
| Load `<link>`           | Load external CSS dynamically                | Easy theme switch     | Possible flicker           |
| `Object.assign`         | Apply styles from JS object                  | Organized syntax      | Still inline styling       |
*/