const express = require("express")
const app = express()
const path = require("path")
const port = 8000

app.set("view engine", "ejs")
app.use("/", express.static(path.join(__dirname, "assets/css")))

app.get("/", (req, res) => {
    return res.render("index")
})
app.get("/about", (req, res) => {
    return res.render("about")
})
app.get("/contact", (req, res) => {
    return res.render("contact")
})
app.get("/properties", (req, res) => {
    return res.render("properties")
})



app.listen(port, (err) => {

    if (err) {
        console.log(err);
        return
    }
    console.log(`Server successful run on http://localhost:${port}`);

})