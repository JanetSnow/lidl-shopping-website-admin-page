import { userRequest } from "../../requestMethods";
import { useEffect, useState } from "react";
import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";

export default function WidgetSm() {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    const getUsers = async ()=> {
      try{
        const res = await userRequest.get("users/?new=true");
        setUsers(res.data);
      }catch{}
    };
    getUsers();
  },[]);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map((user) => (
          <li className="widgetSmListItem" key={user._id}>
            <img
              src={user.img || "https://imageio.forbes.com/specials-images/imageserve/64a82491834805230191cf1d/Night-Two---Taylor-Swift---The-Eras-Tour---Nashville--TN/0x0.jpg?format=jpg&crop=1899,1424,x0,y242,safe&width=960"}
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
