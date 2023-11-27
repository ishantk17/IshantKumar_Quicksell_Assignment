import React from 'react'
import './Dashboard.css'
import Card from '../Card/Card';
import DashboardNav from '../DashboardNav/DashboardNav';

function Dashboard({DisplayData,group}) {
  return (
    <div className='mainDiv'>
      {
        DisplayData.map((curData,ind)=>{
           return (
            <div key={ind} className='outerDiv'>
              <div className='dashNav'>
                  <DashboardNav tag={curData[0]} cnt={curData[1].length} grp={group}/>
              </div>
              
              {
                curData[1].map((curEl,ind2)=>{
                  return(
                    <Card id={curEl.id} title={curEl.title} ind={ind2} status={curEl.status} tag={curEl.tag[0]}/>
                  )
                })
              }
            </div>
           )
        })
      }
    </div>
  )
}

export default Dashboard