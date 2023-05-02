import React, { useState } from 'react';
import AlarmItem from './AlarmItem';
import AlarmForm from './AlarmForm';

function AlarmList({onNewAlarm, onAlarmDelete, onAlarmEdit,alarms,fetching}) {
  const [showAlarmForm, setShowAlarmForm] = useState(false);
 
  function handleShowAlarmForm() {
    setShowAlarmForm(true);
  }

  function handleHideAlarmForm() {
    setShowAlarmForm(false);
  }

  return (
    <div className="alarm-list">
      <h2>Alarms</h2>
      {/* { {props.alarms.length === 0 ? (
        <p>No alarms set</p>
      ) : ( */}0
        <ul>
          {alarms?.map(alarm => (
            <AlarmItem key={alarm.id} alarm={alarm} onAlarmDelete={onAlarmDelete} onAlarmEdit={onAlarmEdit}  fetching={fetching}/>
          ))}
        </ul>
      
      {showAlarmForm ? (
        <AlarmForm onNewAlarm={onNewAlarm} onHideAlarmForm={handleHideAlarmForm} />
      ) : (
        <button onClick={handleShowAlarmForm}>Add Alarm</button>
      )} 
    </div>
  );
}

export default AlarmList;

