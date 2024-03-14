const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema(
  {
    title: {
      type:String,
      required: true,
      
    },
    description: {
      type: String,
      required: [true, "Please enter a description of the issue"],
    },
    priority: {
      type: String,
      required: true,
      enum: ["High", "Low", "Medium"],
      
    },
    name:{
      type: String
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Ticket", ticketSchema);