import { useEffect, useState } from "react";
import { toast } from "react-toastify";


import { useSelector, useDispatch } from "react-redux";
import { getTicket } from "../redux/ticket/ticketSlice";

import { useParams, useNavigate } from "react-router-dom";
import BackButton from "../components/Back";







function ViewTicket() {


  const { ticket, isSuccess, isError, message } = useSelector(
    (state) => state.tickets
  );



  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { ticketId } = useParams();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getTicket(ticketId));


  }, [isError, message, ticketId]);









  if (isError) {
    return <h3>Something Went Wrong</h3>;
  }

  return (
    <>
      {isSuccess && (
        <div className="ticket-page">

          <BackButton url="/tickets" />
          <h2>
            Ticket Detail Page
          </h2>
          <p style={{background:"#808080",borderRadius:"5px"}}><strong>Title:</strong>{ticket.title}</p>
          <p style={{background:"#808080",borderRadius:"5px"}}><strong>Description:</strong>{ticket.description}</p>
          <p style={{background:"#808080",borderRadius:"5px"}}><strong>Priority:</strong>  {ticket.priority}</p>
          <p style={{background:"#808080",borderRadius:"5px"}}> <strong>Created By:</strong>  {ticket.name}</p>


        </div>
      )}
    </>
  );
}

export default ViewTicket;
