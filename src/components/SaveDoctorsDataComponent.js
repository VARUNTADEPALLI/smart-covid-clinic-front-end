// import React from 'react';
// import  { useEffect, useState } from 'react';
// import { Link, useNavigate,useLocation } from "react-router-dom";
// import axios from 'axios';

// function SaveDoctorsDataComponent(props) {


  
//     const[name,setName] = useState('');
//     const[nameError,setNameError] = useState('');
   
//     const[id,setId] = useState('');
//     const[idError,setIdError] = useState('');

//     const[age,setAge] = useState('');
//     const[ageError,setageError] = useState('');

//     const[hospital,setHospital] = useState('');
//     const[hospitalError,sethospitalError] = useState('');

//     const[specialization,setSpecialization] = useState('');
//     const[specializationError,setspecializationError] = useState('');
    
//     const[education,seteducation] = useState('');
//     const[educationError,seteducationError] = useState('');

    
   
    
    
//     // let history = useNavigate();

//     const aadharHandler = (e) =>
//     {   
//         setIdError('');
//         setId(e.target.value);
//     }

//     const nameHandler = (e) =>
//     {
//         setNameError('');
//         setName(e.target.value);
//     }

//     const educationHandler = (e) =>
//     {
//         seteducationError('');
//         seteducation(e.target.value);
//     }

   

//     const hospitalHandler = (e) =>
//     {
//         sethospitalError('');
//         setHospital(e.target.value);
//     }
//     const ageHandler = (e) =>
//     {
//         setageError('');
//         setAge(e.target.value);
        
//     }

//     const specializationHandler = (e) =>
//     {
//         setspecializationError('');
//         setSpecialization(e.target.value);
//     }

   

    


//     const registerHandler = (e) =>
//     {
//             e.preventDefault();
//             let ctr=0,iflag=0,ildurflag=0,nflag=0,mflag=0,medihisflag=0,mediuseflag=0,eflag=0,illflag=0,aflag=0;
            
           
//             if(education==="")
//             {
//                 seteducationError("education Required");
//                 illflag++;
//             }   
//             else
//             {
//                 if(illflag===1 && education!=="")
//                 {
//                     illflag--;
//                 }   
//                 const sepcialRegx = new RegExp("[0-9*#+]+$")
//                 if(sepcialRegx.test(education))
//                 {
//                     seteducationError("Enter text without numbers and special characters");
//                     illflag++;
//                 }
//                 else
//                 {
//                    if(illflag===1 && !sepcialRegx.test(education)) 
//                    {
//                        illflag--;
//                    }
//                 }
//             }

//             if(specialization==="")
//             {
//                 setspecializationError("specialization Required");
//                 ildurflag++;
//             }   
//             else
//             {
//                 if(ildurflag===1 && specialization!=="")
//                 {
//                     ildurflag--;
//                 }   
//                 const sepcialRegx = new RegExp("[0-9*#+]+$")
//                 if(sepcialRegx.test(specialization))
//                 {
//                     setspecializationError("Enter text without numbers and special characters");
//                     ildurflag++;
//                 }
//                 else
//                 {
//                    if(ildurflag===1 && !sepcialRegx.test(specialization)) 
//                    {
//                     ildurflag--;
//                    }
//                 }
//             }

//             if(hospital==="")
//             {
//                 sethospitalError("hospital name Required");
//                 mflag++;
//             }   
//             else
//             {
//                 if(mflag===1 && hospital!=="")
//                 {
//                     mflag--;
//                 }   
//                 const sepcialRegx = new RegExp("[0-9*#+]+$")
//                 if(sepcialRegx.test(hospital))
//                 {
//                     sethospitalError("Enter text without numbers and special characters");
//                     mflag++;
//                 }
//                 else
//                 {
//                    if(mflag===1 && !sepcialRegx.test(hospital)) 
//                    {
//                     mflag--;
//                    }
//                 }
//             }


        

//             if(age==="")
//             {
//                 setageError("age Required");
//                 aflag++;
//             }   
//             else
//             {
//                 if(aflag===1 && age!=="")
//                 {
//                     aflag--;
                   
//                 } 
//             }
//             if(age>120)
//             {
//                 aflag++;
//                 setageError("invalid age");
//             }
//             else if(aflag===1 && age<=120)
//             {
//                 aflag--;
//             }
             
                  
                
            
           
//             if(id==="")
//             {
//                 setIdError("Id Required");
//                 iflag++;
//             }
//             else
//             {
//                 if(iflag===1 && id!=="")
//                 {
//                     iflag--;
//                 }
//             }

//             if(name==="")
//             {
//                 setNameError("Name Required");
//                 nflag++;
//             }   
//             else
//             {
//                 if(nflag===1 && name!=="")
//                 {
//                     iflag--;
//                 }   
//                 const sepcialRegx = new RegExp("[0-9*#+]+$")
//                 if(sepcialRegx.test(name))
//                 {
//                     setNameError("Enter name without numbers and special characters");
//                     nflag++;
//                 }
//                 else
//                 {
//                    if(nflag===1 && !sepcialRegx.test(name)) 
//                    {
//                        nflag--;
//                    }
//                 }
//             }

           

            
            
//             let sum = iflag+ildurflag+nflag+mflag+medihisflag+mediuseflag+eflag+illflag+aflag;
//             console.log("sum="+sum);
//             if(sum===0)
//             {
//                 let error=0;
//                 let data ={
//                     id,name,age,education,hospital,specialization
//                 };
//                 console.log(data);
//                 axios.post("http://localhost:9028/doctor",data)
//                 .then(response =>{console.log(response);}).catch(err => {alert(err.response.data);console.log(error++)});
                
                
               
//             }
           
            
           
           

            

//     }
//     return (
//         <div>
//             <div class="container">
//             <br></br>
            
//         </div>
//         </div>
//     );
// }

// export default SaveDoctorsDataComponent;