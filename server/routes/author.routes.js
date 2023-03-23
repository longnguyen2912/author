const AuthorController = require("../controllers/author.controller")

module.exports=(app)=>{
    app.get("/api/testing", AuthorController.apiTest)
    app.get("/api/Author", AuthorController.allAuthor)
    app.get("/api/Author/:id", AuthorController.oneAuthor)
    app.post("/api/Author", AuthorController.createAuthor)
    app.put("/api/Author/:id", AuthorController.updateAuthor)
    app.delete("/api/Author/:id", AuthorController.deleteAuthor)
}