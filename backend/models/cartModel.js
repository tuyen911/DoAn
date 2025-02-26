import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [
        {
            itemId: { type: mongoose.Schema.Types.ObjectId, ref: "product", required: true },
            size: { type: String, required: true },
            quantity: { type: Number, required: true, default: 1 },
        },
    ],
});

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
