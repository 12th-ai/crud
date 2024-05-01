// import React, { useState } from 'react';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function App() {
//   const [name, setName] = useState('');
//   const [employeeCode, setEmployeeCode] = useState('');
//   const [salary, setSalary] = useState('');

//   const notify = (message) => toast(message);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:3000/api/employees/add/', {
//         name,
//         employee_code: employeeCode,
//         salary
//       });
      
//       if (response.data && response.data.message) {
//         notify(response.data.message);
//       }
//     } catch (error) {
//       console.error('Error:', error.response.data);
//       notify('Error: ' + error.response.data.message);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name:</label> <br />
//         <input
//           type="text"
//           id="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         /> <br />
//         <label htmlFor="employeeCode">Employee Code:</label> <br />
//         <input
//           type="text"
//           id="employeeCode"
//           value={employeeCode}
//           onChange={(e) => setEmployeeCode(e.target.value)}
//         /> <br />
//         <label htmlFor="salary">Salary:</label> <br />
//         <input
//           type="text"
//           id="salary"
//           value={salary}
//           onChange={(e) => setSalary(e.target.value)}
//         /> <br />
//         <button type="submit">Submit</button>
//       </form>
//       <ToastContainer />
//     </div>
//   );
// }

// export default App;

import React from 'react'
import {BrowserRouter, Router,Routes,Route} from 'react-router-dom';
import Home from './component/Home';
import Insert from './component/insert';
import './App.css'
import Login from './component/Login';


function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/insert' element={<Insert />} />
  <Route path='/login' element={<Login />} />

</Routes>
</BrowserRouter>
    </div>
  )
}

export default App