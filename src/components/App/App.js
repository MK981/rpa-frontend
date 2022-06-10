import React from 'react';
import './App.scss';

import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Login from '../Login/Login';
import AdminLogin from '../AdminLogin/AdminLogin';
import WorkStudio from '../WorkStudio/WorkStudio';
import HrProcess from '../HrProcess/HrProcess';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.loggedIn);
  const adminLoggedIn = useSelector(state => state.adminLoggedIn);

  const location = useLocation();
  const navigate = useNavigate();
  //const [loggedIn, setLoggedIn] = React.useState(false);
  //console.log(loggedIn);

  

  /*React.useEffect(() => {
    loggedIn || adminLoggedIn  ? navigate('/work-studio') : navigate('/signin');
  }, [loggedIn, adminLoggedIn]);*/

  return (
    <div className="app">
      <Routes>
        <Route path='/work-studio/*' element={<WorkStudio />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/admin-log' element={<AdminLogin />} />
        <Route path='/hr-process' element={<HrProcess />} />
      </Routes>
    </div>
  );
}

export default App;
