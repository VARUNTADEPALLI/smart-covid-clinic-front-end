import React , {useEffect, useState } from 'react';
import axios from "axios";
import { toast } from 'react-toastify';
import { useLocation,useNavigate } from 'react-router-dom';
import { Action } from 'history';
import clinic from '../assets/clinic.jpg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ViewDoctorProfileComponent(props) {


    const location = useLocation();
    const pid =location.state.pid;
    const history= useNavigate();
    var name='';

    const[Userdetails,setUserdetails] = useState('');
    useEffect(()=>
    {
        getDetails();
    },[])
    

    const getDetails = () =>
    {
        axios.get("http://localhost:9028/doctor/"+pid)
        .then(response => 
            setUserdetails(response.data));
      
    };  



    console.log(Userdetails);

        

        const backHanlder = (e) =>
        {
            var pname=Userdetails.name;
            e.preventDefault();
            history('/DoctorHome',{state:{pid}})
        }


    return (
        <div class="container" >
            <div class="row" >
            <div class ="col-3"></div>
            <div class="col-6" >
                <br></br><br></br><br></br>
                <div class="row" >
                <h2 style={{textAlign:"center",color:'sandybrown'}}>Doctor Details</h2>
                </div>
                <br></br>
                <table class="table table-striped"> 
               
              
                    <thead>

                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <h6 style={{textAlign:'start'}}>Doctor Id </h6> 
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
                                <h6 style={{textAlign:'start'}}>Education</h6>
                            </td>
                            <td style={{textAlign:"end"}}>
                                <p>{Userdetails.education}</p>
                            </td>
                        
                        </tr>
                        <tr>
                            <td>
                                <h6 style={{textAlign:'start'}}> Hospital</h6>
                            </td>
                            <td style={{textAlign:"end"}}>    
                                <p>{Userdetails.hospital}</p>
                            </td>   

                        </tr>
                        <tr>
                            <td>    
                                <h6 style={{textAlign:'start'}}> Specialization</h6>
                            </td>
                            <td style={{textAlign:"end"}}>
                                <p>{Userdetails.specialization}</p>
                            </td>
                        
                        </tr>
                        
                        <br></br>     <br></br>
                       
                    </tbody>
                </table>
        
                   <div class="row" style={{textAlign:"start"}}>

                   <button  class="btn btn-info"style={{width:"100px"}} onClick={backHanlder} >Back</button>
                   </div>
               

                   
              
                
       
      
                
                

            </div>
            </div>
            
            
        </div>
    );
}

export default ViewDoctorProfileComponent;