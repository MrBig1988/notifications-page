import React, {useState} from "react";

function Notification(props){
    const [attr, setAttr] = useState({backgroundColor: "hsl(205, 33%, 90%)"});
    const [dot, setDot] = useState("🔴");
    const [show, setShow] = useState(false);

    function changeColor(){
        setAttr({backgroundColor: "hsl(0, 0%, 100%)"});
        setDot("✅");
        setShow(true);
    }

    return <div style={attr} onClick={changeColor} className="entry">
    
    <img className="entry-img" src={props.img} alt="" /> 
    <img className="inner-img" src={props.picture} />
        <div className="entry-info">   
        <p className="notification-text"><b>{props.name}</b> {props.action} {props.link} <span>{dot}</span></p>
        <p className="time-text">{props.time} ago</p> 
        <div className="inner-content">{show && props.content}</div>
        
        </div>
       
    </div>
}

export default Notification;