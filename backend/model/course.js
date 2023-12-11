const mongoose = require('mongoose');

const {Schema} = mongoose;

const courseSchema = new Schema({
    name: { type: String, required: true },
    instructorId: { type: Schema.Types.ObjectId, ref: 'Instructor', required: true },
    credits: { type: Number, required: true },
    desiredDays: { type: [String], default: [] },
  });
  
  module.exports = mongoose.model("Course", courseSchema)