import React from 'react'
import './DashboardNav.css'
import { BsThreeDots } from "react-icons/bs";
import { PiCellSignalHighBold as High,PiCellSignalLowBold as Low,PiCellSignalMedium as Medium,PiPlusBold } from "react-icons/pi";
import { FaFire } from "react-icons/fa";
import { MdPending as TodoIcon } from "react-icons/md";
import { GrInProgress as ProgressIcon } from "react-icons/gr";
import { ImCancelCircle as BacklogIcon } from "react-icons/im";
import { TbCircleLetterA,TbHexagonLetterY,TbHexagonLetterS,TbCircleLetterS,TbCircleLetterR  } from "react-icons/tb";

function DashboardNav({tag,cnt,grp}) {
   const priorityMapping = {
    0: 'None',
    1: 'Low',
    2: 'Medium',
    3: 'High',
    4: 'Urgent'
  };
  const groupIcons = {
    'status': {
      'Todo': <TodoIcon className='icon' style={{color:"yellow"}}/>,
      'In progress': <ProgressIcon className='icon' style={{color:"green"}}/>,
      'Backlog': <BacklogIcon className='icon' style={{color:"red"}}/>
    },
    'user': {
       'Anoop sharma':<TbCircleLetterA className='icon' style={{color:"green"}}/>,
       'Yogesh':<TbHexagonLetterY className='icon' style={{color:"blue"}}/>,
       'Shankar Kumar':<TbHexagonLetterS className='icon' style={{color:"orange"}}/>,
       'Ramesh':<TbCircleLetterR className='icon' style={{color:"brown"}}/>,
       'Suresh':<TbCircleLetterS className='icon' style={{color:"red"}}/>,
    },
    'priority': {
      0: <BsThreeDots />,
      1: <Low />,
      2: <Medium />,
      3: <High />,
      4: <FaFire className='icon' style={{color:"orange"}}/>
    }
  };
  return (
    <div id='dashNavInner'>
      <div className="left">
         {
          (grp!=="name")?groupIcons[grp][tag]:tag
         }
          
         <h3>{
           (grp==="priority")?priorityMapping[tag]:tag
         }</h3>
         <p id='cnt'>{cnt}</p>
      </div>
       <div className="right">
         <PiPlusBold id='ic2' className='ic'/>
         <BsThreeDots id='ic3' className='ic'/>
       </div>

    </div>
  )
}

export default DashboardNav