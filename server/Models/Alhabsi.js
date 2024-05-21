
import mongoose from 'mongoose';

const AlhabsiSchema = new mongoose.Schema({
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

const AlhabsiModel = mongoose.model('AlhabsiProducts', AlhabsiSchema,'AlhabsiProducts');

export default AlhabsiModel;
