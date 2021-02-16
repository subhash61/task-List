const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  taskName: {
    type: String,
  },
  description: {
    type: String,
  },
  startTime: {
    type: Date,
  },
  endTime: {
    type: Date,
  },
  statusName: {
    type: String,
    default: "scheduled",
    enum: ["scheduled", "running", "expired"],
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
