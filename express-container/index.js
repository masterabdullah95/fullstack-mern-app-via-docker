import express from "express";
import cors from "cors";
const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST", "PUT", "DELETE"], // allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // allow cookies / auth headers
  }),
);

app.get("/", (req, res) => {
  res.json({ msg: "hello from express container" });
});

const port = 3000;

app.listen(port, () =>
  console.log(`Server started at http://localhost:${port}`),
);
