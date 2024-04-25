import { Schema, model } from "mongoose";
const HealthInfoSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
})
const HealthInfo = model("HealthInfo",HealthInfoSchema);
export default HealthInfo;