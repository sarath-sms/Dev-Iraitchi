import { IraiDrive } from "../models/iraiDriveModal";

export const createIraiDrive = async (req, res, next) => {
    try {
        const {
            email, driveName, aadhaar,
            bikeNo, drivingLicence, password, online
        } = req.body;
        const existingDriver = await IraiDrive.findOne({ aadhaar });
        if(existingDriver?.aadhaar) {
            res.status(409).json({ status: false, message: "Driver already exist" })
        } else {
            const iraiDrive = await IraiDrive.create({ email, driveName, aadhaar,
                bikeNo, drivingLicence, password, online })
            res.status(201).json({ message: "Driver created in successfully", success: true, iraiDrive });
        }
    } catch(error) {
        res.status(500).json({ message: "Something Went Wrong. Please Try Again Later", success: true, error });
    }
    next()
}

export const listIraiDrive = async (req, res, next) => {
    try {   
        const iraiDrives = await IraiDrive.find();
        res.status(200).json(iraiDrives);
    } catch (error) {
        res.status(500).json({ message: "Something Went Wrong. Please Try Again Later", success: true, error });
    }
    next()
  };

export const viewIraiDrive = async (req, res, next) => {
    try {   
        const iraiDrives = await IraiDrive.findOne({_id: req?.params?.id});
        res.status(200).json(iraiDrives);
    } catch (error) {
        res.status(500).json({ message: "Something Went Wrong. Please Try Again Later", success: true, error });
    }
    next()
  };

export const deleteIraiDrive = async(req, res, next) => {
    try {
        await IraiDrive.findByIdAndDelete(req?.params?.id);
        res.status(204).send({ message: 'Driver deleted' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something Went Wrong. Please Try Again Later", success: true, error });
    }
}