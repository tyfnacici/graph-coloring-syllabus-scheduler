const express = require('express');
const courses = require("./courses")
const constraints = require("./constraints")

const router = express.Router()

router.get("/",(req,res)=>res.end("hello"))

router.use("api/courses", courses)
router.use("api/constraints", constraints)

module.exports = router;