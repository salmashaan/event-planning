const Event = require("../../models/Event");
const mongoose = require("mongoose");
const { Module } = require("module");

exports.eventListCreate = async (req, res, next) => {
  try {
    const newEvent = await Event.create(req.body);
    res.status(201);
    return res.json(newEvent);
  } catch (error) {
    next(error);
  }
};

exports.eventListFetch = async (req, res, next) => {
  try {
    const events = await Event.find();
    return res.json(events);
  } catch (error) {
    next(error);
  }
};

exports.eventListDelete = async (req, res, next) => {
  const { eventId } = req.params;
  try {
    deleteEvent = await Event.findByIdAndDelete({ _id: eventId });

    if (deleteEvent) {
      return res.status(204).end();
    } else {
      next({ status: 404, message: "This event doesn't exist" });
    }
  } catch (error) {
    next(error);
  }
};

exports.eventListUpdate = async (req, res, next) => {
  const { eventId } = req.params;
  try {
    const updateEvent = await Event.findByIdAndUpdate(
      { _id: eventId },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (updateEvent) {
      res.status(200).json(updateEvent);
    } else {
      next({ status: 404, message: "This product doesn't exist" });
    }
  } catch (error) {
    next(error);
  }
};

exports.eventListDetail = async (req, res, next) => {
  const { eventId } = req.params;
  try {
    const eventDetail = await Event.findById({ _id: eventId });
    return res.status(200).json(eventDetail);
  } catch (error) {
    next(error);
  }
};

exports.eventListBooked = async (req, res, next) => {
  try {
    let full = await Event.find({
      $expr: { $eq: ["$numOfSeats", "$bookedSeats"] },
    });
    return res.status(200).json(full);
  } catch (error) {
    next(error);
  }
};
