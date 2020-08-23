const { Order } = require("../db/models");
const OrderItems = require("../db/models/OrderItems");

exports.checkout = async (req, res, next) => {
  try {
    const newOrder = await Order.create({ userId: req.user.id });

    const orderItem = req.body.map((item) => ({
      ...item,
      orderId: newOrder.id,
    }));

    const newItem = await OrderItems.bulkCreate(orderItem);
    res.status(201).json(newItem);
  } catch (error) {
    next(error);
  }
};
