import { useState } from "react";
import {FaUserPlus} from "react-icons/fa"
export default function QueueForm ({onAdd}){
  const [name,setName]= useState("");
  const [service, setServices]=useState("");

  const handleServices = (e) => {
    e.preventDefault();
    if(!name.trim() || !service.trim()) return 
    onAdd({name,service});
    setName("");
    setServices("");
  }
return(
<>
<form className="queue-form" onSubmit={handleServices}>
  <h2>Add to queue</h2>
  <div className="form-group">
    <input
    placeholder="Customer Name"
    value={name}
    onChange={(e)=>setName(e.target.value)} 
    type="text"
    />
  </div>
  <div className="form-group">
  <select value={service} onChange={(e)=> setServices(e.target.value)}>
  <option value="">Select Service</option> 
  <option value="Car Wash">Car Wash</option> 
  <option value="Bike Wash">Bike Wash</option> 
  <option value="Car Interior clean ">Car Interior clean</option> 
  </select>
  </div>
  <button type="submit" >
    <FaUserPlus/>Add to queue</button>
</form>
</>
);
}