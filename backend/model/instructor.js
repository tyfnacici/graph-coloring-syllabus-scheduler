const mongoose = require('mongoose');

const {Schema} = mongoose;

const instructorSchema = new Schema({
    name: { type: String, required: true },
    courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
    availability: {
      days: { type: [String], default: [] },
      timeSlots: { type: [String], default: [] },
    },
  });
  
  module.exports(mongoose.model("Instructor", instructorSchema))