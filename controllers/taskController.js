const Task = require("../models/taskModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.createTask = catchAsync(async (req, res, next) => {
  const task = await Task.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      task,
    },
  });
});

exports.getTask = catchAsync(async (req, res, next) => {
  const task = await Task.findById(req.params.taskid);
  if (!task) {
    return next(new AppError("No task with that id", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      task,
    },
  });
});

exports.editTask = catchAsync(async (req, res, next) => {
  const task = await Task.findByIdAndUpdate(req.params.taskid, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(new AppError("No task found with that ID", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      data: task,
    },
  });
});

exports.deleteTask = catchAsync(async (req, res, next) => {
  const task = await Task.findByIdAndDelete(req.params.id);

  if (!task) {
    return next(new AppError("No task found with that ID", 404));
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
});
