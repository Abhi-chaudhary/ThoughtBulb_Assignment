import axios from "axios";

const createTicket = async (ticketData, userToken) => {
  const URL = "/api/tickets/create-ticket";
  try {
    const res = await axios.post(URL, ticketData, {
      headers: { Authorization: `Bearer ${userToken}` },
    });
    // await viewTickets();
    return res.data;
  } catch (error) {
    throw { message: error?.response?.data?.message };
  }
};
const viewTickets = async (userToken) => {
  const URL = "/api/tickets/view-tickets";
  try {
    const res = await axios.get(URL, {
      headers: { Authorization: `Bearer ${userToken}` },
    });

    return res.data;
  } catch (error) {
    throw { message: error?.response?.data?.message };
  }
};

const getTicket = async (ticketId, userToken) => {
  const URL = `/api/tickets/view-tickets/${ticketId}`;
  try {
    const res = await axios.get(URL, {
      headers: { Authorization: `Bearer ${userToken}` },
    });
    // await viewTickets();
    return res.data;
  } catch (error) {
    throw { message: error?.response?.data?.message };
  }
};


export const ticketService = {
  createTicket,
  viewTickets,
  getTicket,
  
};
