const instructorService = require("../service/instructorService")

exports.createinstructor = async (req, res) => {
  try {
    const instructor = await instructorService.createInstructor(req.body)
    res.json({ data: instructor, status: "success" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.getinstructorByinstructorId = async (req, res) => {
  try {
    const instructor = await instructorService.getInstructorByInstructorId(
      req.params.id
    )
    res.json({ data: instructor, status: "success" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.updateinstructor = async (req, res) => {
  try {
    const instructor = await instructorService.updateInstructor(
      req.params.id,
      req.body
    )
    res.json({ data: instructor, status: "success" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.deleteinstructor = async (req, res) => {
  try {
    const instructor = await instructorService.deleteInstructor(req.params.id)
    res.json({ data: instructor, status: "success" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
