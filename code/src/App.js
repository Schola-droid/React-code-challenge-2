import React, { useState, useEffect } from 'react';
import './App.css';
import AlarmList from './AlarmList';


function App() {
  const [alarms, setAlarms] = useState([]);
  const [sleepQuality, setSleepQuality] = useState('');


  function fetching(){
    fetch('http://localhost:3000/alarms')
      .then(response => response.json())
      .then((data) =>  setAlarms(data))
      .catch((error) => console.error(error))
  }

  useEffect(() => fetching, [sleepQuality]);
;
const dataArray=alarms.map((datum)=>{
  
  return(
    <div key={datum.id}>
      <h2>{datum.time}</h2>
      <h2>{datum.label}</h2>
      <button onClick={()=>handleAlarmEdit(datum.id)}>Edit</button>
      <button onClick={()=>handleDelete(datum.id)}>Delete</button>
    </div>
  )
})
    function handleDelete(alarmId) {
      console.log("clicked")
       setAlarms(alarms.filter(alarm => alarm.id !== alarmId));
    // onAlarmDelete(id)
    fetch(`http://localhost:3000/alarms/${alarmId}`,{
      method:'DELETE',
      headers: {
        "Content-type":'Application/json'
  }})
  .then ( res=> res.json())
  .then (data => {
   fetching()
    console.log (data)})
    
  }


  function handleNewAlarm(alarmObj) {
    setAlarms([...alarms, alarmObj]);
  }



  function handleAlarmEdit(id) {
   const newTime=prompt("Enter new Time")
   const  newLabel=prompt("Enter new Label")
     fetch (`http://localhost:3000/alarms/${id}`,{
      method: "PATCH",
      headers: {
        "content-type":'application/json'
      },
      body:JSON.stringify(
        {
          time:newTime,
          label:newLabel
        }
      )
    })
    .then ( res=> res.json())
    .then (data => {
      fetching()
      console.log (data)})

  }

  function handleSleepQualityChange(event) {
    setSleepQuality(event.target.value);
  }

  function handleSleepQualitySubmit(event) {
    event.preventDefault();
    console.log(`Sleep quality: ${sleepQuality}`);
    fetch (`http://localhost:3000/alarms/1`,{
      method: "PATCH",
      headers: {
        "content-type":'application/json'
      },
      body:JSON.stringify(
        {
          cmt:sleepQuality
        }
      )
    })
    .then ( res=> res.json())
    .then (data => console.log (data))
    setSleepQuality('');
    alert('Your response has been received')
  }

  return (
    <div 
    className="app">
      
      <h1>LALA</h1>
      {dataArray 
      } 
      <AlarmList fetching={fetching}/>
      <form onSubmit={handleSleepQualitySubmit}>
        <label htmlFor="sleep-quality">How was your sleep?</label>
        <select id="sleep-quality" value={sleepQuality} onChange={handleSleepQualityChange}>
          <option value="">Select an option</option>
          <option value="good">Good</option>
          <option value="fair">Fair</option>
          <option value="poor">Poor</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
}

export default App;
