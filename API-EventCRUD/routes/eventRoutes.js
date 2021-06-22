"use strict";

const express = require("express");
const eventControll = require("../controllers/eventController");
const router = express.Router();

router.get("/events", eventControll.getEventsLength);
router.get("/events/:offset/:limit", eventControll.getEvents);
router.get("/read-event/:id", eventControll.getEvent);
router.post("/add-event", eventControll.addEvent);
router.put("/update-event/:id", eventControll.updatEvent);
router.delete("/delete-event/:id", eventControll.deleteEvent);

module.exports = {
  routes: router,
};
