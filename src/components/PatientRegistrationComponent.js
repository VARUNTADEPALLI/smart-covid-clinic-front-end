import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";


function PatientRegistrationComponent(props) 
{
    const[email,setEmail]= useState('');
    const[emailError,setEmailError]= useState('');
    const[name,setName] = useState('');
    const[nameError,setNameError] = useState('');
    const[mobile,setMobile] = useState('');
    const[mobileNumberError,setMobileNumberError] = useState('');
    const[id,setId] = useState('');
    const[idError,setIdError] = useState('');

    const[age,setAge] = useState('');
    const[ageError,setageError] = useState('');

    const[illness,setIllness] = useState('');
    const[illnessError,setillnessError] = useState('');

    const[illnessduration,setIllnessduration] = useState('');
    const[IllnessdurationError,setIllnessdurationError] = useState('');
    
    const[medicalhistory,setMedicalhistory] = useState('');
    const[MedicalhistoryError,setmedicalhistoryError] = useState('');

    const[medicinesinuse,setMedicinesinuse] = useState('');
    const[MedicinesinuseError,setMedicinesinuseError] = useState('');
   
    
    
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

    const emailHandler = (e) =>
    {
        setEmailError('');
        setEmail(e.target.value);
    }

   

    const phoneHandler = (e) =>
    {
        setMobileNumberError('');
        setMobile(e.target.value);
    }
    const ageHandler = (e) =>
    {
        setageError('');
        setAge(e.target.value);
        
    }

    const illnessHandler = (e) =>
    {
        setillnessError('');
        setIllness(e.target.value);
    }

    const illnessdurationHandler = (e) =>
    {
        setIllnessdurationError('');
        setIllnessduration(e.target.value);
    }

const MedicalHistoryHandler = (e) =>
{
    setmedicalhistoryError('');
    setMedicalhistory(e.target.value);
}

    const medicinesinuseHandler = (e) =>
    {
        setMedicinesinuseError('');
        setMedicinesinuse(e.target.value);
    }

    


    const registerHandler = (e) =>
    {
            e.preventDefault();
            let ctr=0,iflag=0,ildurflag=0,nflag=0,mflag=0,medihisflag=0,mediuseflag=0,eflag=0,illflag=0,aflag=0;
            
            if(email==='')
            {
                setEmailError("Email required");
                eflag++;
            }
            else
            {
                if(eflag===1 && email!=='')
                {
                    eflag--;
                }
                const emailRegx = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
                if(!emailRegx.test(email))
                {
                    setEmailError("Invalid email");
                    eflag++;
                }
                else
                {
                    if(eflag===1 && emailRegx.test(email))
                    eflag--;
                }
            }  
            if(illness==="")
            {
                setillnessError("illness Required");
                illflag++;
            }   
            else
            {
                if(illflag===1 && illness!=="")
                {
                    illflag--;
                }   
                const sepcialRegx = new RegExp("[0-9*#+]+$")
                if(sepcialRegx.test(illness))
                {
                    setillnessError("Enter text without numbers and special characters");
                    illflag++;
                }
                else
                {
                   if(illflag===1 && !sepcialRegx.test(illness)) 
                   {
                       illflag--;
                   }
                }
            }

            if(illnessduration==="")
            {
                setIllnessdurationError("illness duration Required");
                ildurflag++;
            }   
            else
            {
                if(ildurflag===1 && illnessduration!=="")
                {
                    ildurflag--;
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

            if(medicalhistory==="")
            {
                setmedicalhistoryError("Medical history Required.If none please enter none");
                medihisflag++;
            }   
            else
            {
                if(medihisflag===1 && medicalhistory!=="")
                {
                    medihisflag--;
                }   
                
            }

            if(medicinesinuse==="")
            {
                setMedicinesinuseError("Medicines in use Required.If none please enter none");
                mediuseflag++;
            }   
            else
            {
                if(mediuseflag===1 && medicinesinuse!=="")
                {
                    mediuseflag--;
                }   
                
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
                if(iflag===1 && id!=="")
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
                   if(iflag===1 && !sepcialRegx.test(name)) 
                   {
                       nflag--;
                   }
                }
            }

            if(mobile==="")
            {
                setMobileNumberError("Mobile Number Required");
                mflag++;
            }
            else{
                if(mflag===1 && mobile!=="")
                {
                    mflag--;
                }
                if(mobile.length<10 || mobile.length>10)
                {
                    setMobileNumberError("Invalid Mobile number");
                    mflag++;
                }
                else{
                    if(mflag===1 && mobile.length===10)
                    {
                        mflag--;
                    }
                }
            }

            
            
            let sum = iflag+ildurflag+nflag+mflag+medihisflag+mediuseflag+eflag+illflag;
            console.log("sum="+sum);
            if(sum===0)
            {
                let error=0;
                let data ={
                    id,name,age,email,mobile,illness,illnessduration,medicalhistory,medicinesinuse
                };
                console.log(data);
                axios.post("http://localhost:9028/patient",data)
                .then(response =>{console.log(response);}).catch(err => {alert(err.response.data);error=error+1;
                    
                });
                // if(error===0)
                // {
                //     history("/FixAppointments",{state:{name}});
                // }
                
                
               
               
            }
           
            
           
           

            

    }
           
    
    return (
        <div class="container">
            <br></br>
            <h1 style={{color:"sandybrown",textAlign:'center'}}>Patient Registeration</h1>
            <br></br><br></br>
            <form style={{marginLeft:"200px"}}>
                <div class="row">
                    <div class="col-5">
                        <div className='form-group'>
                            <div class="row">
                                <div style={{textAlign:"left"}}>
                                    <label>Aadhar number</label><span style={{color:"red"}}>* </span>
                                </div>
                            </div>
                            
                            <br></br>
                            <input type="text" name="id" id="id" placeholder='Enter Aadhar Number'  value={id} onChange={aadharHandler} class="form-control"></input>
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
                            <input type="text" name="age" id="age" value={age} placeholder='Enter age ' onChange={ageHandler} class="form-control"></input>
                            <div style={{textAlign:"left"}}>
                                {ageError && <span style={{color:'red'}}>{ageError}</span>} 
                            </div>
                            
                        </div>
                    </div>
                    
                    <div class="col-5">
                    <div className='form-group'>
                    <div style={{textAlign:"left"}}>
                            <label>Email</label><span style={{color:"red"}}> * </span>
                        </div>
                            <br></br>
                            <input type="email" name="email" id="email" value={email} placeholder='Enter email' onChange={emailHandler} class="form-control"></input>
                            <div style={{textAlign:"left"}}>
                                {emailError && <span style={{color:'red'}}>{emailError}</span>} 
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                <br></br><br></br>  
                <div class="row">
                <div class="col-5">
                        <div className='form-group'>
                            <div style={{textAlign:"left"}}>
                                <label>Phone Number</label><span style={{color:"red"}}> * </span>
                            </div>
                            
                            <br></br>
                            <input type="number" name="mobileNumber" id="mobileNumber" value={mobile} placeholder='Enter Phone number'onChange={phoneHandler} class="form-control"></input>
                        
                            <div style={{textAlign:"left"}}>
                                {mobileNumberError && <span style={{color:'red'}}>{mobileNumberError}</span>} 
                            </div></div>
                    </div>

                    <div class="col-5">
                        <div className='form-group'>
                            <div style={{textAlign:"left"}}>
                                <label>Illness</label><span style={{color:"red"}}> * </span>
                            </div>
                            
                            <br></br>
                            <input type="text" name="illness" id="illness" value={illness} placeholder='Enter illness'onChange={illnessHandler} class="form-control"></input>
                        
                            <div style={{textAlign:"left"}}>
                                {illnessError && <span style={{color:'red'}}>{illnessError}</span>} 
                            </div></div>
                    </div>
                    
                    
                </div>
               
                <br></br><br></br>
                <div class="row">
                <div class="col-5">
                    <div className='form-group'>
                    <div style={{textAlign:"left"}}>
                            <label>Illness Duration</label><span style={{color:"red"}}> * </span>
                        </div>
                            <br></br>
                            <input type="text" name="illnessduration" id="illnessduration" value={illnessduration} placeholder='Enter illness duration' onChange={illnessdurationHandler} class="form-control"></input>
                            <div style={{textAlign:"left"}}>
                                {IllnessdurationError && <span style={{color:'red'}}>{IllnessdurationError}</span>} 
                            </div>
                            
                        </div>
                    </div>

                <div class="col-5">
                    <div className='form-group'>
                    <div style={{textAlign:"left"}}>
                            <label>Medical history</label><span style={{color:"red"}}> * </span>
                        </div>
                            <br></br>
                            <input type="text" name="medicalhistory" id="medicalhistory" value={medicalhistory} placeholder='Enter medical history' onChange={MedicalHistoryHandler} class="form-control"></input>
                            <div style={{textAlign:"left"}}>
                                {MedicalhistoryError && <span style={{color:'red'}}>{MedicalhistoryError}</span>} 
                            </div>
                            
                        </div>
                    </div>

                    
                </div>
                <br></br>
                <div class="row">
                
                <div class="col-5">
                        <div className='form-group'>
                            <div style={{textAlign:"left"}}>
                                <label>Medicines in use</label><span style={{color:"red"}}> * </span>
                            </div>
                            
                            <br></br>
                            <input type="text" name="medicinesinuse" id="medicinesinuse" value={medicinesinuse} placeholder='Enter medicines currently inuse' onChange={medicinesinuseHandler} class="form-control"></input>
                        
                            <div style={{textAlign:"left"}}>
                                {MedicinesinuseError && <span style={{color:'red'}}>{MedicinesinuseError}</span>} 
                            </div></div>
                    </div>
                    
                </div>
                
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

export default PatientRegistrationComponent;