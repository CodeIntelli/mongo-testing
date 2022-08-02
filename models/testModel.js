import mongoose from "mongoose";

let testSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
    
  },
  contact: {
    type: Number,
    required: true,
    min: [10, "This is the min message"],
    max: [12, "This is the max message"],
  },
  isActive: {
    type: Boolean,
    require: true,
  },
});

const testModel = new mongoose.model("test", testSchema);

export default testModel;
