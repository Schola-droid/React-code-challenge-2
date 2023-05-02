import React, { useState } from 'react';

function AlarmForm({fetching}) {
 const [form,setForm]=useState([])
function handleChange(e){
  setForm({
    ...form,
    [e.target.name]:e.target.value
  })
  console.log(e.target.value)
}
function handleSubmit(e){
  e.preventDefault()
    fetch(" http://localhost:3000/alarms",{
      method:"POST",
      headers:{"Content-Type":"Application/json"},
      body:JSON.stringify({
        time: form.time,
        label: form.label,
        cmt:[]
      })
    })
    .then(resp=>resp.json())
    .then(data=>{
    
      console.log(data)})
}


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="alarm-time">Time:</label>
      <input id="alarm-time" type="time" name='time' onChange={handleChange} required />
      <label htmlFor="alarm-label">Label:</label>
      <input id="alarm-label" type="text" name='label' onChange={handleChange} required />
      <input type='Submit' value="Add"></input>
    </form>
  );
}

export default AlarmForm;
