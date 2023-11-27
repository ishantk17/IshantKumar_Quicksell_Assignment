import React from 'react'
import { useState,useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Dashboard from '../Dashboard/Dashboard'
function Main() {
  const [navData,setnavData]=useState([]);
  const [displayData, setDisplayData]=useState([]);
  const [Group,setGroup]=useState("");
  useEffect(() => {
    //fetching data from given api and storing all of the data in navData group wise and displaydata is one which is to be displayed on the app 
    //initially display data will be grouped according to status
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
        {/*passing setter for display data to navbar so that based on button click and events it could return the exact data which needs to be displayed on the app , for ordering displaydata is sent to navbar so that it could sort it there based on what ordeing user wants and return that data to main*/}
        <Navbar Navdata={navData} setDisplayData={setDisplayData} displayData={displayData} setGroup={setGroup}/>
        <div id='dashboard'>
          {/* main will further pass those data to dashboard and dashboard will simply display the data */}
          <Dashboard DisplayData={displayData} group={Group}/>
        </div>
    </div>
  )
}
export default Main;