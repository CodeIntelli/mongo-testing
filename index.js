import express from "express";
import { PORT } from "./config";
import testingRoutes from "./routes/testingRoutes";
const app = express();

import "./database";

app.use(express.json());
app.use("/api/v1/", testingRoutes);

app.listen(PORT, () => {
  console.log("Server is connected", PORT);
  console.log(`Server is connected http://localhost:${PORT}`);
});
