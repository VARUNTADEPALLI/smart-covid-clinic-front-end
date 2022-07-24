import React  , { useState,useEffect } from 'react';
import axios from 'axios';
import { useLocation,useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function UpdateDoctorDetailsComponent(props) {
    const location = useLocation();
    const pid =location.state.id;
    const history = useNavigate();
    const[Doc,setDoc] = useState([]);

    useEffect(()=>
{
    getDocDetails();
},[])


const getDocDetails = () =>
{
    console.log(pid);
    axios.get("http://localhost:9028/doctor/"+pid)
    .then(response => {setDoc(response.data);console.log(response.data)});
        console.log("Doctor details"+JSON.stringify(Doc))
    
    
}


const[name,setName] = useState('');
    const[nameError,setNameError] = useState('');
   


    const[age,setAge] = useState('');
    const[ageError,setageError] = useState('');

    const[hospital,setHospital] = useState('');
    const[hospitalError,sethospitalError] = useState('');

    const[specialization,setSpecialization] = useState('');
    const[specializationError,setspecializationError] = useState('');
    
    const[education,seteducation] = useState('');
    const[educationError,seteducationError] = useState('');


  

    const nameHandler = (e) =>
    {
        setNameError('');
        setName(e.target.value);
        console.log(name);
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

   

    


    const updateHandler = (e) =>
    {
            e.preventDefault();
            console.log("check");
            let ctr=0,ildurflag=0,nflag=0,mflag=0,medihisflag=0,mediuseflag=0,eflag=0,illflag=0,aflag=0;
            var fieldname = e.target.value;
            console.log(fieldname);
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
                console.log("age"+aflag);
            }   
            else
            {
                if(aflag===1 && age!=="")
                {
                    aflag--;
                    console.log("age"+aflag);
                } 
            }
            if(age>120)
            {
                aflag++;
                setageError("invalid age");
                console.log("age"+aflag);
                
                
            }
            else 
            {
                if(aflag===1 && age<120 && age>0)
                {
                    aflag--;
                    
                    console.log("age3"+aflag);
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
                    nflag--;
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

           

        
            let sum = illflag+ildurflag+mflag+aflag+nflag;
            console.log("sum="+sum);
            console.log(name)
            if(sum===0)
            {
                let error=0;
               
                let data ={
                    name,age,education,hospital,specialization
                };
                console.log(data);
                axios.put("http://localhost:9028/doctor/updateDoctorDetails/"+pid,data)
                .then(response =>{console.log(response);}).catch(err => {alert(err.response.data);console.log(error++)});
                if(error===0)
                {
                    toast.success("Record Updated!")
                }
                
               
            }   
    }
    const BackHandler = (e) =>
    {
        e.preventDefault();
        history("/ViewDocDetails")
    }


    return (
        <div>
        <div class="container">
        <br></br>
        <h1 style={{color:"rebeccapurple",textAlign:'center'}}>Edit Doctor Details</h1>
        <br></br><br></br>
        <form style={{marginLeft:"200px"}}>
            <div class="row">
                
                <div class="col-10">
                    <div className='form-group'>
                        <div style={{textAlign:"left"}}>
                            <label>Name</label><span style={{color:"red"}}> * </span>
                        </div>
                        
                        <br></br>
                        <input type="text" name="name" id="name" placeholder='Enter Name' defaultValue={Doc.name} 
                       onChange={nameHandler} onBlur={nameHandler} class="form-control" required></input>
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
                        <input type="number" name="age" id="age" defaultValue={Doc.age} placeholder='Enter age ' onChange={ageHandler} onBlur={ageHandler}class="form-control"></input>
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
                        <input type="text" name="education" id="education" defaultValue={Doc.education} placeholder='Enter education' onBlur={educationHandler} onChange={educationHandler} class="form-control"></input>
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
                        <input type="text" name="hospital" id="hospital" defaultValue={Doc.hospital} placeholder='Enter hospital name' onBlur={hospitalHandler} onChange={hospitalHandler} class="form-control"></input>
                    
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
                        <input type="text" name="specialization" id="specialization" defaultValue={Doc.specialization} placeholder='Enter specialization'onBlur={specializationHandler} onChange={specializationHandler} class="form-control"></input>
                    
                        <div style={{textAlign:"left"}}>
                            {specializationError && <span style={{color:'red'}}>{specializationError}</span>} 
                        </div></div>
                </div>
                
                
            </div>
           
            <br></br><br></br>
            
            
            <br></br><br></br>
            <div class="row">
            <div class="col-3" style={{textAlign:"start"}}>
          
                        <button class="btn btn-info" style={{width:'100px'}} onClick={BackHandler} >Back</button> 
                    
            </div>
            <div class="col-4"></div>
            <div class="col-3" style={{textAlign:"end"}}>
                   
                        <button class="btn btn-warning" style={{width:'100px'}} onClick={updateHandler} >Update</button> 
                    
                </div>
                
                
                
            </div>
            <br></br><br></br>
        </form>
    </div>
    </div>
    );
}

export default UpdateDoctorDetailsComponent;