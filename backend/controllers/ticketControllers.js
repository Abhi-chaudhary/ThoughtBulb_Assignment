const asyncHandler = require("express-async-handler");
const Ticket = require("../model/ticketModel");

const User = require("../model/userModel");
const createTicket = asyncHandler(async (req, res) => {
    const { name,title, description,priority } = req.body;
  
    if (!title || !description) {
      res.status(401);
      throw new Error("Add both product and description");
    }

    const ticket = await Ticket.create({
      name: name,
      title: title,
        description: description,
        priority: priority,
      });
      res.status(201).json(ticket);
    });

    const viewTickets = asyncHandler(async (req, res) => {
        const tickets = await Ticket.find();
        res.status(201).json(tickets);
      });

      const viewTicket = asyncHandler(async (req, res) => {
        const ticket = await Ticket.findById(req.params.id);
        if (!ticket) {
          res.status(401);
          throw new Error("No Ticket found");
        }
        
        res.status(201).json(ticket);
      });

      module.exports = {
        createTicket,
        viewTickets,
        viewTicket
       
      };