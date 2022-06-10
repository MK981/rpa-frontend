import './Login.scss';

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

/*import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';*/

import { useDispatch, useSelector } from 'react-redux';

function Login() {

    const [age, setAge] = React.useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const dispatch = useDispatch();
    const loggedIn = useSelector(state => state.loggedIn);

    /*<Box sx={{ minWidth: 120, height: 30, color: 'white', mb: 2}}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" sx={{color: 'white', mt: 0}}>Компания</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Компания"
                    onChange={handleChange}
                    sx={{ height: 35, border: '1px solid rgb(6, 39, 54)', borderRadius: 2 }}
                    >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
             </Box>*/

    function logIn() {
        dispatch({type: 'LOGGEDIN_TRUE'});
        navigate('/work-studio');
    }

    return (
        <div className='auth'>
            <h1 className='auth__title'>Добро пожаловать в RPA First</h1>
            <form className='auth__form'>
                <select className='auth__sel'>
                    <option>Выберете вашу компанию</option>
                    <option>РиалВеб</option>
                </select>
                <label className='auth__label' htmlFor='email-input'>Email:</label>
                <input type='email' className='auth__input' id='email-input' name='email-input' required />
                <label className='auth__label' htmlFor='email-input'>Пароль:</label>
                <input type='password' className='auth__input' id='pass-input' name='pass-input' required />
                <button type='submit' className='auth__submit' onClick={logIn}>Войти</button>
            </form>
            <Link to='/admin-log' className='auth__link'>Вход для администратора</Link>
        </div>
    );
}

export default Login;