import mongoose from "mongoose";

const saveVehicle = async (ctx) => {
    try {
        const {
            type,
            owner,
            description
        } = ctx.request.body;

        const vehicle = await Vehicle.create({
            type: type,
            owner: owner,
            description: description,
        });

        return (ctx.body = {
                isSuccess: true,
                message: "Vehicle saved successfully.",
            });
    } catch (error) {
        return (ctx.body = {
            isSuccess: false,
            message: "Error has been occured. Please try again.",
        })
    }
};

const updateVehicle = async (ctx) => {
    try {
        const {
            type,
            owner,
            description
        } = ctx.request.body;

        const vehicle = await Vehicle.findByIdAndUpdate(id, {
            type: type,
            owner: owner,
            description: description
        });

        return (ctx.body = {
            isSuccess: true,
            message: "Vehicle updated successfully.",
        });
    } catch (error) {
        return (ctx.body =
            {
                isSuccess: false,
                message: "Error has been occured. Please try again.",
            });
    }
};

const deleteVehicle = async (ctx) => {
    try {
        const vehicleId = ctx.params.id;

        const query = await Vehicle.findByIdAndDelete(vehicleId);

        return (ctx.body = {
            isSuccess: true,
            message: "Vehicle deleted successfully.",
        });
    } catch (error) {
        return (ctx.body = {
            isSuccess: false,
            message: "Error has been occured. Please try again.",
        });
    }
};

const getVehicleDetails = async (ctx) => {
    try {
        const { searchText } = ctx.request.body;

        if (searchText === "") {
            const vehicleDetails = await Vehicle.find().exec();

            return (ctx.body = vehicleDetails);
        } else {
            const vehicleDetails = await Vehicle.find({vehicle: searchText});

            return (ctx.body = vehicleDetails);
        }
    } catch (error) {

    }
};

const getVehicleById = async (ctx) => {
    try {
        const vehicleId = ctx.params.id;

        const vehicle = await Vehicle.find(vehicleId);

        return (ctx.body = vehicle);
    } catch (error) {

    }
};

module.exports = { saveVehicle , updateVehicle , deleteVehicle , getVehicleDetails , getVehicleById }