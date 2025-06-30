import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { connectDB } from "./config/db.js";
import productRoutes from "./route/product.js";
import path from "path";

dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const __dirname = path.resolve();
console.log(process.env.MONGO_URI);
app.use("/api", productRoutes);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend", "dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(port, () => {
  connectDB();
  console.log(`Server is listening on the port ${port}`);
});
