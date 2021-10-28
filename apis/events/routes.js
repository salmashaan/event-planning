const express = require("express");

const {
  eventListFetch,
  eventListCreate,
  eventListDelete,
  eventListUpdate,
  eventListDetail,
} = require("./controllers");

const router = express.Router();

router.get("/", eventListFetch);

router.post("/", eventListCreate);

router.delete("/:eventId", eventListDelete);

router.put("/:eventId", eventListUpdate);

router.get("/:eventId", eventListDetail);

module.exports = router;
