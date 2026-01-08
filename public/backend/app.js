import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import docRoutes from "./routes/doc.routes.js";

const app = express();

app.use(cors({
  origin: [
    "http://localhost:3000",
    "http://127.0.0.1:5501"
  ],
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

// simple ping for health/proxy checks
app.get('/api/ping', (req, res) => res.json({ ok: true, time: Date.now() }));

app.use("/api/auth", authRoutes);
app.use("/api/docs", docRoutes);

export default app;
