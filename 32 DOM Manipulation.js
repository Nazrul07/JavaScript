// DOM = Document Object Model

// When a browser loads HTML, it convets it into a tree of objects that JS can read, modify, add to, or delete.


/*
DOM Tree - Mental Model

document
└── <html>
    ├── <head>
    │   └── <title>
    └── <body>
        ├── <div id="app">
        │   ├── <h1 class="title">Hello</h1>
        │   └── <p>World</p>
        └── <footer>

Every HTML element is a node in this tree. JS can access and manipulate any node.
*/