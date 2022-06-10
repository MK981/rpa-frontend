import '../Login/Login.scss';

import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

function AdminLogin() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function logIn() {
        dispatch({type: 'ADMINLOGGEDIN_TRUE'});
        navigate('/work-studio');
    }


    return (
        <div className='auth'>
            <h1 className='auth__title'>Добро пожаловать в RPA First</h1>
            <form className='auth__form'>
                <label className='auth__label' htmlFor='email-input'>Email:</label>
                <input type='email' className='auth__input' id='email-input' name='email-input' required />
                <label className='auth__label' htmlFor='email-input'>Пароль:</label>
                <input type='password' className='auth__input' id='pass-input' name='pass-input' required />
                <button type='submit' className='auth__submit' onClick={logIn}>Войти</button>
            </form>
            <Link to='/signin' className='auth__link'>Вход для сотрудников компаний</Link>
            {/*<button onClick={() => dispatch({type: 'LOGGEDIN_TRUE'})}></button>*/}
        </div>
    );
}

export default AdminLogin;