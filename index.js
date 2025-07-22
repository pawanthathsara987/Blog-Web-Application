import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/",(req,res) => {
    res.render("index.ejs");
});

app.post("/add_blog", (req, res) => {
    let title = req.body["title"];
    let content = req.body["content"];
    
    console.log(`Title: ${title}`);
    console.log(`Content: ${content}`);
    
    res.redirect("/");
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});