import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


function PatientRegisterComponent(props) {


    const[id,setId]= useState('');
    const[password,setPassword]= useState('');
    const[passwordError,setpasswordError]= useState('');
    const[confirmpassword,setconfirmpassword]= useState('');
    const[idError,setIdError]= useState('');
    const[confirmpasswordError,setconfirmpasswordError]= useState('');
    const[Users,setUsers]= useState('');
    const[User,setUser]= useState('');

    const history = useNavigate();

    var matchflag=0;

    const idHandler = (e) =>
    {
        setIdError('');
        setId(e.target.value);
    }

    const passwordHandler = (e) =>
    {
        setpasswordError('');
        setPassword(e.target.value);
    } 

    const confirmpasswordHandler = (e) =>
    {
        setconfirmpasswordError('');
        setconfirmpassword(e.target.value);
    } 

    const registerHandler = (e) =>
    {
            e.preventDefault();
            let ctr=0,ctr1=0,ctr2=0,iflag=0;
            if(id!=='')
            {
                   ctr++;
            }
            else
            {
                setIdError("User ID required");
            }
            if(id.length>12)
            {
                iflag++;
                setIdError("Invalid User ID");
            }
            if(password!=='')
            {
                ctr1++;
            }
            else
            {
                setpasswordError("Password Required");
            }
            if(confirmpassword!=='')
            {
                ctr2++;
            }
            else
            {
                setconfirmpasswordError("Confirm  Password");
            }

            
            if(password!==confirmpassword)
            {
                alert("Passwords do not match");
                matchflag++;
           

            }
            else
            {
                if(matchflag===1 && password===confirmpassword)
                {
                    matchflag--;
                }
                
            }
            
            if(ctr>0 && ctr1>0 && ctr2>0 && matchflag==0 && iflag==0)
            {
                var r="";
                let error=0;
                let data ={
                    id,password,confirmpassword
                };
                console.log(data);
                axios.post("http://localhost:9028/saveUserDetails",data)
                .then(response =>{console.log(response);}).catch(err => {errhandler(r=err.response.data,error=error+1);});
                // if(err===0)
                // {
                //     toast.success("User Registered!");
                // }
                    
            }

                    
            }
            const errhandler= (r,error) =>
            {
                if(error==0)
                {
                    toast.success("User Registered!");
                    history("/")
                }
                else
                {
                    toast.error(r);
                }
            }
                
    
    

    return (
        <div>
        <div class="container">
        <br></br><br></br><br></br>
           <div class="row">
          
           <br></br>  <h3 style={{color:"coral",textAlign:"center"}}>Patient Account Registration</h3>
               <div class="col-4"></div>
               
               <div class="col-4">
                  
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
                               <div class="row">
                                   <div class="col-1"></div>
                                    <div className='form-group'>
                                       <div style={{textAlign:"left"}}>
                                               <label>Confirm Password </label><span style={{color:'red'}}> * </span>
                                               
                                       </div>  
                                       
                                   
                                       <br></br>
                                       <input type="password" name='confirmpassword' id="confirmpassword" class="form-control" onChange={confirmpasswordHandler} value={confirmpassword} placeholder='Enter Password'></input>
                                       <div class="row">
                                           <div style={{textAlign:"left"}}>
                                               {confirmpasswordError && <span style={{color:'red'}}>{confirmpasswordError}</span>}
                                           </div>
                                       </div>
                                       
                                   </div>
                               </div>
                               <br></br>
                           
                               
                               <br></br>
                               <div className='form-group' style={{textAlign:"end"}}>
                                   <button className='btn btn-warning   sm-30' onClick={registerHandler}>Register</button>
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

export default PatientRegisterComponent;