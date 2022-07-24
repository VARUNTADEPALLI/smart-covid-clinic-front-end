



import DatePicker from "react-datepicker";
import { toast, ToastContainer } from 'react-toastify';
import React , { useEffect, useState } from 'react';
import axios from "axios";

import { Link, useNavigate,useLocation } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function DOctorHomeComponent(props) {

    const [selecteddate, setselecteddate] = useState(null);
    const [selecteddate1, setselecteddate1] = useState(null);
    const [name, setdoctorname] = useState('');
    const [hospital, setdoctorhospital] = useState('');


    let history = useNavigate();
    let location = useLocation();
    var pid = location.state.pid;

    useEffect(()=>
{
    getDoctorName();
},[name])

useEffect(()=>
{
    getDoctorHospital();
},[hospital])


const getDoctorName = () =>
{
    let error=0;
    axios.get("http://localhost:9028/doctor/"+pid)
    .then(response => setdoctorname(response.data.name)).catch(err => {alert(err.response.data);console.log(error++)});
    console.log(name)
}

const getDoctorHospital = () =>
{
    let error=0;
    axios.get("http://localhost:9028/doctor/"+pid)
    .then(response => setdoctorhospital(response.data.hospital)).catch(err => {alert(err.response.data);console.log(error++)});
    console.log(hospital)
}




    const viewappointmentHandler = (e) =>
    {
        e.preventDefault();
        history("/viewmyappointments",{state:{pid}});
    }


    const viewprofileHandler = (e) =>
    {
        e.preventDefault();
        history("/ViewDoctorProile",{state:{pid}});
    }


    const logoutHandler = (e) =>
    {
        e.preventDefault();
        history("/");
    }
    const saveHandler = (e) =>
    {
        e.preventDefault();
        var da=selecteddate;
        var da1 = selecteddate1;
        var er=0,er1=0;
        if(da!=null)
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
            alert("pick a date");
        }
        if(da1!=null)
        {
            var da1 = new Date(selecteddate1);
        
        
            var k1 = [];
            k1=da1.toLocaleDateString().split('/');
            if(k1[0].length==1)
            {
                k1[0]="0"+k1[0];
            }
            if(k1[1].length==1)
            {
                k1[1]="0"+k1[1];
            }
            var b = k1[2]+"-"+k1[0]+"-"+k1[1];
            console.log(b);
        }
        else
        {
            er1++;
            alert("pick a date");
        }
        var sum=er+er1;
        if(sum==0)
        {
            var r='';
            var error=0;
            var id=pid;
            var dateofleave = a;
            var lastleavedate = b;
            var data={
                id,name,hospital,dateofleave,lastleavedate
            }
            console.log(data);
            axios.post("http://localhost:9028/leave/",data)
            .then(response => console.log(response)).catch(err => {errhandler(r=err.response.data,error=error+1)});
            console.log(error);
            if(error==0)
            {
                toast.success("Leave Saved!");
                history("/DoctorHome",{state:{pid}});
            }
        }
        const errhandler= (r,error) =>
        {
        //     console.log(error);
        //     if(error==0)
        //     {
        //         toast.success("Leave Saved!");
        //         history("/DoctorHome",{state:{pid}});
        //     }
        //     else
        //     {
        //         toast.error(r);
        //     }
         }

        
    }

 
        
    return (
        <div>
             <Navbar bg="dark" variant="dark">
                <Container>
                <Nav className="me-auto">
                    {/* <Nav.Link href="/Viewpatientprofile">View Profile</Nav.Link>
                     */}
                      <button class="btn" style={{color:"white"}} onClick={viewprofileHandler} >View Profile</button> 
                      <button class="btn" style={{color:"white"}} onClick={viewappointmentHandler} >See Appointment</button>
                      <button class="btn" style={{color:"white",marginLeft:"700px"}} onClick={logoutHandler} >Logout</button>
                </Nav>
                </Container>
            </Navbar>
            <br></br><br></br><br></br>
            
         
          <div class="container">
                <div class="row">
                    <div class="col-4"></div>
                    
                    <div class="col-4" >
                        <br></br>
                        <div class="card border-1">
                            <div class="card-body">
                            <h2 style={{color:"rebeccapurple"}}>Apply Leave</h2>
                                <br></br>   <br></br>
                                <form>
                                    <div class="row" style={{textAlign:"center"}}>
                       
                                            <div className='form-group'>
                                    
                                                <div style={{textAlign:"left"}}>
                                                    <label>From Date :</label>
                                                </div>
                             
                                            
                                                <br></br>
                                                <div >
                                                <DatePicker  id='dateofleave' name='dateofleave' showYearDropdown isClearable scrollableMonthYearDropdown dateFormat="yyyy/MM/dd" selected={selecteddate} onChange={(date) => setselecteddate(date)} required/>
                                            </div>
                                            </div>
                                    </div>
                                    
                                    
                                    <br></br>
                                    <div class="row">
                                        <div class="col-1"></div>
                                         <div className='form-group'>
                                            <div style={{textAlign:"left"}}>
                                                    <label>To Date :</label>
                                                    
                                            </div>  
                                            
                                        
                                            <br></br>
                                            <div >
                                            <DatePicker  id='lastleavedate' name='lastleavedate' showYearDropdown isClearable scrollableMonthYearDropdown dateFormat="yyyy/MM/dd" selected={selecteddate1} onChange={(date) => setselecteddate1(date)} required/>
                                            </div>
                                        </div>
                                    </div>
                                    <br></br>                                    
                                    <br></br>
                                    <div className='form-group' style={{textAlign:"end"}}>
                                        <button className='btn btn-success   sm-30' onClick={saveHandler}>Apply</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    
                   
                    </div>
                    <div class="col-4"></div>
            </div>
            </div>
          
            
        </div>
    );
}

export default DOctorHomeComponent;