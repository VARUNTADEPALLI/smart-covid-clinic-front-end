import React from 'react';
import  { useEffect, useState } from 'react';
import { Link, useNavigate,useLocation } from "react-router-dom";
import axios from 'axios';
import DatePicker from "react-datepicker";
import { toast, ToastContainer } from 'react-toastify';

function FIcAppointmentsComponent(props) {

    const[Doc,setDoc] = useState([]);
    const[Doctor,setDoctor] = useState([]);
    const[Doctor1,setDoctor1] = useState([]);
    const [selectedOption, setSelectedOption] = useState();
    const [selectedOption1, setSelectedOption1] = useState();
    const[specializations,setSpecialization] = useState([]);
    const[Docdata,setDocdata] = useState([]);
    const [selecteddate, setselecteddate] = useState(null);
    const [selecteddateerror, setselecteddateerror] = useState('');
    const [patientname, setpatientname] = useState(null);

    const [DocDetails, setDocDetails] = useState('');


var ddoctorid='';
var dname='';
var dage='';
var deducation='';
var dspecialization='';
var dhospital='';
var dateofappointment='';


 
const history = useNavigate();
const location = useLocation();
    
    const pid=location.state.pid;
    var id=pid;
    
    
useEffect(()=>
{
    getTestDetails();
},[])

useEffect(()=>
{
    getPatientName();
},[patientname])

// useEffect(()=>
// {
//    if(DocDetails.length==0)
//    {
//     fun(Doctor);
//    }
// },[DocDetails])

const err=0;


useEffect(()=>
{
   if(Doctor.length!=0)
   {
    fun(Doctor);
   }
},[Doctor])



const getTestDetails = () =>
{
    let error=0;
    axios.get("http://localhost:9028/doctor/hospitals")
    .then(response => setDoc(response.data)).catch(err => {alert(err.response.data);console.log(error++)});

}


const getPatientName = () =>
{
    let error=0;
    axios.get("http://localhost:9028/patient/"+pid)
    .then(response => setpatientname(response.data.name)).catch(err => {alert(err.response.data);console.log(error++)});
    console.log(patientname)
}


const SearchHandler = (e) =>
{
    let error=0;
    e.preventDefault();
    axios.get("http://localhost:9028/specialization/"+selectedOption)
    .then(response => setSpecialization(response.data)).catch(err => {alert(err.response.data);console.log(error++)});
    console.log(dspecialization);

}
const SearchspecializationHandler = (e) =>
{
    let error=0;
    e.preventDefault();
    console.log("Hospital = "+selectedOption);
    console.log("specialization = "+selectedOption1);
    axios.get("http://localhost:9028/specialization/"+selectedOption+"/"+selectedOption1)
    .then(response => setDocdata(response.data)).catch(err => {alert(err.response.data);console.log(error++)});
    setDoctor1(Doctor);

}

 const appointmentHandler = (id) =>
{    
    
    axios.get("http://localhost:9028/doctor/"+id)
    .then(response => {setDoctor(response.data)});

    
    
}
  const fun = (Doctor)=>
{
    var er=0;
    ddoctorid=Doctor.id;
     dname =Doctor.name;
     console.log(dname);
     dage=Doctor.age;
     console.log(dage)
     deducation=Doctor.education;
     dspecialization=Doctor.specialization;
     dhospital = Doctor.hospital;

   
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
      
    }
    else
    {
        er++;
        alert("Select a date");
    }
            if(er===0)
            {
                var error=0;
                // axios.get("http://localhost:9028/clash/"+a)
                //             .then(response =>{setDocDetails(response.data);}).catch(err => {toast.error(err.response.data);console.log(error++)});
                // console.log(DocDetails);
                // if(DocDetails==null)
                // {
                //     console.log("available");
                // }
               
                if(pid!=null&&ddoctorid!=null && dname!=null && dage!=null && deducation!=null && dhospital!=null && dspecialization!=null,patientname!=null && dateofappointment!=null)
               
               {
                dateofappointment=a;
                let data ={
                    id:pid,doctorid:ddoctorid,name:dname,age:dage,education:deducation,hospital:dhospital,specialization:dspecialization,patientname,   dateofappointment
                };
                console.log(data);
                            axios.post("http://localhost:9028/appointments/saveappointment",data)
                            .then(response =>{console.log(response);}).catch(err => {toast.error(err);console.log(error++)});
               } 
               else{
                alert("Please Register Yourself!")
               }
            }
}


const onConfirm = (id) =>
{
    console.log(id);
    axios.delete("http://localhost:9028/appointments/"+pid)
    .then(response =>{console.log(response)}).catch(err => {alert(err);err++;});
    if(err!==0)
    {
        alert("Error");
    }
    else{
        window.location.reload();
        alert("Record Successfully deleted");
        }
}

const onCancel = ()=>
{
    var error=0;
    axios.get("http://localhost:9028/specialization/"+selectedOption+"/"+selectedOption1)
    .then(response => setDocdata(response.data)).catch(err => {alert(err.response.data);console.log(error++)});

}

const backHandler= () =>
{
    var pid=id;
    history("/PatientPage",{state:{pid}});
}


    return (
        <div class="container">
            <br></br><br></br><br></br>
            <h4 style={{color:"rebeccapurple"}}>Book Your Appointment</h4>
            <br></br><br></br><br></br>
            <div class="row">
                <div class="col-2"></div>
                <div class="col-3">
                <h5 style={{fontFamily:'sans-serif',textAlign:"start"}}>Select hospital:</h5>
                
                </div>
                <div class="col-1">
                <select style={{border:'0px'}} value={selectedOption}  onBlur={(event) => setSelectedOption(event.target.value)} onChange={(event) => setSelectedOption(event.target.value)}>
                
                {Doc
                    .map(Doc => 
                    <option  key={Doc} value={Doc}> 
                    {Doc}</option>)}
                    
                </select>
                </div>
                <div class="col-3">
                <button class="btn btn-warning" onClick={SearchHandler} >Search</button> 
                </div>
                
                
            </div>
            <br></br><br></br><br></br>
            <div class="row">
            <div class="col-2"></div>
                <div class="col-3">
                <h5 style={{fontFamily:'sans-serif',textAlign:"start"}}>Select Specialization:</h5>
                
                </div>
                <div class="col-1">
                <select style={{border:'0px'}} value={selectedOption1} onBlur={(event) => setSelectedOption1(event.target.value)} onChange={(event) => setSelectedOption1(event.target.value)}>
                
                {specializations
                    .map(specializations => 
                    <option  key={specializations} value={specializations}> 
                    {specializations}</option>)}
                    
                </select>
                </div>
                <div class="col-3">
                <button class="btn btn-warning" onClick={SearchspecializationHandler} >Search</button> 
                </div>
                
            </div>
            <br></br><br></br><br></br>
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
                        <td class="blockquote">Book Date</td>
                        <td class="blockquote">Confirm </td>
                        <td class="blockquote">Delete</td>

                    </tr>
                </thead>
                <tbody>
                    {
                        Docdata.map(
                            Docdata =>
                                <tr key={pid}>
                                    <td>{pid}</td>
                                    <td>{Docdata.id}</td>
                                    <td>{Docdata.name}</td>
                                    <td>{Docdata.age}</td>
                                    <td>{Docdata.education}</td>
                                    <td>{Docdata.hospital}</td>
                                    <td>{Docdata.specialization}</td>
                                    <td style={{marginLeft:"15px"}}>
                                      <DatePicker  id='dateofappointment' name='dateofappointment' showYearDropdown isClearable scrollableMonthYearDropdown dateFormat="yyyy/MM/dd" selected={selecteddate} onChange={(date) => setselecteddate(date)} required/>
                                      {selecteddateerror && <span style={{color:'red'}}>{selecteddateerror}</span>} 
                                   </td>
                                    <td style={{marginLeft:"15px"}}>
                                         <button class="btn btn-danger" onClick={() =>appointmentHandler(Docdata.id)}>Confirm</button>
                                    </td>
                                    <td style={{textAlign:"end"}}>
                                       <button  class="btn btn-danger" onClick={()=>{window.confirm('Are you sure you wish to delete this item?') ? onConfirm(Docdata.id) : onCancel("")}}>Delete</button>
                                    </td>
                                </tr>
                        )
                    }
                    <br>
                    </br>
                   
                </tbody>
            </table>
            </div>
            <div class="row">
                <div style={{textAlign:"start"}}></div>
                <button class="btn btn-info" style={{width:'100px'}} onClick={backHandler} >Back</button> 
            </div>

            
        </div>
    );
}

export default FIcAppointmentsComponent;