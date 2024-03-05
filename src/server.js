import express from "express"
import "dotenv/config";
import { dbConnection } from "./database/db.js";

const app = express();

//parsea el body
app.use(express.json());

const PORT = process.env.PORT || 4001;

dbConnection()
.then(() => {
    console.log("Database connected");
})

.catch (error => {
    console.log(error);
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});