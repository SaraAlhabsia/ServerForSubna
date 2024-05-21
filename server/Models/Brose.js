
import mongoose from 'mongoose';

const BroseSchema = new mongoose.Schema({
  name: {
    type:String,
    required:true,
  },
  price: {
    type:String,
    required:true,
  },
  requiredQuantity:{
    type:Number,
    required:true,
  },
  pic:{
    type:String,
    required:true,
  }
});

const BroseModel = mongoose.model('BroseProducts', BroseSchema,'BroseProducts');

export default BroseModel;
