
import mongoose from 'mongoose';

const AlhrajulSchema = new mongoose.Schema({
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

const AlrajulModel = mongoose.model('AlrajulProducts', AlhrajulSchema,'AlrajulProducts');

export default AlrajulModel;
