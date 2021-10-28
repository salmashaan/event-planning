const express = require("express");

const {
  eventListFetch,
  eventListCreate,
  eventListDelete,
  eventListUpdate,
  eventListDetail,
  eventListBooked,
} = require("./controllers");

const router = express.Router();

router.get("/", eventListFetch);

router.post("/", eventListCreate);

router.delete("/:eventId", eventListDelete);

router.put("/:eventId", eventListUpdate);

router.get("/full", eventListBooked);

router.get("/:eventId", eventListDetail);

module.exports = router;
