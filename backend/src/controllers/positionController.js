import Position from "../models/positionsModel.js";

const getPosition = async (req, res) => {
    try {
        const dbPositions = await Position.find({});
        res.json(dbPositions);
    } catch (error) {
        console.error("Error fetching positions:", error);
        res.status(500).json({
            message: "Internal server error",
        });
    }
};

export { getPosition };
