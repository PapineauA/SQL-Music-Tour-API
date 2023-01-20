// DEPENDENCIES
const express = require("express");
const app = express();
const { Sequelize } = require("sequelize");
const bands = require("./controllers/bands_controllers");

// CONFIGURATION / MIDDLEWARE
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROOT
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Tour API",
  });
});

// CONTROLLERS
const bandsController = require("./controllers/bands_controller");
app.use("/bands", bandsController);

const eventsController = require("./controllers/events_controllers");
app.use("/events", eventsController);

const stagesController = require(".controllers/events_controllers");
app.use("/stages", stagesController);

// LISTEN
app.listen(process.env.PORT, () => {
  console.log(`🎸 Rockin' on port: ${process.env.PORT}`);
});
