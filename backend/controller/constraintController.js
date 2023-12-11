const constraintService = require("../service/constraintService")

exports.createconstraint = async (req, res) => {
  try {
    const constraint = await constraintService.createConstraint(req.body)
    res.json({ data: constraint, status: "success" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.getconstraintByconstraintId = async (req, res) => {
  try {
    const constraint = await constraintService.getConstraintByConstraintId(
      req.params.id
    )
    res.json({ data: constraint, status: "success" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.updateconstraint = async (req, res) => {
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

exports.deleteconstraint = async (req, res) => {
  try {
    const constraint = await constraintService.deleteConstraint(req.params.id)
    res.json({ data: constraint, status: "success" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
