import React , {useEffect, useState } from 'react';
import axios from "axios";
import { toast } from 'react-toastify';
import { useLocation,useNavigate } from 'react-router-dom';
import { Action } from 'history';
import clinic from '../assets/clinic.jpg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ViewAppointmentComponent(props) {
    

    const[Docdata,setDoc] = useState([]);
    const history = useNavigate();
    const location = useLocation();
    const pid=location.state.pid;

    useEffect(()=>
{
    getTestDetails();
},[])


const getTestDetails = () =>
{
    let error=0;
    console.log(pid);
    axios.get("http://localhost:9028/appointments/"+pid)
    .then(response => setDoc(response.data)).catch(err => {alert(err.response.data);console.log(error++)});

}

const backHandler= (e) =>
{
    e.preventDefault();
    history("/PatientPage",{state:{pid}})
}
    return (
        <div class="container">
            <br></br><br></br><br></br>
            <h4 style={{color:"rebeccapurple"}}>View Appointment Details</h4>
            <br></br><br></br><br></br>
              <table className='table table-stripped'>
                <thead>
                    <tr>
                        <td class="blockquote">Patient ID</td>
                        <td class="blockquote">Doctor ID</td>
                        <td class="blockquote">Doctor Name</td>
                        <td class="blockquote">Age</td>
                        <td class="blockquote">Education</td>
                        <td class="blockquote">Hospital</td>
                        <td class="blockquote">Specialization</td>
                        <td class="blockquote">Date of Appointment</td>

                    </tr>
                </thead>
                <tbody>
                    {
                       
                                <tr key={pid}>
                                    <td>{pid}</td>
                                    <td>{Docdata.doctorid}</td>
                                    <td>{Docdata.name}</td>
                                    <td>{Docdata.age}</td>
                                    <td>{Docdata.education}</td>
                                    <td>{Docdata.hospital}</td>
                                    <td>{Docdata.specialization}</td>
                                    <td>{Docdata.dateofappointment}</td>
                              </tr>
                      
                    }
                    <br>
                    </br>
                   
                </tbody>
            </table>
            <div class="row">
                <div style={{textAlign:"start"}}></div>
                <button class="btn btn-info" style={{width:'100px'}} onClick={backHandler} >Back</button> 
            </div>
           
        </div>
    );
}

export default ViewAppointmentComponent;