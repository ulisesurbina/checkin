const express = require("express");

//Controllers
const {
    getAllRegisters,
    getIdRegister,
    createRegisters,
    updateRegisters,
    deleteRegisters,
} = require("../controllers/registrations.controller.js");

const registrationsRouter = express.Router();

registrationsRouter.get("/", getAllRegisters);

registrationsRouter.get("/:id", getIdRegister);

registrationsRouter.post("/", createRegisters);

registrationsRouter.patch("/:id", updateRegisters);

registrationsRouter.delete("/:id", deleteRegisters);

module.exports = { registrationsRouter };
