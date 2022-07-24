import React , { useEffect, useState } from 'react';
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";
import { Action } from 'history';
import clinic from '../assets/clinic.jpg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function HomepageComponent(props) {

    const[id,setId]= useState('');
    const[password,setPassword]= useState('');
    const[idError,setIdError]= useState('');
    const[passwordError,setPsswordError]= useState('');
    const[Users,setUsers]= useState('');
    const[User,setUser]= useState('');

    
    let history = useNavigate();
 
    var pid=id;
    useEffect(()=>
    {
        getUserDetails()

    },[])

  

    const getUserDetails = () =>
    {
       
            axios.get("http://localhost:9028/findAllDetails/")
        .then(response => 
            setUsers(response.data));
        
       
        
    }

       
    
   
   
    const idHandler = (e) =>
    {
        setIdError('');
        setId(e.target.value);
    }

    const passwordHandler = (e) =>
    {
        setPsswordError('');
        setPassword(e.target.value);
    } 
    
    
    const loginHandler = (e) =>
    {
            e.preventDefault();
            let ctr=0,ctr1=0;
            if(id!=='')
            {
                   ctr++;
            }
            else
            {
                setIdError("User ID required");
            }
            if(password!=='')
            {
                ctr1++;
            }
            else{
                setPsswordError("Password Required");
            }
            if(ctr>0 && ctr1>0)
            {
                if(id==="CAPADMIN[2022]" && password==="admin")
                {
                    history("/AdminPage");
                    alert("logged in")

                }
                else
                {
                    let j=0,a=0,b=0;
                    for(let i=0;i<Users.length;i++)
                    {
                        
                        if(id===Users[j].id && password===Users[j].password)
                        {
                            if(id.length===12)
                            {
                                a++;
                            }
                            if(id.length===6)
                            {
                                b++;                            }
                            
                            break;
                        }
                        j++;
                    }
                    if(a==1)
                    {
                        console.log("logged in");  
                        // history("/StudentHome",{state:{id}})  
                        
                       
                       history("/PatientPage",{state:{pid}});
                    }
                    else if(b==1)
                    {
                        console.log("logged in");  
                        // history("/StudentHome",{state:{id}})  
                       history("/DoctorHome",{state:{pid}});
                    }
                   else
                    {
                       alert("Incorrect Credentials")
                        console.log("Incorrect Credentials");
                    }

                }

                    
            }
                
            
    }
    const registerHandler = (e) =>
    {
        e.preventDefault();
        history("/PatientRegister")
    } 

    const registerDoctorHandler = (e) =>
    {
        e.preventDefault();
        history("/DoctorRegsiter")
    }


    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Nav className="me-auto">
                   
                    <button class="btn" style={{color:"white"}} onClick={registerHandler} >Register As Patient</button> 
                    <button class="btn" style={{color:"white"}} onClick={registerDoctorHandler} >Register As Doctor</button> 
                    
                </Nav>
                </Container>
            </Navbar>

            <br></br><br></br><br></br>
             <div class="container">
             <h1 style={{color:"coral",textAlign:"center"}}>Login</h1>
                <div class="row">
                    <div class="col-2"></div>
                    
                    <div class="col-4">
                        <br></br><br></br><br></br><br></br>
                    <div class="card border-0">
                            <div class="card-body">
                            <img src={clinic} alt="clinic" />
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <br></br>
                        <div class="card border-0">
                            <div class="card-body">
                           
                                <br></br>
                                <form>
                                    <div class="row">
                       
                                            <div className='form-group'>
                                    
                                                <div style={{textAlign:"left"}}>
                                                    <label>User ID </label><span style={{color:'red'}}> * </span>
                                                </div>
                             
                                            
                                                <br></br>
                                                <input type="text" name='id' id="id" class="form-control" onChange={idHandler} placeholder='Enter User Id' value={id}></input>
                                                <div class="row">
                                                    <div style={{textAlign:"left"}}>
                                                    {idError && <span style={{color:'red'}}>{idError}</span>}
                                                    </div>
                                                </div>
                                
                                            </div>
                                    </div>
                                    
                                    
                                    <br></br>
                                    <div class="row">
                                        <div class="col-1"></div>
                                         <div className='form-group'>
                                            <div style={{textAlign:"left"}}>
                                                    <label>Password </label><span style={{color:'red'}}> * </span>
                                                    
                                            </div>  
                                            
                                        
                                            <br></br>
                                            <input type="password" name='password' id="password" class="form-control" onChange={passwordHandler} value={password} placeholder='Enter Password'></input>
                                            <div class="row">
                                                <div style={{textAlign:"left"}}>
                                                    {passwordError && <span style={{color:'red'}}>{passwordError}</span>}
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <br></br>
                                <div class="row" style={{textAlign:'start',color:"red"}}>
                                    <Link to="/forgotPassword" style={{ textDecoration: "red" }}>Forgot Password ?</Link>
                                </div>
                                    
                                    <br></br>
                                    <div className='form-group' style={{textAlign:"end"}}>
                                        <button className='btn btn-success   sm-30' onClick={loginHandler}> Log-In</button>
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

export default HomepageComponent;