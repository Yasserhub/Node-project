import express from "express";
import path from "path";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => console.log(`Server started on port ${PORT} `));
