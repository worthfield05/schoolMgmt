import mongoose from 'mongoose'

const subjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true,"Name is required."],
    },
    classTeacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
    },
    teacherAssigned: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
    },
  },
  { timestamps: true }
);
export default mongoose.model("Subject",subjectSchema)