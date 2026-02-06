import { FaClock, FaTools, FaCheckCircle } from "react-icons/fa";
export default function QueueDisplay({queue, onUpdateStatus ,onRemove}) {
  const getStatusColor = (status) => {
    switch(status){
      case "waiting" : return "var(--error)";
      case "serving" : return "var(--warning)";
      case "completed" : return "var(--success)";
      default : return "var(--text)";
    }
  };
  const getStatusIcon = (status) => {
    switch(status){
      case "waiting" : return <FaClock />;
      case "serving" : return <FaTools />;
      case "completed" : return <FaCheckCircle />;
      default : return null;
    }
  };
  return (
    <div className="queue-display">
      <h2>Current Queue</h2>
      {queue.length === 0 ? (<p className="empty-queue">No Customer Data</p>) : (
      <div className="queue-list">
        {queue.map((customer) => (
          <div className="queue-item" key={customer.id}>
            <div className="customer-info">
              <h3>{customer.name}</h3>
              <p>{customer.service}</p>
              <span className="status" style={{color: getStatusColor(customer.status)}}>
              {getStatusIcon(customer.status)}
                {customer.status}
              </span>
            </div>
            <div className="actions">
              {customer.status === "waiting" && (
                <button className="serve-btn" onClick={() => onUpdateStatus(customer.id ,"serving")}>serve</button>
              )}
               {customer.status === "serving" && (
                <button className="complete-btn" onClick={() => onUpdateStatus(customer.id ,"completed")}>completed</button>
              )}
              <button className="remove-btn" onClick={() => onRemove(customer.id)} >{""}remove</button>
            </div>
          </div>
        ))}
      </div>)}
    </div>
  )
}

