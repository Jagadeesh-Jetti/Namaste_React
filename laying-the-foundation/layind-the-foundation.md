# ⚛️ React: JSX, Components, Parcel, Babel, and Script Types

A complete guide covering JSX, functional components, JSX transpilation, Parcel, Babel, and common interview questions.

---

## 🔧 Parcel Scripts & `npx` Explained

### 🔹 What does `npx parcel index.html` do?

- **`npx`**: Runs npm packages without globally installing them.
- **`parcel`**: The bundler being used to process files.
- **`index.html`**: Entry point file.

It starts a local development server and watches your files for changes (HMR).

---

## 📜 Why Use Scripts in `package.json`?

### What are scripts?

Scripts are **custom commands** defined in your `package.json` to automate tasks like development, testing, or builds.

```json
"scripts": {
  "start": "parcel index.html",
  "build": "parcel build index.html",
  "test": "jest"
}
```

- `npm start` → runs development server.
- `npm run build` → creates production build.
- `npm test` → runs tests.
- You can alias long commands like `npx parcel index.html` as `npm start`.

---

## 🧬 JSX – JavaScript XML

### ❓ What is JSX?

JSX is a **syntax extension for JavaScript** that looks similar to HTML but is used to create React elements.

```js
const heading = <h1>This is written using JSX</h1>;
```

JSX is NOT HTML in JavaScript. It's a syntactic sugar for `React.createElement`.

### 🔁 JSX vs React.createElement

```js
// Without JSX
const heading = React.createElement('h1', { id: 'heading' }, 'I am Ironman');

// With JSX
const jsxHeading = <h1 id="heading">I am Ironman</h1>;
```

Both output the same ReactElement → rendered as HTML.

---

## ✅ Benefits of JSX

- Clean and readable syntax
- Looks like HTML (familiar for frontend devs)
- Easier to write nested components
- Allows embedding JavaScript inside JSX

---

## 🧠 Behind the Scenes: JSX Compilation

- JSX is **not understood** by browsers or JavaScript engines.
- **Parcel** detects `.jsx` and passes it to **Babel**, a JS compiler.
- **Babel** transpiles JSX to `React.createElement()` calls and also converts modern JavaScript to be compatible with older browsers.

---

## 🔧 Babel’s Role

Babel is a JavaScript compiler that:

- Converts JSX → JS (React.createElement)
- Converts ES6+ code to browser-compatible code
- Is used internally by Parcel

---

## 📌 JSX Syntax Rules

- Return only **one parent element** per JSX block.
- Use **camelCase** for attributes like `className`, `htmlFor`.
- Multi-line JSX must be wrapped in `()`.

```jsx
const title = (
  <div className="container">
    <h1>Hello React</h1>
    <p>Welcome to JSX</p>
  </div>
);
```

---

## 🧱 React Components

### 📌 What is a Component?

A component is a **reusable piece of UI**. It can be a button, navbar, footer, etc.

### 🔸 Types:

- **Functional Components** (modern approach)
- **Class Components** (legacy)

### ✅ Functional Component Example

```jsx
const HeadingComponent = () => {
  return <h1>I am Ironman</h1>;
};
```

### 🔄 Component Composition

- Nesting one component inside another.

```jsx
const Child = () => <h2>I’m Spidey</h2>;

const Parent = () => (
  <div>
    <h1>I’m Ironman</h1>
    <Child />
  </div>
);
```

---

## 🔐 Cross-Site Scripting (XSS) in JSX

JSX automatically escapes content to prevent XSS attacks.

```jsx
const userInput = "<script>alert('hacked')</script>";
const safeOutput = <div>{userInput}</div>; // JSX escapes it safely
```

---

## 🧠 Using Components in JSX

### 🔸 Ways to Use:

```jsx
<TitleComponent />
<TitleComponent></TitleComponent>
{TitleComponent()} // Function call
```

Only the first two are valid JSX and recommended.

---

## 🧾 `script` Type in HTML

| Type               | Use Case                                 |
| ------------------ | ---------------------------------------- |
| `text/javascript`  | Default JS type                          |
| `module`           | For ES6 modules (with `import/export`)   |
| `application/json` | Embed JSON inside HTML for later use     |
| `importmap`        | Experimental, for mapping module imports |

Example:

```html
<script type="module">
  import React from 'react';
</script>
```

---

## 📘 Assignment & Q&A

### ❓ What is JSX?

JSX is a syntax that allows you to write HTML-like code in JavaScript to create React elements.

---

### ❓ Superpowers of JSX

1. Clean and readable syntax
2. Embeds JS within HTML-like tags
3. Easy to write complex UIs
4. Familiar for web devs
5. Prevents XSS automatically

---

### ❓ Difference between `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}`

| Syntax                                | Valid? | Meaning                               |
| ------------------------------------- | ------ | ------------------------------------- |
| `{TitleComponent}`                    | ❌     | Just references the function, not JSX |
| `{<TitleComponent />}`                | ✅     | Correct way to use as JSX element     |
| `{<TitleComponent></TitleComponent>}` | ✅     | Same as self-closing tag              |

---

## 🎯 Interview Questions

### 1. What is JSX?

A syntax extension used with React to describe UI elements.

---

### 2. How does JSX work under the hood?

JSX is transpiled to `React.createElement()` by Babel.

---

### 3. What is the difference between React.createElement and JSX?

JSX is syntactic sugar that internally compiles to `React.createElement`.

---

### 4. What is Babel?

A JavaScript compiler that transpiles JSX and ES6+ code for browser compatibility.

---

### 5. What is the role of Parcel in JSX?

Parcel acts as the bundler and detects JSX files, passing them to Babel for transpilation.

---

### 6. What is a functional component?

A plain JS function that returns JSX.

---

### 7. Why should JSX have only one parent element?

Because JSX must return a single React element. Use fragments (`<> </>`) if needed.

---

### 8. What is XSS and how does React protect against it?

Cross-site scripting. React escapes user inputs in JSX to prevent code injection.

---

### 9. What is script type="module"?

Allows use of ES6 modules (e.g., `import/export`) in HTML scripts.

---

### 10. How do you build a production-ready React app?

Use tools like Parcel/Vite, run `npm run build` for optimized production bundles.

---
