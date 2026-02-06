import { useState } from "react";
import QueueForm from "./components/QueueForm.jsx"
import "./App.css";
import QueueDisplay from "./components/QueueDisplay.jsx";
import Footer from "./components/Footer"
import { FaCarSide } from "react-icons/fa6";
import { FaCarOn } from "react-icons/fa6";

export default function App(){
const [queue , setQueue] = useState([]);

const addToQueue = (customer) =>{
setQueue([...queue,{...customer , id: Date.now(),status:"waiting"}]);
};

const updateStatus = (id ,newstatus) =>{
setQueue(queue.map((customer)=> 
  customer.id === id ?{...customer, status :newstatus} : customer
))
};
const removeFromQueue = (id) =>{
setQueue(queue.filter(customer => customer.id !== id))
};
  return (
    <div className="app">
      <header>
        <h1>The Car Washing centre</h1>
        <p><FaCarSide />  ...Premium care for your vehicle... <FaCarOn/> </p>
      </header>
      <main>
        <QueueForm onAdd={addToQueue}/>
        <QueueDisplay
        queue = {queue}
        onUpdateStatus = {updateStatus}
        onRemove = {removeFromQueue}
        />
      </main>
      <Footer/>
    </div>
  );
}