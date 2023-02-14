
import './App.css';
import React, {useState} from 'react';
import {NavbarSimple} from './components/navbar.js';
import { FooterSocial } from './components/footer';
export {NavbarSimple};
function App() {
  const [returnedData, setReturnedData] = useState(["hi there"]);
  const [employee, setEmployee] = useState({name:'xyz', age:0,gender: ''});

  const setInput= (e)=>{
    const{name,value}=e.target;
    console.log(value);
    if(name==='age'){
      setEmployee(prevState =>({
        ...prevState,
        [name]:parseInt(value)
      }));
      return;
    }
    setEmployee(prevState =>({
      ...prevState,
      [name]:value
    }));
  }
  const fetchData = async (url) =>{
    // console.log(employee);
    const newData = await fetch('/api', {
      method: 'POST',
      headers:{
        'content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: employee.name
      })
    })
    .then(res=>res.json())
    console.log(newData[0]);
    setReturnedData(newData[0]);
  }
  //getData('/api'); calls the api route evry time app reloads
  return (
    <div className="App">
      <input type="name" name="name" placeholder="Name" onChange={setInput} ></input>
      <input type="age" name="age" placeholder="Age" onChange={setInput} ></input>
      <input type="gender" name="gender" placeholder="Gender" onChange={setInput} ></input>
      <button onClick={()=> fetchData()}>Click</button>
      <button onClick={()=> fetchData()}>Create</button>
      <p>Name:  {returnedData.name}</p>
      <p>Age:  {returnedData.age}</p>
      <p>Gender:  {returnedData.gender}</p>
    </div>
  );
}

export default App;
