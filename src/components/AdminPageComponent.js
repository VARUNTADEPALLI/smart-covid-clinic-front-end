import React , { useEffect, useState } from 'react';
import axios from "axios";
import { toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import { Action } from 'history';
import clinic from '../assets/clinic.jpg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function AdminPageComponent(props) {
    const[name,setName] = useState('');
    const[nameError,setNameError] = useState('');
   
    const[id,setId] = useState('');
    const[idError,setIdError] = useState('');

    const[age,setAge] = useState('');
    const[ageError,setageError] = useState('');

    const[hospital,setHospital] = useState('');
    const[hospitalError,sethospitalError] = useState('');

    const[specialization,setSpecialization] = useState('');
    const[specializationError,setspecializationError] = useState('');
    
    const[education,seteducation] = useState('');
    const[educationError,seteducationError] = useState('');

    
   
    
    
    let history = useNavigate();

    const aadharHandler = (e) =>
    {   
        setIdError('');
        setId(e.target.value);
    }

    const nameHandler = (e) =>
    {
        setNameError('');
        setName(e.target.value);
    }

    const educationHandler = (e) =>
    {
        seteducationError('');
        seteducation(e.target.value);
    }

   

    const hospitalHandler = (e) =>
    {
        sethospitalError('');
        setHospital(e.target.value);
    }
    const ageHandler = (e) =>
    {
        setageError('');
        setAge(e.target.value);
        
    }

    const specializationHandler = (e) =>
    {
        setspecializationError('');
        setSpecialization(e.target.value);
    }

   

    


    const registerHandler = (e) =>
    {
            e.preventDefault();
            let ctr=0,iflag=0,ildurflag=0,nflag=0,mflag=0,medihisflag=0,mediuseflag=0,eflag=0,illflag=0,aflag=0;
            
           
            if(education==="")
            {
                seteducationError("education Required");
                illflag++;
            }   
            else
            {
                if(illflag===1 && education!=="")
                {
                    illflag--;
                }   
                const sepcialRegx = new RegExp("[0-9*#+]+$")
                if(sepcialRegx.test(education))
                {
                    seteducationError("Enter text without numbers and special characters");
                    illflag++;
                }
                else
                {
                   if(illflag===1 && !sepcialRegx.test(education)) 
                   {
                       illflag--;
                   }
                }
            }

            if(specialization==="")
            {
                setspecializationError("specialization Required");
                ildurflag++;
            }   
            else
            {
                if(ildurflag===1 && specialization!=="")
                {
                    ildurflag--;
                }   
                const sepcialRegx = new RegExp("[0-9*#+]+$")
                if(sepcialRegx.test(specialization))
                {
                    setspecializationError("Enter text without numbers and special characters");
                    ildurflag++;
                }
                else
                {
                   if(ildurflag===1 && !sepcialRegx.test(specialization)) 
                   {
                    ildurflag--;
                   }
                }
            }

            if(hospital==="")
            {
                sethospitalError("hospital name Required");
                mflag++;
            }   
            else
            {
                if(mflag===1 && hospital!=="")
                {
                    mflag--;
                }   
                const sepcialRegx = new RegExp("[0-9*#+]+$")
                if(sepcialRegx.test(hospital))
                {
                    sethospitalError("Enter text without numbers and special characters");
                    mflag++;
                }
                else
                {
                   if(mflag===1 && !sepcialRegx.test(hospital)) 
                   {
                    mflag--;
                   }
                }
            }


        

            if(age==="")
            {
                setageError("age Required");
                aflag++;
            }   
            else
            {
                if(aflag===1 && age!=="")
                {
                    aflag--;
                   
                } 
            }
            if(age>120)
            {
                aflag++;
                setageError("invalid age");
            }
            else if(aflag===1 && age<=120)
            {
                aflag--;
            }
             
                  
                
            
           
            if(id==="")
            {
                setIdError("Id Required");
                iflag++;
            }
            else
            {
                if(iflag===1 && id!=="")
                {
                    iflag--;
                }
            }

            if(name==="")
            {
                setNameError("Name Required");
                nflag++;
            }   
            else
            {
                if(nflag===1 && name!=="")
                {
                    iflag--;
                }   
                const sepcialRegx = new RegExp("[0-9*#+]+$")
                if(sepcialRegx.test(name))
                {
                    setNameError("Enter name without numbers and special characters");
                    nflag++;
                }
                else
                {
                   if(nflag===1 && !sepcialRegx.test(name)) 
                   {
                       nflag--;
                   }
                }
            }

           

            
            
            let sum = iflag+ildurflag+nflag+mflag+medihisflag+mediuseflag+eflag+illflag+aflag;
            console.log("sum="+sum);
            if(sum===0)
            {
                var r='';
                let error=0;
                let data ={
                    id,name,age,education,hospital,specialization
                };
                console.log(data);
                axios.post("http://localhost:9028/doctor",data)
                .then(response =>{console.log(response);}).catch(err => {errhandler(r=err.response.data,error=error+1)});
                
                
               
            }
        
    }

    const errhandler= (r,error) =>
            {
                if(error==0)
                {
                    toast.success("Doctor Saved!");
                   
                }
                else
                {
                    toast.error(r);
                }
            }

    const viewDocHandler = (e) =>
     {
        e.preventDefault();
        history("/ViewDocDetails")
    } 

    const viewpatientHandler = (e) =>
    {
        e.preventDefault();
        history("/viewpatients")
    }
    const logoutHandler = (e) =>
    {
        e.preventDefault();
        history("/")
    }

    return (
        <div>
             <Navbar bg="dark" variant="dark">
                <Container>
                <Nav className="me-auto">
                   
                    <button class="btn" style={{color:"white"}} onClick={viewDocHandler} >View Doctor Details</button> 
                    <button class="btn" style={{color:"white"}} onClick={viewpatientHandler}>View Patient List</button> 
                    <button class="btn" style={{color:"white",marginLeft:"700px"}} onClick={logoutHandler}>Logout</button> 

                    
                </Nav>
                </Container>
            </Navbar>
            <h1 style={{color:"sandybrown",textAlign:'center'}}>Doctor   Registeration</h1>
            <br></br><br></br>
            <form style={{marginLeft:"200px"}}>
                <div class="row">
                    <div class="col-5">
                        <div className='form-group'>
                            <div class="row">
                                <div style={{textAlign:"left"}}>
                                    <label>Doctor Id</label><span style={{color:"red"}}>* </span>
                                </div>
                            </div>
                            
                            <br></br>
                            <input type="text" name="id" id="id" placeholder='Enter Doctor Id'  value={id} onChange={aadharHandler} class="form-control"></input>
                            <div style={{textAlign:"left"}}>
                                {idError && <span style={{color:'red'}}>{idError}</span>} 
                            </div>
                        </div>
                    </div>
                    <div class="col-5">
                        <div className='form-group'>
                            <div style={{textAlign:"left"}}>
                                <label>Name</label><span style={{color:"red"}}> * </span>
                            </div>
                            
                            <br></br>
                            <input type="text" name="name" id="name" placeholder='Enter Name'value={name} onChange={nameHandler} class="form-control"></input>
                            <div style={{textAlign:"left"}}>
                                {nameError && <span style={{color:'red'}}>{nameError}</span>} 
                            </div>
                        
                        </div>
                    </div>
                </div>
                <br></br><br></br>  
                <div class="row">
                <div class="col-5">
                    <div className='form-group'>
                    <div style={{textAlign:"left"}}>
                            <label> age</label><span style={{color:"red"}}> * </span>
                        </div>
                            <br></br>
                            <input type="number" name="age" id="age" value={age} placeholder='Enter age ' onChange={ageHandler} class="form-control"></input>
                            <div style={{textAlign:"left"}}>
                                {ageError && <span style={{color:'red'}}>{ageError}</span>} 
                            </div>
                            
                        </div>
                    </div>
                    
                    <div class="col-5">
                    <div className='form-group'>
                    <div style={{textAlign:"left"}}>
                            <label>Education</label><span style={{color:"red"}}> * </span>
                        </div>
                            <br></br>
                            <input type="text" name="education" id="education" value={education} placeholder='Enter education' onChange={educationHandler} class="form-control"></input>
                            <div style={{textAlign:"left"}}>
                                {educationError && <span style={{color:'red'}}>{educationError}</span>} 
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                <br></br><br></br>  
                <div class="row">
                <div class="col-5">
                        <div className='form-group'>
                            <div style={{textAlign:"left"}}>
                                <label>Hospital Name</label><span style={{color:"red"}}> * </span>
                            </div>
                            
                            <br></br>
                            <input type="text" name="hospital" id="hospital" value={hospital} placeholder='Enter hospital name'onChange={hospitalHandler} class="form-control"></input>
                        
                            <div style={{textAlign:"left"}}>
                                {hospitalError && <span style={{color:'red'}}>{hospitalError}</span>} 
                            </div></div>
                    </div>

                    <div class="col-5">
                        <div className='form-group'>
                            <div style={{textAlign:"left"}}>
                                <label>Specialization</label><span style={{color:"red"}}> * </span>
                            </div>
                            
                            <br></br>
                            <input type="text" name="specialization" id="specialization" value={specialization} placeholder='Enter specialization'onChange={specializationHandler} class="form-control"></input>
                        
                            <div style={{textAlign:"left"}}>
                                {specializationError && <span style={{color:'red'}}>{specializationError}</span>} 
                            </div></div>
                    </div>
                    
                    
                </div>
               
                <br></br><br></br>
                
                
                <br></br><br></br>
                <div class="row">
                <div class="col-3"></div>
                <div class="col-5"></div>
                <div class="col-3">
                        <div className='form-group'>
                            <button class="btn btn-success form-control" style={{width:'100px'}} onClick={registerHandler} >Register</button> 
                        </div>
                    </div>
                    
                    
                    
                </div>
                <br></br><br></br>
            </form>
        </div>
    );
}

export default AdminPageComponent;