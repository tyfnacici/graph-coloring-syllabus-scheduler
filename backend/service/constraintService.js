const constraintModel = require("../model/constraint")

exports.createConstraint = async (constraint) =>
  constraintModel.create(constraint)

exports.findConstraintByID = async (id) => constraintModel.findOne({ _id: id })

exports.updateConstraint = async (id, constraint) =>
  constraintModel.findOneAndUpdate({ id }, constraint, { new: true })

exports.deleteConstraint = async (id) => constraintModel.findOneAndDelete(id)

exports.getAllConstraints = async () => {
  constraintModel.find()
}
