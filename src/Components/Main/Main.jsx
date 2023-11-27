import React from 'react'
import { useState,useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Dashboard from '../Dashboard/Dashboard'
function Main() {
  const [navData,setnavData]=useState([]);
  const [displayData, setDisplayData]=useState([]);
  const [Group,setGroup]=useState("");
  useEffect(() => {
    console.log("entered");
    const fetchData = async () => {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const tempData = await response.json();
      let data = tempData.tickets;
      let userData = tempData.users;
      console.log(data);
      const statusMap = new Map();
      data.forEach((curData) => {
        (statusMap.has(curData.status)) ? (statusMap.get(curData.status).push(curData)) : (statusMap.set(curData.status, [curData]));
      })
      const PriorityMap = new Map();
      data.forEach((curData) => {
        (PriorityMap.has(curData.priority)) ? (PriorityMap.get(curData.priority).push(curData)) : (PriorityMap.set(curData.priority, [curData]));
      })
      const UserMap = new Map();
      for (let i = 0; i < userData.length; i++) {
        for (let j = 0; j < data.length; j++) {
          if (data[j].userId === userData[i].id) {
            (UserMap.has(userData[i].name)) ? (UserMap.get(userData[i].name).push(data[j])) : (UserMap.set(userData[i].name, [data[j]]));
          }
        }
      }
      const userArr = Array.from(UserMap);
      const statusArr = Array.from(statusMap);
      const priorityArr = Array.from(PriorityMap);
      setnavData(() => ({ status: statusArr, priority: priorityArr, user: userArr }));
      const lastData = localStorage.getItem('displayval');
      const grp=localStorage.getItem('group');
      if(grp){
        setGroup(grp);
      }else{
        setGroup("status");
      }
      if (lastData) {
        const parsedData = JSON.parse(lastData);
        setDisplayData(parsedData);
      } else {
        setDisplayData(statusArr);
      }
    }
    fetchData();
  },[]);
  
  return (
    <div id='AppComponent'>
        <Navbar Navdata={navData} setDisplayData={setDisplayData} displayData={displayData} setGroup={setGroup}/>
        <div id='dashboard'>
          <Dashboard DisplayData={displayData} group={Group}/>
        </div>
    </div>
  )
}
export default Main;