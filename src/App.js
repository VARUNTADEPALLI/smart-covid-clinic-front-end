import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import PatientRegistrationComponent from './components/PatientRegistrationComponent';
import LoginComponent from './components/LoginComponent';
import ForgotPasswordComponent from './components/ForgotPasswordComponent';
import ViewPatientDataComponent from './components/ViewPatientDataComponent';
import SaveDoctorsDataComponent from './components/SaveDoctorsDataComponent';
import ViewDocDetails from './components/ViewDocDetails';
import UpdateDoctorDetailsComponent from './components/UpdateDoctorDetailsComponent';
import EditPatientDetailsComponent from './components/EditPatientDetailsComponent';
import PatientRegisterComponent from './components/PatientRegisterComponent';
import DoctorAppoitmentsComponent from './components/DoctorAppoitmentsComponent';
import FIcAppointmentsComponent from './components/FIcAppointmentsComponent';
import HomepageComponent from './components/HomepageComponent';
import DoctorRegisterComponent from './components/DoctorRegisterComponent';
import PateintPageComponent from './components/PateintPageComponent';
import AdminPageComponent from './components/AdminPageComponent';
import ViewAppointmentComponent from './components/ViewAppointmentComponent';
import DOctorHomeComponent from './components/DOctorHomeComponent';
import ViewDoctorProfileComponent from './components/ViewDoctorProfileComponent';
import ViewAllAppointmentsComponent from './components/ViewAllAppointmentsComponent';
import PatientDetailsComponent from './components/PatientDetailsComponent';
import ViewPatients from './components/ViewPatients';


function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
         < Route  path='/' element={<HomepageComponent/>}>
            </Route>

            < Route  path='/viewmyappointments' element={<ViewAllAppointmentsComponent/>}>
            </Route>
          
            <Route  path='/EditPatientDetails' element={<EditPatientDetailsComponent/>}>
            </Route>

            <Route  path='/ViewDoctorProile' element={<ViewDoctorProfileComponent/>}>
            </Route>

            <Route  path='/DoctorHome' element={<DOctorHomeComponent/>}>
            </Route>

            <Route  path='/viewappointment' element={<ViewAppointmentComponent/>}>
            </Route>


            <Route  path='/AdminPage' element={<AdminPageComponent/>}>
            </Route>

            <Route  path='/FixAppointments' element={<FIcAppointmentsComponent/>}>
            </Route>

            <Route  path='/ViewDoctorsOnDate' element={<DoctorAppoitmentsComponent/>}>
            </Route>

            <Route  path='/PatientRegister' element={<PatientRegisterComponent/>}>
            </Route>

            <Route  path='/DoctorRegsiter' element={<DoctorRegisterComponent/>}>
            </Route>

            <Route  path='/PatientRegistration' element={<PatientRegistrationComponent/>}>
            </Route>

            <Route  path='/forgotPassword' element={<ForgotPasswordComponent/>}>
            </Route>
            <Route  path='/PatientPage' element={<PateintPageComponent/>}>
            </Route>

            <Route  path='/Viewpatientprofile' element={<ViewPatientDataComponent/>}>
            </Route>
            <Route  path='/viewpatients' element={<ViewPatients/>}>
            </Route>
            
            <Route  path='/Viewpatientdetailsprofile' element={<PatientDetailsComponent/>}>
            </Route>

            <Route  path='/DoctorDataRegistration' element={<SaveDoctorsDataComponent/>}>
            </Route>

            <Route  path='/ViewDocDetails' element={<ViewDocDetails/>}>
            </Route>
            <Route  path='/UpdateDoctorDetails' element={<UpdateDoctorDetailsComponent/>}>
            </Route>
          
          </Routes>
      
          
         
            

   
             
      </Router>
     
    </div>
  );
}

export default App;
