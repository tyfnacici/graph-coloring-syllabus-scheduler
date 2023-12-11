const constraintService = require("../service/constraintService")

exports.createConstraint = async (req, res) => {
  try {
    const constraint = await constraintService.createConstraint(req.body)
    res.json({ data: constraint, status: "success" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.getConstraintByConstraintId = async (req, res) => {
  try {
    const constraint = await constraintService.getConstraintByConstraintId(
      req.params.id
    )
    res.json({ data: constraint, status: "success" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.updateConstraint = async (req, res) => {
  try {
    const constraint = await constraintService.updateConstraint(
      req.params.id,
      req.body
    )
    res.json({ data: constraint, status: "success" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.deleteConstraint = async (req, res) => {
  try {
    const constraint = await constraintService.deleteConstraint(req.params.id)
    res.json({ data: constraint, status: "success" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
