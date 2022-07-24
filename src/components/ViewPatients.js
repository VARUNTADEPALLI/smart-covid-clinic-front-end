import React from 'react';
import  { useEffect, useState } from 'react';
import { Link, useNavigate,useLocation } from "react-router-dom";
import axios from 'axios';
import DatePicker from "react-datepicker";
import { toast, ToastContainer } from 'react-toastify';

function ViewPatients(props) {
    const [selecteddate, setselecteddate] = useState(null);
    const [Patient, setPatient] = useState([]);
    const history=useNavigate();

    const SearchHandler = () =>
    {
        var er=0;
        if(selecteddate!=null)
        {
            
            var da = new Date(selecteddate);
      
            var k = [];
            k=da.toLocaleDateString().split('/');
            if(k[0].length==1)
            {
                k[0]="0"+k[0];
            }
            if(k[1].length==1)
            {
                k[1]="0"+k[1];
            }
            var a = k[2]+"-"+k[0]+"-"+k[1];
            console.log(a);
          
        }
        else
        {
            er++;
            alert("Select a date");
        }
        if(er==0)
        {
            var error=0;
            axios.get("http://localhost:9028/patientappointments/"+a)
            .then(response => setPatient(response.data)).catch(err => {alert(err.response.data);console.log(error++)});
            console.log(Patient)
        }
    }

    const backHandler = (e)=>
    {
        e.preventDefault();
        history("/AdminPage")
    }
    return (
        <div class="container">
            <br></br><br></br><br></br>
         <div class="row">
                <div class="col-2"></div>
                    <div class="col-3">
                    <h5 style={{fontFamily:'sans-serif',textAlign:"start"}}>Select Date:</h5>
                    
                    </div>
                    <div class="col-2">
                    <DatePicker  id='dateofappointment' name='dateofappointment' showYearDropdown isClearable scrollableMonthYearDropdown dateFormat="yyyy/MM/dd" selected={selecteddate} onChange={(date) => setselecteddate(date)} required/>
                    </div>
                    <div class="col-3">
                    <button class="btn btn-warning" onClick={SearchHandler} >Search</button> 
                    </div>
                    
                </div>
                <br></br>
                <br></br><br></br>
                <div class="row">
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
                        <td class="blockquote">Patient Name</td>

                    </tr>
                </thead>
                <tbody>
                    {
                        Patient.map(
                            Patient =>
                                <tr key={Patient.id}>
                                    <td>{Patient.id}</td>
                                    <td>{Patient.doctorid}</td>
                                    <td>{Patient.name}</td>
                                    <td>{Patient.age}</td>
                                    <td>{Patient.education}</td>
                                    <td>{Patient.hospital}</td>
                                    <td>{Patient.specialization}</td>
                                    <td >{Patient.patientname}
                                   </td>
                                   
                                </tr>
                        )
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
        </div>
        
    );
}

export default ViewPatients;