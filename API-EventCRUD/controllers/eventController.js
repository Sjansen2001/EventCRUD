"use strict";

const eventData = require("../data/events");

const getEventsLength = async (req, res, next) => {
  try {
    const eventlist = await eventData.getEventsLength();
    res.send(eventlist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getEvents = async (req, res, next) => {
  try {
    const offset = req.params.offset;
    const limit = req.params.limit;
    const eventlist = await eventData.getEvents(offset, limit);
    res.send(eventlist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getEvent = async (req, res, next) => {
  try {
    const eventId = req.params.id;
    const event = await eventData.getById(eventId);
    res.send(event);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const addEvent = async (req, res, next) => {
  try {
    const data = req.body;
    const insert = await eventData.creatEvent(data);
    res.send(insert);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updatEvent = async (req, res, next) => {
  try {
    const eventId = req.params.id;
    const data = req.body;
    const updated = await eventData.updateEvent(eventId, data);
    res.send(updated);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteEvent = async (req, res, next) => {
  try {
    const eventId = req.params.id;
    const deletedEvent = await eventData.deleteEvent(eventId);
    res.send(deletedEvent);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getEventsLength,
  getEvents,
  getEvent,
  addEvent,
  updatEvent,
  deleteEvent,
};
