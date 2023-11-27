import React, { useState } from 'react';
import './Navbar.css';
import { HiAdjustmentsHorizontal } from 'react-icons/hi2';
import { FaChevronDown } from 'react-icons/fa';

function Navbar({ Navdata, displayData, setDisplayData, setGroup }) {
  const [hiddenContentVisible, setHiddenContentVisible] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setHiddenContentVisible((prevState) => !prevState);
  };

  const handleGroup = (e) => {
    const val = e.target.value;
    if (val === 'status') {
      setDisplayData(Navdata.status);
      localStorage.setItem('displayval', JSON.stringify(Navdata.status));
    } else if (val === 'user') {
      setDisplayData(Navdata.user);
      localStorage.setItem('displayval', JSON.stringify(Navdata.user));
    } else {
      setDisplayData(Navdata.priority);
      localStorage.setItem('displayval', JSON.stringify(Navdata.priority));
    }
    localStorage.setItem('group', e.target.value);
    setGroup(e.target.value);
  };

  const handleOrder = (e) => {
    const val = e.target.value;
    if (val === 'priority') {
      let tempData = displayData;
      const finalData = tempData.map((progressStep, ind3) => {
        progressStep[1] = progressStep[1].sort((p, q) => {
          return p.priority > q.priority ? 1 : -1;
        });
        return progressStep;
      });
      setDisplayData(finalData);
      localStorage.setItem('displayval', JSON.stringify(finalData));
    } else {
      let tempData = displayData;
      const finalData = tempData.map((progressStep, ind3) => {
        progressStep[1] = progressStep[1].sort((p, q) => {
          return p.title > q.title ? 1 : -1;
        });
        return progressStep;
      });
      setDisplayData(finalData);
      localStorage.setItem('displayval', JSON.stringify(finalData));
    }
  };

  return (
    <div id='navbar'>
      <div id='outer'>
        <button id='leftSection' onClick={handleClick}>
          <HiAdjustmentsHorizontal id='adjust' />
          <p>Display</p>
          <FaChevronDown id='down' />
        </button>
        <div id='hiddenContent' style={{ display: hiddenContentVisible ? 'block' : 'none' }}>
          <div className='selectGroup '>
            <span>Grouping</span>
            <select className='selectStyle' name='group' id='group' onChange={handleGroup}>
              <option value='status' name='Status'>
                Status
              </option>
              <option value='user' name='User'>
                User
              </option>
              <option value='priority' name='Priority'>
                Priority
              </option>
            </select>
          </div>
          <div className='selectGroup'>
            <span>Ordering</span>
            <select className='selectStyle' name='order' id='order' onChange={handleOrder}>
              <option value='priority' name='Priority'>
                Priority
              </option>
              <option value='title' name='Title'>
                Title
              </option>
            </select>
          </div>
        </div>
      </div>
      <div id='rightSection'>{/* Content for right section */}</div>
    </div>
  );
}

export default Navbar;