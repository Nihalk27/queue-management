import { useState } from "react";
import QueueForm from "./components/QueueForm.jsx"
import "./App.css";

export default function App(){
const [queue , setQueue] = useState([]);

const addToQueue = (customer) =>{

};

const updateStatus = (id) =>{

};
const removeFromQueue = (id) =>{

};
  return (
    <div className="app">
      <header>
        <h1>The Car Washing centre</h1>
        <p>The Car will looks like brand new ...</p>
      </header>
      <main>
        <QueueForm onAdd={addToQueue}/>
      </main>
    </div>
  );
}