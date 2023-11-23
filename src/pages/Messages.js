import React from "react";
import { Link, Outlet } from "react-router-dom";
import data from './NestedPags/data';

const Messages = () => {
  // const [msgData, setMsgData] = useState(data);

  return (
    <div>
      <h1>Welcome To Messages Page</h1>
      <ul className="text-primary">
        {data.map((e) => (
          <li key={e.id}>
            <Link to={`/message/${e.id}`}>{e.Messages}</Link>
          </li>
        ))}
        <Outlet/>
      </ul>
    </div>
  );
};

export default Messages;
