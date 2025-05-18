import React, { useState } from 'react'
import './App.css'
import jsPDF from 'jspdf'

function App() {


  const[source,setSource] = useState('')
  const[destination,setDestination] = useState('')
  const[name,setName] = useState('')
  const[age,setAge] = useState('')
  const[date,setDate] = useState('')
  const[mob,setMob] = useState('')
  const[email,setEmail] = useState('')


  const downloadTicket = ()=>{
      if(source==destination){
        alert('Source city and destination city should not be same')
      }
      else if(source=="" || destination==""||name==""||age==""||mob==""||date==""||email==""){
          alert("Can not book ticket with empty details")
      }
      

      else{
            const ticket = new jsPDF();

            ticket.setFontSize(20)
            ticket.setTextColor(8, 56, 229)
            ticket.text("Ticket Booking Confirmation",60,20)
          ticket.addImage("./Redbus.jpeg", 50, 25);
            ticket.text("Passenger Details",50,40)
            //ticket.addImage("./Redbus.jpeg", 50, 25);

            ticket.text(`Name: ${name}`, 40,60)
            ticket.text(`Age: ${age}`, 40,70)
            ticket.text(`Mob: ${mob}`, 40,80)
            ticket.text(`Email: ${email}`, 40,90)
            ticket.text(`From: ${source}`, 40,100)
            ticket.text(`To: ${destination}`, 40,110)
            ticket.text(`Date: ${date}`, 40,120)


            ticket.save("ticket.pdf")
      }
  }


  return (
    <>
        <div className="main">
              <header>
                <img src="./Redbus.jpeg" width="70" style={{borderRadius:'12px'}}/>
                <h1 style={{color:'white', letterSpacing:'10px', textAlign:'center'}}>Red BUS</h1>
              </header>

              <div className='ticket'>
                    <h2 style={{fontSize:'32px', color:'white',letterSpacing:'7px', flexWrap:'wrap'}}>Make your trip</h2>

                    <div className='form'>
                    <div style={{width:'100%',display:'flex', columnGap:'10px', flexWrap:'wrap', alignItems:'center', justifyContent:'center',rowGap:'10px'}}>
                      <select value={source} onChange={(event)=>{setSource(event.target.value)}}>
                          <option>Select source city</option>
                          <option value="Hyderabad">Hyderabad</option>
                          <option value="Vizag">Vizag</option>
                          <option value="Bengaluru">Bengaluru</option>
                          <option value="Mumbai">Mumbai</option>
                          <option value="Pune">Pune</option>
                          <option value="Chennai">Chennai</option>
                          <option value="Delhi">Delhi</option>
                          <option value="Kolkata">Kolkata</option>
                          <option value="Jaipur">Jaipur</option>
                          <option value="Ahmedabad">Ahmedabad</option>
                          <option value="vijawada">vijawada</option>
                        </select>

                        <select value={destination} onChange={(event)=>{setDestination(event.target.value)}}>
                          <option>Select Destination city</option>
                          <option value="Hyderabad">Hyderabad</option>
                          <option value="Vizag">Vizag</option>
                          <option value="Bengaluru">Bengaluru</option>
                          <option value="guntur">Guntur</option>
                          <option value="Rajamundry">Rajamundry</option>
                          <option value="Chennai">Chennai</option>

                          <option value="Delhi">Delhi</option>

                          <option value="Kolkata">Kolkata</option>
                          <option value="Jaipur">Jaipur</option>
                          <option value="Ahmedabad">Ahmedabad</option>
                          <option value="vijawada">vijawada</option>

                        </select>
                      </div>

                       

                        <input type='date' value={date} onChange={(event)=>setDate(event.target.value)}/>
                        <div style={{display:'flex', columnGap:'10px',flexWrap:'wrap', alignItems:'center', justifyContent:'center',rowGap:'10px'}}>

                        <input type='text' placeholder='Enter your name'
                        value={name} onChange={(event)=>{setName(event.target.value)}}
                        />
                        <input type='tel' placeholder='Enter your Age' value={age} onChange={(event)=>{setAge(event.target.value)}}/>
                        </div>

                      
                        <input type='tel' placeholder='Enter your Mob' value={mob} onChange={(event)=>{setMob(event.target.value)}}/>
                        <input type='email' placeholder='Enter your email'
                        value={email}
                        onChange={(event)=>{setEmail(event.target.value)}}
                        />

                    

                        <button onClick={downloadTicket}>Download Ticket</button>
                        
                    </div>
              </div>
        </div>
    </>
  )
}

export default App
