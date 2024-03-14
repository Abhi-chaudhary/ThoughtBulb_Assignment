express = require("express");
const protect = require("../middleware/authMiddleware");

router = express.Router();
const {
  createTicket,
  viewTickets,
  viewTicket
  
} = require("../controllers/ticketControllers");

// Re-route into note router


router.post("/create-ticket", protect, createTicket);
router.get("/view-tickets", protect, viewTickets);
router.get("/view-tickets/:id", viewTicket);

module.exports = router;