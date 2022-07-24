import React , {useEffect, useState } from 'react';
import axios from "axios";
import { toast } from 'react-toastify';
import { useLocation,useNavigate } from 'react-router-dom';
import { Action } from 'history';
import clinic from '../assets/clinic.jpg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ViewAllAppointmentsComponent(props) {

    const location = useLocation();
    let history = useNavigate();
    var pid =location.state.pid;
    const[Userdetails,setUserdetails] = useState([]);
    useEffect(()=>
    {
        getDetails();
    },[])

    const getDetails = () =>
    {
        console.log(pid);
        axios.get("http://localhost:9028/ViewAppointment/"+pid)
        .then(response => 
            setUserdetails(response.data));
            console.log(Userdetails)
          
      
    };  
    const VeiwHanlder =(id,pid)=>
    {
        console.log(id);
        console.log(pid);
        var data={
            id,pid
        }
        history("/Viewpatientdetailsprofile",{state:{data}})
    }

    return (
        <div>
        <div class="container">
           <br></br>
           <h1 className='text-center' style={{color:"rebeccapurple"}}> Doctor Details</h1>
           <br></br><br></br>
       <table className='table table-stripped'>
           <thead>
               <tr>
                   <td class="blockquote">Patient ID</td>
                   <td class="blockquote">Patient Name</td>
                   <td class="blockquote">Date of Appointment</td>
                   <td class="blockquote">View</td>

               </tr>
           </thead>
           <tbody>
               {
                   Userdetails.map(
                    Userdetails =>
                           <tr key={Userdetails.id}>
                               <td>{Userdetails.id}</td>
                               <td>{Userdetails.patientname}</td>
                               <td>{Userdetails.dateofappointment}</td>
                               <td>
                                 <button  class="btn btn-warning"style={{width:"100px"}} onClick={()=>{VeiwHanlder(Userdetails.id,pid)}} >View</button>
                               </td>
                           </tr>
                   )
               }
               <br>
               </br>
              {/* <tr style={{borderBottom:"white"}}> 
                       <td>
                       <button class="btn btn-info" onClick={backHandler}>Back</button>
                       </td>
                      
                   </tr> */}
           </tbody>
       </table>
   </div>
  
   </div>
    );
}

export default ViewAllAppointmentsComponent;