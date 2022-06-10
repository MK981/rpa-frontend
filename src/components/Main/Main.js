import React from 'react';
import { Link } from 'react-router-dom';

import './Main.scss';
//import { Routes, Route, useLocation, useMatch, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Time from '../Time/Time'
import BlockChart from '../BlockChart/BlockChart'
import LineChart from '../LineChart/LineChart';
//import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar';
//import DateAdapter from '@mui/lab/AdapterDateFns';
import DateAdapter from '@mui/lab/AdapterMoment';

//import Date
import { LocalizationProvider } from '@mui/lab';

function Main() {

    const user = useSelector(state => state.currentUser);
    const bots = [
        {}
    ];
    const adminLog = useSelector(state => state.adminLoggedIn);
    const companies = useSelector(state => state.companies);
    const businessBot = useSelector(state => state.businessBot);
    const bp = useSelector(state => state.bp_id)
    const [date, setDate] = React.useState(new Date());
    const [value, setValue] = React.useState(new Date());
    /* <Calendar onChange={setDate} value={date} />*/
   // <p className='blocks__text'>Количество запущенных ботов: 2 <div className='blocks__work'></div></p> 

    function swithBotsBlock() {
        return adminLog ? 
        <div className='blocks__content'>
            <p className='blocks__text'>Компания: РиалВеб </p> 
            <p className='blocks__text'>Количество подключенных ботов: 2 </p> 
        </div>
        : 
        <div className='blocks__content'>
            <p className='blocks__text'>Ваш бизнес-процесс: {bp === 0 ? 'Не выбран' : 'Подбор кандидата'}</p> 
            {/*<p className='blocks__text'>Статус бота: {businessBot.status ? 'В работе' : 'Отключен'} </p>*/}
            <p className='blocks__text'>Количество подключенных ботов: {bp === 0 ? '0' : '2'} </p>
        </div>;
    }

    return (
        <LocalizationProvider dateAdapter={DateAdapter}>
            <>
            <div className='top-line'>
                <h1 className='top-line__greet'>Здравствуйте, {user.name}!</h1>
                <Time />
            </div>
            <section className='blocks'>
                <Link to='stat' className='blocks__link'>
                    <div className='blocks__item'>
                        <h2 className='blocks__title'>Статистика</h2>
                        <LineChart />
                    </div>
                </Link>
                <div className='blocks__item'>
                    <h2 className='blocks__title'>Календарь</h2>
                    <Calendar onChange={setDate} value={date} />
                </div>
                <Link to='scenario' className='blocks__link'>
                    <div className='blocks__item'>
                        <h2 className='blocks__title'>Роботы</h2>
                        {bots.length === 0 ? 
                        <p className='blocks__no-bots'>В данный момент боты не подключены</p> : 
                        swithBotsBlock()}
                    </div>
                </Link>
                <Link to='about' className='blocks__link'>
                    <div className='blocks__item'>
                        <h2 className='blocks__title'>Информация</h2>
                        <div className='blocks__info'>
                            <p className='blocks__text'>RPA First - российская RPA система</p>
                            
                            <div className='blocks__people'>
                                <div className='blocks__people-info'>
                                    <h3 className='blocks__prof'>Разработчик</h3>
                                    <p className='blocks__name'>Куваев Максим</p>
                                </div>
                                <div className='blocks__people-info'>
                                    <h3 className='blocks__prof'>Проектировщик</h3>
                                    <p className='blocks__name'>Завражнов Иван</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </section>
            </>
        </LocalizationProvider>
    );
}

export default Main;