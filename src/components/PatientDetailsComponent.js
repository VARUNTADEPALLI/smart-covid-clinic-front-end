import React from 'react';
import  { useEffect, useState } from 'react';
import { Link, useNavigate,useLocation } from "react-router-dom";
import axios from 'axios';

function PatientDetailsComponent(props) {
    const location = useLocation();
    const id =location.state.data.id;
    const pid =  location.state.data.pid ;
    console.log(id);
    console.log(pid);
    const history= useNavigate();

    const[Userdetails,setUserdetails] = useState('');
    useEffect(()=>
    {
        getDetails();
    },[])
    

    const getDetails = () =>
    {
        axios.get("http://localhost:9028/patient/"+id)
        .then(response => 
            setUserdetails(response.data));
      
    };  



    console.log(Userdetails);

        
       

        const backHanlder = (e) =>
        {
            e.preventDefault();
            console.log(pid);
            history('/DoctorHome',{state:{pid}})
        }
    return (
        <div class="container" >
        <div class="row" >
        <div class ="col-3"></div>
        <div class="col-6" >
            <br></br><br></br><br></br>
            <div class="row" >
            <h2 style={{textAlign:"center",color:'sandybrown'}}>Patient Details</h2>
            </div>
            <br></br>
            <table class="table table-striped"> 
           
          
                <thead>

                </thead>
                <tbody>
                    <tr>
                        <td>
                            <h6 style={{textAlign:'start'}}>User Id </h6> 
                        </td>
                        <td style={{textAlign:"end"}}>
                        <p>{Userdetails.id}</p>
                        </td>
                        
                    
                    </tr>
                    <tr>
                        <td>
                            <h6 style={{textAlign:'start'}}> Name </h6> 
                        </td>
                        <td style={{textAlign:"end"}}>
                        <p> {Userdetails.name}</p>
                        </td>   
                   
                    </tr>
                    <tr>
                        <td>
                            <h6 style={{textAlign:'start'}}> Age </h6> 
                        </td>
                        <td style={{textAlign:"end"}}>
                            <p>{Userdetails.age}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h6 style={{textAlign:'start'}}>Email</h6>
                        </td>
                        <td style={{textAlign:"end"}}>
                            <p>{Userdetails.email}</p>
                        </td>
                    
                    </tr>
                    <tr>
                        <td>
                            <h6 style={{textAlign:'start'}}> Mobile Number</h6>
                        </td>
                        <td style={{textAlign:"end"}}>    
                            <p>{Userdetails.mobile}</p>
                        </td>   

                    </tr>
                    <tr>
                        <td>    
                            <h6 style={{textAlign:'start'}}> Illness</h6>
                        </td>
                        <td style={{textAlign:"end"}}>
                            <p>{Userdetails.illness}</p>
                        </td>
                    
                    </tr>
                    <tr>
                        <td>
                            <h6 style={{textAlign:'start'}}>Illness Duration</h6>
                        </td>
                        <td
                        style={{textAlign:"end"}}>
                        <p>{Userdetails.illnessduration}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h6 style={{textAlign:'start'}}>Medical History</h6>
                        </td>
                        <td style={{textAlign:"end"}}>
                        <p>{Userdetails.medicalhistory}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h6 style={{textAlign:'start'}}>Medicines In Use</h6>
                        </td>
                        <td style={{textAlign:"end"}}>
                        <p>{Userdetails.medicinesinuse}</p>
                        </td>
                    </tr>
                    <br></br>     <br></br>
                    <tr style={{borderBottom:"white"}}> 
                        <td style={{textAlign:"start"}}>
                        <button  class="btn btn-info"style={{width:"120px"}} onClick={backHanlder} >Back</button>
                        </td>
                        
                    </tr>
                </tbody>
            </table>
    
               
                

               
          
            
   
  
            
            

        </div>
        </div>
        
        
    </div>
    );
}

export default PatientDetailsComponent;