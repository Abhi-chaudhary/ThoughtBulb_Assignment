import { Link } from "react-router-dom";

function TicketContainer({ ticket }) {
  return (
    <div className="ticket">
      
      <div>{ticket.title}</div>
      <div >{ticket.description}</div>
      <Link to={`/ticket/${ticket._id}`} className="btn btn-reverse btn-sm">
        View
      </Link>
    </div>
  );
}

export default TicketContainer;
