import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createTicket, ticketActions } from "../redux/ticket/ticketSlice";

import BackButton from "../components/Back";

const { reset } = ticketActions;
function NewTicket() {
  const { user } = useSelector((state) => state.auth);
  const {  isError, isSuccess, message, ticket } = useSelector(
    (state) => state.tickets
  );

  const [name] = useState(user.name);
  const [title,setTitle]=useState("");
  
  const [priority, setPriority] = useState("High");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
      dispatch(reset());
    } else if (isSuccess) {
      dispatch(reset());
      navigate("/tickets");
    }
  }, [ticket]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createTicket({title, priority, description ,name}));
  };

  

  return (
    <>
      <BackButton url="/" />
      
        <h1>Create New Ticket</h1>
        
      

      <section className="form">
        <div className="form-group">
          <label htmlFor="name"> Name</label>
          <input name="name" id="name"type="text" className="form-control" value={name} disabled />
        </div>
        <div className="form-group">
            <label htmlFor="title">Title</label>
            <textarea
              name="title"
              id="title"
              className="form-control"
              placeholder="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></textarea>
          </div>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="product">Priority</label>
            <select
              name="priority"
              id="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="High">High</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
             
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description of the issue</label>
            <textarea
              name="description"
              id="description"
              className="form-control"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default NewTicket;
