import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();

// Middleware
app.use(cookieParser());
app.use(
    cors({
        methods: ["GET", "POST", "PUT", "DELETE"],
        origin: [
            "http://localhost:5173",
            "http://localhost:8080",
            "http://localhost:5174",
        ],
        credentials: true,
    })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Welcome to Zerodha Clone API");
});

// Routes
import orderRoutes from "./routes/orderRoutes.js";
import positionRoutes from "./routes/positionRoutes.js";
import holdingRoutes from "./routes/holdingRoutes.js";
import userRouter from "./routes/userRoutes.js";

app.use("/api/v1/kite/orders", orderRoutes);
app.use("/api/v1/kite/positions", positionRoutes);
app.use("/api/v1/kite/holdings", holdingRoutes);
app.use("/api/v1/kite/users", userRouter);

export default app;
