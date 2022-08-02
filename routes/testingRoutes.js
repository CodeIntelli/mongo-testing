import express from "express";
import testController from "../controller/testController";
import testModel from "../models/testModel";
const test = express.Router();

test.get("/", testController.readData);
test.get("/:id", testController.specificData);

test.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const data = await testModel.create(req.body);
    res.status(200).json({
      message: "Connected",
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});
test.put("/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const data = await testModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "Connected",
      data: data,
    });
  } catch (err) {
    res.status(500).send(err);
  }
});
test.delete("/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const data = await testModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Connected",
      data: data,
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

export default test;
