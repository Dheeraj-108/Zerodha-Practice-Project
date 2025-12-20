import "dotenv/config";
import mongoose from "mongoose";
import app from "./app.js";

const db_url = process.env.MONGO_URI;
const PORT = process.env.PORT || 8080;

// Database Connection
const connectDB = async () => {
    try {
        await mongoose.connect(db_url);
        console.log("✓ Database Connection Successful");
    } catch (err) {
        console.error("✗ Database Connection Failed:", err);
        process.exit(1);
    }
};

// Start Server
const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`✓ Server is running on port ${PORT}`);
    });
};
startServer();
