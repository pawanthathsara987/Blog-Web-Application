# Blog Web Application

A simple blog web application built with Node.js, Express, and EJS. Users can add, edit, and delete blog posts. All posts are stored in memory (not persisted after server restart).

## Features

- Add new blog posts with a title and content
- Edit existing blog posts
- Delete blog posts
- Responsive UI using Bootstrap
- Sticky footer

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed

### Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd Blog-Web-Application
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

### Running the App

```sh
node index.js
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
Blog-Web-Application/
│
├── public/
│   └── styles.css
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── index.ejs
│   └── edit.ejs
├── index.js
└── package.json
```

## Notes

- Posts are stored in memory and will be lost when the server restarts.
- For persistent storage, integrate a database like MongoDB.

## License
