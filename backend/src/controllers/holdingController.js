import Holding from "../models/holdingsModel.js";

const getHolding = async (req, res) => {
    try {
        const dbHoldings = await Holding.find({});
        res.json(dbHoldings);
    } catch (error) {
        console.error("Error fetching holdings:", error);
        res.status(500).json({
            message: "Internal server error",
        });
    }
};

export { getHolding };
