import express, {} from "express";
import dotenv from "dotenv";
import router from "./src/routes/index.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.get("/", (req, res) => {
    res.status(200).send("Server is healthy!");
});
app.use('/api/', router);
app.listen(PORT, () => {
    console.log("Server is running at PORT: ", PORT);
}).on("error", (error) => {
    throw new Error(error.message);
});
//# sourceMappingURL=index.js.map