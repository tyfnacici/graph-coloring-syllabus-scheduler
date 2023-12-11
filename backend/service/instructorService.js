const instructorModel = require("../model/instructor")

exports.createinstructor = async (instructor) =>
  instructorModel.create(instructor)

exports.findinstructorByID = async (id) => instructorModel.findOne({ _id: id })

exports.updateinstructor = async (id, instructor) =>
  instructorModel.findOneAndUpdate({ id }, instructor, { new: true })

exports.deleteinstructor = async (id) => instructorModel.findOneAndDelete(id)
