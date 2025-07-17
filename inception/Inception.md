# 🧱 Basic HTML, JavaScript, and React Setup

This document covers how to create a simple webpage using plain HTML, JavaScript, and React (via CDN).

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

1. Add an empty parent `div` with an `id` like:

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

- `document.createElement`, `getElementById`, and `appendChild` are **Web APIs provided by the browser**, not native JavaScript features.
- This approach uses **vanilla JavaScript** to manipulate the DOM.

---

## ⚛️ 3. Creating a Basic HTML Page Using React (via CDN)

Since HTML and JS do not come with React by default, we need to **include React manually** using a CDN.

### ✅ Steps:

1. Add the following React and ReactDOM CDNs just before the closing `</body>` tag:

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

2. Also include a root div and a script to render React content:

```html
<body>
  <div id="root"></div>

  <script
    crossorigin
    src="https://unpkg.com/react@18/umd/react.development.js"
  ></script>
  <script
    crossorigin
    src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
  ></script>

  <script>
    const heading = React.createElement('h1', null, 'Hello from React!');
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(heading);
  </script>
</body>
```

---

## 📌 Summary

| Approach      | Technology Used          | Notes                                         |
| ------------- | ------------------------ | --------------------------------------------- |
| Pure HTML     | HTML                     | Static content only                           |
| JS DOM        | JavaScript + Browser DOM | Dynamically create elements using JS          |
| React via CDN | React, ReactDOM          | Modern UI creation with virtual DOM rendering |

---

> 💡 Tip: This setup is great for understanding the core differences between how HTML, JavaScript, and React work to create UI elements on a webpage.
