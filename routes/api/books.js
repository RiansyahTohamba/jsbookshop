const express = require("express");
const router = express.Router();
// const uuid = require("uuid");
let books = require("../../models/books");

router.get("/", (req,res) => {
    res.json(books);
})

module.exports = router