const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
    name: { type: String, required: true },
    duration: { type: Number, required: true }, // in minutes
    caloriesBurned: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Workout', WorkoutSchema);
