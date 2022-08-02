const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use("/api/books", require("./routes/api/books"))

app.get("/", (req,res)=>{
    res.json({"msg":"hai"})
})

// 404 in below
app.use((req,res,next)=>{
    res.status(404).send("sorry can't find that")
})

app.use((err,req,res,next)=> {
    console.error(err.stack)
    res.status(500).send("something broke!")
})

app.listen(3000, ()=>{
    console.log("running on 3000")
})
