import testModel from "../models/testModel";
const testController = {
  async readData(req, res) {
    try {
      console.log(1);
      const data = await testModel.find();
      res.status(200).json({
        message: "Connected",
        data: data,
      });
    } catch (err) {
      res.status(500).send(err);
    }
  },
  async specificData(req, res) {
    try {
      console.log(req.params.id);
      const data = await testModel.findById(req.params.id);
      res.status(200).json({
        message: "Connected",
        data: data,
      });
    } catch (err) {
      res.status(500).send(err);
    }
  },
  async addData(req, res) {
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
  },
  async updateData(req, res) {
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
  },
  async deleteData(req, res) {
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
  },
};

export default testController;
