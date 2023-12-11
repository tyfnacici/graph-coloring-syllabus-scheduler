const mongoose = require("mongoose")

const { Schema } = mongoose

const constraintSchema = new Schema({
  courseId: { type: Schema.Types.ObjectId, ref: "Course", required: true },
  type: {
    type: String,
    enum: [
      "avoid conflicts",
      "assign to specific day",
      "instructor availability",
    ],
    required: true,
  },
  value: { type: Schema.Types.Mixed, required: true },
})

module.exports = mongoose.model("Constraint", constraintSchema)
