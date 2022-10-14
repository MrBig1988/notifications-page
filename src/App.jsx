import React, { useState } from "react";
import Notification from "./Notification";
import persons from "./info";

function App() {


  return <div className="container">
    <div className="header">
    <h1 className="head">Notifications</h1>
    
    </div>
    {persons.map(person =>
    <Notification
    key={person.id}
    img={person.imgURL}
    name={person.name}
    action={person.action}
    link={person.link}
    time={person.time}
    content={person.content}
    picture={person.picture}
     />
    )}
    
  </div>
}

export default App;
