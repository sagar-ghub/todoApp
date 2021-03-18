import React, { useEffect,useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import List from "./components/List";
import Todo from "./components/Todo";
import firebase from "./firebase";

function App() {
  const [todos,setTodos]=useState([]);
  useEffect(()=>{
    const ref=firebase.database().ref("Todo");
    ref.on('value',(snapshot)=>{
      const data=snapshot.val();
      const dataList=[];
    
      if(data)
      {
        for(let id in data)
      {
       dataList.push({id,...data[id]});
      }
      setTodos([...dataList]);

      }
      
    })
  },[])

  return (
    <div className="App">
     
      <Navbar/>
      <br/><br/>
      <Todo/>
      <hr></hr>
   
      {todos.map((todo)=>
      <List todo={todo} key={todo.id}/>
      )}
    
     
    </div>
  );
}

export default App;
