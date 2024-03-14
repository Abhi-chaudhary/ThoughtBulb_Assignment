import { viewTickets, ticketActions } from "../redux/ticket/ticketSlice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


import BackButton from "../components/Back";
import TicketItem from "../components/TicketContainer";
import { Link } from "react-router-dom";

function ViewTickets() {
  const { tickets, isSuccess } = useSelector(
    (state) => state.tickets
  );
  const { reset } = ticketActions;
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
    } else {
      dispatch(viewTickets());
    }
  }, [tickets]);

  

  return (
    <>
      <BackButton url="/" />
      <h1>Tickets</h1>
      <Link to="/new-ticket" className="btn btn-reverse btn-block">
          Create New Ticket
        </Link>
      <div className="tickets">
        <div className="ticket-headings">
          
          <div>Ticket</div>
          
          
        </div>
        {tickets.map((ticket) => (
          <TicketItem key={ticket._id} ticket={ticket} />
        ))}
      </div>
    </>
  );
}

export default ViewTickets;
