import React, { useState } from 'react';
import AlarmForm from './AlarmForm';

function AlarmItem({onAlarmDelete,alarm,onAlarmEdit,fetching}) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(true);
  }



  function handleHideAlarmForm() {
    setIsEditing(false);
  }

  return (
    <li>
      {isEditing ? (
        <AlarmForm alarm={alarm} onAlarmEdit={onAlarmEdit} onHideAlarmForm={handleHideAlarmForm} fetching={fetching}/>
      ) : (
        <div className="alarm-item">
          <div className="alarm-item__time">
            {/* {props.alarm.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} */}
          </div>
          <div className="alarm-item__label">{alarm.label}</div>
          <div className="alarm-item__actions">
    
          </div>
        </div>
      )}
    </li>
  );
}

export default AlarmItem;
