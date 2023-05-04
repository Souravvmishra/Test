const app = require("express")()

app.get("/", (req, res)=>{
    res.json({"message" : "Hello World"})
})


app.get("/test", (req, res)=>{
    res.json({"message" : "Hello Test"})
})

app.listen(5000, () => {
    console.log("Listening on port 5000")
})


