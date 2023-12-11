const express = require("express")
const courses = require("./courses")
const constraints = require("./constraints")

const router = express.Router()

router.get("/", (req, res) => res.end("hello"))

router.use("/api/course", courses)
router.use("/api/constraint", constraints)

module.exports = router
