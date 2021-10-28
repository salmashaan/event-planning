const express = require("express");
const connectDB = require("./database");
const eventRoutes = require("./apis/events/routes");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.protocol}://${req.get("host")}${req.path}`);
  next();
});

app.use("/api/events", eventRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Path Not Found" });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: "Internal Server Error" });
});

connectDB();

const PORT = 8001;

app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});
