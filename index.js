import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let posts = [];

app.get("/",(req,res) => {
    res.render("index.ejs", {
        posts: posts
    });
});

app.post("/add_blog", (req, res) => {
    let title = req.body["title"];
    let content = req.body["content"];
    posts.push({ title: title, content: content });
    res.redirect("/");
});

app.post("/delete/:id", (req, res) => {
    const id = parseInt(req.params.id);
    posts.splice(posts.length - 1 - id, 1);
    res.redirect("/");
});

app.get("/edit/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts[posts.length - 1 - id];
    res.render("edit.ejs", {
        post: post,
        id: id
    });
});

app.post("/edit/:id", (req, res) => {
    const id = parseInt(req.params.id);
    posts[posts.length - 1 - id] = {
        title: req.body["title"],
        content: req.body["content"]
    };
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});