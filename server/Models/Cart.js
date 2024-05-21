import mongoose from 'mongoose';

// Define a Cart schema and model
const cartSchema = new mongoose.Schema({
  products: [
    {
      name: String,
      price: Number,
      pic: String,
      quantity: Number,
    },
  ],
});

const Cart = mongoose.model('Cart', cartSchema, 'Cart');
export default Cart;
