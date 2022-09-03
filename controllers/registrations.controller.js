const { Registration } = require("../models/registration.model.js");

const getAllRegisters = async (req, res) => {
    try {
        const registrations = await Registration.findAll();
        res.status(200).json({
            status: "success",
            data: {
                registrations: registrations,
            },
        });
    } catch (error) {
        console.log(error);
    }
};

const getIdRegister = async (req, res) => {
    try {
        const { id } = req.params;
        const register = await Registration.findOne({ where: { id } });
        if (!register) {
            return res.status(404).json({
                status: "error",
                message: "Register not found",
            });
        }
        res.status(200).json({
            status: "success",
            data: {
                register: register,
            },
        });
    } catch (error) {
        console.log(error);
    }
};

const createRegisters = async (req, res) => {
    try {
        const { entranceTime } = req.body;
        const newRegistration = await Registration.create({
            entranceTime,
        });
        res.status(201).json({
            status: "success",
            data: { newRegistration },
        });
    } catch (error) {
        console.log(error);
    }
};

const updateRegisters = async (req, res) => {
    try {
        const { exitTime, status } = req.body;
        const { id } = req.params;

        const register = await Registration.findOne({ where: { id } });
        if (!register) {
            return res.status(404).json({
                status: "error",
                message: "Register not found",
            });
        }
        await register.update({ exitTime, status });
        res.status(200).json({
            status: "success",
            data: { register },
        });
    } catch (error) {
        console.log(error);
    }
};

const deleteRegisters = async (req, res) => {
    try {
        const { id } = req.params;
        const register = await Registration.findOne({ where: { id } });

        if (!register) {
            return res.status(404).json({
                status: "error",
                message: "Register not found",
            });
        }
        await register.update({ status: "cancelled" });
        res.status(204).json({ status: "success" });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getAllRegisters,
    createRegisters,
    updateRegisters,
    deleteRegisters,
    getIdRegister,
};
