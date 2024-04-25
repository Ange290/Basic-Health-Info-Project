import HealthInfo from "../models/healthInfo.model";
export const addHealthInfo = async(req,res) => {
    const newHealthInfo = await HealthInfo.create(req.body);
    res.status(201).json(newHealthInfo);
}
