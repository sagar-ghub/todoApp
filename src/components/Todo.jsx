import React, { useState } from 'react';
import firebase from "../firebase";
export default function Todo(){
    const [todoItem,settodoItem]=useState("");
    const handleTodo=(e)=>settodoItem(e.target.value);
    const handleClick=()=>{
        const todoRef=firebase.database().ref("Todo");
        document.getElementById("btn").className="btn btn-primary"
        todoRef.push({
            todoItem,
            done:false,
            
        });
        settodoItem("");
        }
    return(<div>
        <input type="text" id="text1" value={todoItem} onChange={handleTodo}></input>
        <button className="btn btn-secondary" id="btn"onClick={handleClick}>Click me</button>
    </div>);
}
