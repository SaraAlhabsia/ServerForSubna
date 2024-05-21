import mongoose from "mongoose";

const PostSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    pic: {
        type: String,
        required: true,
    },
    quantity: {
      count: {
        type: Number,
        default: 0,
      },
      users: {
        type: [String],
        default: [],
      },
    },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: false, // Set to false to disable updatedAt
    },
  }
);

const PostModel = mongoose.model("posts", PostSchema);

export default PostModel;
