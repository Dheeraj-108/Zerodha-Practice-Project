// Configuration settings
const config = {
    port: process.env.PORT || 8080,
    mongoUri: process.env.MONGO_URI,
    nodeEnv: process.env.NODE_ENV || "development",
};

export default config;
