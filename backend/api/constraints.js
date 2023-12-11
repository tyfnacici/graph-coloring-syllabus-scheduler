const express = require("express")

const router = express.Router()

const {
  createConstraint,
  getConstraintByConstraintId,
  updateConstraint,
  deleteConstraint,
  getAllConstraints,
} = require("../controller/constraintController")

router.get("/", getAllConstraints)
router.post("/", createConstraint)
router.get("/:id", getConstraintByConstraintId)
router.post("/:id", updateConstraint)
router.delete("/:id", deleteConstraint)

module.exports = router;