import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function DoctorAppoitmentsComponent(props) {
    const[Doc,setDoc] = useState([]);
    const [selecteddate, setselecteddate] = useState('');
    // .toISOString().split('T')[0]
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
 
    
const loginHandler=() =>
{
    if(selecteddate!=null)
    {
        let error=0;
        axios.get("http://localhost:9028/DoctorAvailability/"+a)
        .then(response => setDoc(response.data)).catch(err => {alert(err.response.data);console.log(error++)});
        console.log(Doc);
    }
    
}

    return (
        <div class="container" style={{textAlign:"center"}}>
            <DatePicker showYearDropdown isClearable scrollableMonthYearDropdown dateFormat="yyyy/MM/dd" selected={selecteddate} onChange={(date) => setselecteddate(date)} />
            <button className='btn btn-success   sm-30' onClick={loginHandler}> getdetails</button>
        </div>
    );
}

export default DoctorAppoitmentsComponent;