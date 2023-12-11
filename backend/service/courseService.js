const courseModel = require("../model/course")

exports.createcourse = async (course) => courseModel.create(course)

exports.findcourseByID = async (id) => courseModel.findOne({ _id: id })

exports.updatecourse = async (id, course) =>
  courseModel.findOneAndUpdate({ id }, course, { new: true })

exports.deletecourse = async (id) => courseModel.findOneAndDelete(id)
