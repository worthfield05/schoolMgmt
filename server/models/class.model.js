import mongoose from 'mongoose'

const classSchema = new mongoose.Schema(
  {
    className: {
      type: String,
      required: [true,"ClassName is required."],
    },
    section: {
      type: String,
      required: [true,"Section is required."],
    },
    classAssigned: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
    },
  },
  { timestamps: true }
);
export default mongoose.model("Class",classSchema)
