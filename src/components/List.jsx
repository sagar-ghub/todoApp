import React, { useState } from 'react';
import firebase from 'firebase';
export default function List({todo}){
    const handleDelete=()=>{
        const ref=firebase.database().ref("Todo").child(todo.id);
        ref.remove();
        console.log(todo.id);
        }

    const handleComplete=()=>{
        const ref=firebase.database().ref('Todo').child(todo.id);
        ref.update({
            done:!todo.done
        })
    }

    return(<div key={todo.id}>
        
       
      {todo.done?
      (<strike><h1>{todo.todoItem}</h1></strike>):<h1>{todo.todoItem}</h1>}
       <button className="btn btn-success" id="btn1"onClick={handleComplete}  >{todo.done?"Undo":"Complete"}</button>
       <button className="btn btn-danger"onClick={handleDelete}>Delete</button>
       
 
     
        
       
    </div>);
}
