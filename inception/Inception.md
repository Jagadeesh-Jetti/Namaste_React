# 🧱 Basic HTML, JavaScript, and React Setup

This document covers how to create a simple webpage using plain HTML, JavaScript, and React (via CDN). It's useful for understanding the difference between basic DOM manipulation and how React simplifies it.

---

## 📄 1. Creating a Basic HTML Page (Using Pure HTML)

### ✅ Steps:

1. Create a `.html` file.
2. Type `html:5` and hit enter (if you're using VS Code — Emmet shortcut) to generate the HTML boilerplate.
3. Inside the `<body>`, create a parent `div` and an `h1` tag:

```html
<body>
  <div>
    <h1>Hello Starky</h1>
  </div>
</body>
```

4. Open the file in a browser to see the heading displayed.

---

## 🧠 2. Creating a Basic HTML Page Using JavaScript

### ✅ Steps:

1. Add an empty parent `div` with an `id`:

```html
<body>
  <div id="root"></div>

  <script>
    const heading = document.createElement('h1');
    heading.innerHTML = 'Heyya! Need to understand basic stuff';

    const root = document.getElementById('root');
    root.appendChild(heading);
  </script>
</body>
```

### ℹ️ Notes:

- `document.createElement`, `getElementById`, and `appendChild` are **Web APIs provided by the browser**, not core JavaScript features.
- This is **vanilla JavaScript** DOM manipulation.

---

## ⚛️ 3. Creating a Basic HTML Page Using React (via CDN)

Since HTML and JS do not come with React, we need to include React manually using CDN.

### ✅ Steps:

1. Add these React and ReactDOM CDN links just before the closing `</body>` tag:

```html
<script
  crossorigin
  src="https://unpkg.com/react@18/umd/react.development.js"
></script>
<script
  crossorigin
  src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
></script>
```

2. Create a `div` with `id="root"` and render content using React:

```html
<body>
  <div id="root"></div>

  <script>
    const heading = React.createElement('h1', null, 'Hello from React!');
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(heading);
  </script>
</body>
```

### ❓ Why Two Scripts for React?

- `react.development.js` – contains the **core React library**.
- `react-dom.development.js` – allows React to interact with the **browser DOM**.

### 💡 Tip to Check if React is Loaded:

Open the browser console and type `React` or `ReactDOM`. If they return objects, React is loaded correctly.

---

## 🧱 4. Creating Nested Elements in React (Without JSX)

### Nested Example:

```html
<div id="parent">
  <div id="child">
    <h1>I am Ironman</h1>
  </div>
</div>
```

### React Equivalent:

```javascript
const parent = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement(
    'div',
    { id: 'child' },
    React.createElement('h1', {}, 'I am Ironman')
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
```

### Adding Sibling Elements:

```javascript
const parent = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'I am Ironman'),
    React.createElement('h1', {}, 'I am Spidey'),
  ])
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
```

> ❗ This syntax becomes hard to read and maintain, hence we use **JSX**.

---

## ⚙️ 5. Render Behavior and Script Order

### ❗ Script Order Matters:

React and ReactDOM scripts must be loaded **before** your own JavaScript files.

```html
<script
  crossorigin
  src="https://unpkg.com/react@18/umd/react.development.js"
></script>
<script
  crossorigin
  src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
></script>
<script src="./main.js"></script>
```

### ❓ What if a `<h1>` already exists inside the `root` div?

React will **replace** the content of the root div with the rendered content.

```html
<div id="root">
  <h1>This will be replaced</h1>
</div>
```

---

## 🎨 6. Styling and Attributes

You can pass attributes like `id`, `className`, and `style` via the second argument of `React.createElement`:

```javascript
const heading = React.createElement(
  'h1',
  { id: 'main-title', className: 'bold-title' },
  'Styled Heading'
);
```

Then you can link an external CSS file in your HTML:

```html
<link rel="stylesheet" href="styles.css" />
```

---

## 🧠 Concepts Recap

| Concept               | Description                                   |
| --------------------- | --------------------------------------------- |
| React Element         | A JavaScript object (not an HTML element yet) |
| `React.createElement` | Creates a React Element (object)              |
| `ReactDOM.createRoot` | Creates a root for rendering React in the DOM |
| `root.render`         | Renders the React Element into the real DOM   |

> ReactElement (JS Object) ➡️ Browser interprets ➡️ Actual DOM

---

## 🔥 Advanced Tips

- Move JS code into a separate file like `app.js` and link using `<script src="./app.js"></script>`.
- Use **JSX** to simplify nested structure writing (covered in next notes).
- React is a **library**, not a framework — because it can be used in parts, not full app takeover.

---

## ❓ Interview Q&A

### Q1: What's the difference between a library and a framework?

- A **library** provides tools to use in your code (you control the flow).
- A **framework** controls the structure and flow of your code (it calls your code).

### Q2: Why does React replace content inside the `root` div?

Because `root.render()` mounts the React element into the root, replacing all previous DOM content inside.

### Q3: What is `crossorigin` in the script tag?

The `crossorigin` attribute allows the browser to make cross-origin requests (like loading from a CDN) while preserving security policies (like CORS). React recommends using this to enable better debugging with error stacks.

### Q4: Why is DOM manipulation expensive?

Every DOM update causes reflow and repaint, which is computationally costly. React reduces these by using a **Virtual DOM** and batching updates efficiently.

---
