import Order from "../models/ordersModel.js";
import Holding from "../models/holdingsModel.js";
import Position from "../models/positionsModel.js";

const manageOrder = async (req, res) => {
    try {
        const { stock, action, quantity, orderType } = req.body;

        if (action.toLowerCase() === "buy") {
            if (orderType.toLowerCase() === "delivery") {
                const existingHolding = await Holding.findOne({
                    name: stock.name,
                });

                if (!existingHolding) {
                    await Holding.create({
                        name: stock.name,
                        qty: quantity,
                        avg: stock.price,
                        price: stock.price,
                        net: "+0.00%",
                        day: "+0.00%",
                    });
                } else {
                    const totalQty = existingHolding.qty + quantity;
                    const newAvg =
                        (existingHolding.avg * existingHolding.qty +
                            stock.price * quantity) /
                        totalQty;

                    await Holding.findOneAndUpdate(
                        { name: stock.name },
                        {
                            qty: totalQty,
                            avg: newAvg,
                        }
                    );
                }
            } else if (orderType.toLowerCase() === "intraday") {
                const existingPosition = await Position.findOne({
                    name: stock.name,
                });

                if (!existingPosition) {
                    await Position.create({
                        product: stock.name.slice(0, 3).toUpperCase(),
                        name: stock.name,
                        qty: quantity,
                        avg: stock.price,
                        price: stock.price,
                        net: "+0.00%",
                        day: "+0.00%",
                        isLoss: false,
                    });
                } else {
                    const totalQty = existingPosition.qty + quantity;
                    const newAvg =
                        (existingPosition.avg * existingPosition.qty +
                            stock.price * quantity) /
                        totalQty;

                    await Position.findOneAndUpdate(
                        { name: stock.name },
                        {
                            qty: totalQty,
                            avg: newAvg,
                        }
                    );
                }
            }
        }

        if (action.toLowerCase() === "sell") {
            if (orderType.toLowerCase() === "delivery") {
                const existingHolding = await Holding.findOne({
                    name: stock.name,
                });

                if (!existingHolding) {
                    return res.status(404).json({
                        message: "Stock not found in holdings",
                    });
                }

                if (existingHolding.qty < quantity) {
                    return res.status(400).json({
                        message: "Not enough quantity to sell",
                    });
                }

                const newQty = existingHolding.qty - quantity;

                if (newQty === 0) {
                    await Holding.findOneAndDelete({ name: stock.name });
                } else {
                    await Holding.findOneAndUpdate(
                        { name: stock.name },
                        { qty: newQty }
                    );
                }
            } else if (orderType.toLowerCase() === "intraday") {
                const existingPosition = await Position.findOne({
                    name: stock.name,
                });

                if (!existingPosition) {
                    return res.status(404).json({
                        message: "Stock not found in positions",
                    });
                }

                if (existingPosition.qty < quantity) {
                    return res.status(400).json({
                        message: "Not enough quantity to sell",
                    });
                }

                const newQty = existingPosition.qty - quantity;

                if (newQty === 0) {
                    await Position.findOneAndDelete({ name: stock.name });
                } else {
                    await Position.findOneAndUpdate(
                        { name: stock.name },
                        { qty: newQty }
                    );
                }
            }
        }

        res.status(200).json({
            message: "Order processed successfully",
        });
    } catch (error) {
        console.error("Error processing order:", error);
        res.status(500).json({
            message: "Internal server error",
        });
    }
};

const getOrder = async (req, res) => {
    try {
        const dbOrders = await Order.find({});
        res.json(dbOrders);
    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({
            message: "Internal server error",
        });
    }
};

export { manageOrder, getOrder };
