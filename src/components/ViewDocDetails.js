import React , { useState,useEffect } from 'react';
import axios from 'axios';
import { useLocation,useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure();
function ViewDocDetails(props) {


    const[Doc,setDoc] = useState([]);
const[Testid,setTestid] = useState('');


 
const history = useNavigate();
useEffect(()=>
{
    getTestDetails();
},[])
const err=0;

const getTestDetails = () =>
{
    axios.get("http://localhost:9028/doctor/alldocs")
    .then(response => setDoc(response.data));
    
    
}

const onConfirm = (id) =>
{
  
   
    console.log(id);
    axios.delete("http://localhost:9028/doctor/"+id)
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
const onCancel = () =>{


    axios.get("http://localhost:9028/doctor/alldocs")
    .then(response => setDoc(response.data));
}




const updateHandler = (id) =>
{
    console.log(id);
    history("/UpdateDoctorDetails",{state:{id}});
  
}
const backHandler = (e) =>
{
    e.preventDefault();
    history("/AdminPage");
}


    return (
        <div>
             <div class="container">
                <br></br>
                <h1 className='text-center' style={{color:"rebeccapurple"}}> Doctor Details</h1>
                <br></br><br></br>
            <table className='table table-stripped'>
                <thead>
                    <tr>
                        <td class="blockquote">Doctor ID</td>
                        <td class="blockquote">Doctor Name</td>
                        <td class="blockquote">Age</td>
                        <td class="blockquote">Education</td>
                        <td class="blockquote">Hospital</td>
                        <td class="blockquote">Specialization</td>
                        <td class="blockquote">Update</td>
                        <td class="blockquote">Delete</td>

                    </tr>
                </thead>
                <tbody>
                    {
                        Doc.map(
                            Doc =>
                                <tr key={Doc.id}>
                                    <td>{Doc.id}</td>
                                    <td>{Doc.name}</td>
                                    <td>{Doc.age}</td>
                                    <td>{Doc.education}</td>
                                    <td>{Doc.hospital}</td>
                                    <td>{Doc.specialization}</td>
                                    <td style={{marginLeft:"15px"}}>
                                      <button class="btn btn-warning" onClick={() =>updateHandler(Doc.id)}>Update</button>
                                    </td>
                                    <td style={{textAlign:"end"}}>
                                       <button  class="btn btn-danger" onClick={()=>{window.confirm('Are you sure you wish to delete this item?') ? onConfirm(Doc.id) : onCancel("")}}>Delete</button>
                                    </td>
                                </tr>
                        )
                    }
                    <br>
                    </br>
                   <tr style={{borderBottom:"white"}}> 
                            <td>
                            <button class="btn btn-info" onClick={backHandler}>Back</button>
                            </td>
                           
                        </tr>
                </tbody>
            </table>
        </div>
       
        </div>
    );
}

export default ViewDocDetails;