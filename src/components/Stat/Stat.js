import './Stat.scss';
import React from 'react';
//import { Routes, Route, useLocation, useMatch, Link } from 'react-router-dom';

import BlockChart from '../BlockChart/BlockChart';
import PieChart from '../PieChart/PieChart';
import LineChart from '../LineChart/LineChart';

function Stat() {

    const [reports, setReports] = React.useState(false);

    const [vac, setVac] = React.useState([]);

    const candidates = [
        {
            id: 1,
            name: 'Анализ и соcтавление отчетов',
            date: '17.05.22',
            reportLink: '*',
            time: '19:34'
        },
        {
            id: 2,
            name: 'Анализ и соcтавление отчетов',
            date: '16.05.22',
            reportLink: '*',
            time: '12:15'
        },
        {
            id: 3,
            name: 'Анализ и соcтавление отчетов',
            date: '16.05.22',
            reportLink: '*',
            time: '13:45'
        }
    ];

    function changePart() {
        reports ? setReports(false) : setReports(true);
    }

    //3 графика? сверзу 2 снизу один 
    //1: подобрано-принято бар, 2: круговой подобрано сотрудников в отделы, 3: линейный  
    //круговой - отедлы с наибольшим кол-ом сотрудников
    //линейный  - 

    function getVac() {
        fetch('https://api.hh.ru/vacancies', {
            method: 'GET',
            mode: "no-cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                //'User-Agent': 'api-test-agent',
            }
        })
        .then(res => res.json)
        .then(data => console.log(data))
    }

    function getFile() {
        fetch('http://localhost:3001/file/19.05.22.docx'); //здесь в боди передвать id бота из стэта а на серв в req получать и по этому айди брать функ на серв или прям в url id передавать
   }

    return (
        <>
            <div className='stat__up-line'>
                <h1 className='text'>Статистика</h1>
                <button className='stat__switch' onClick={changePart}>{reports ? 'Дашборд' : 'Отчеты роботов'}</button>
            </div>
            {!reports ? 
            <section className='charts'>
                <div className='check'><BlockChart /></div>
                <div className='check'><PieChart /></div>  
                <div className='check'><LineChart /></div>
            </section> : 
            <section className='table'>
                <table className='table__reports'>
                    <thead>
                        <tr className='table__line'><th>Название робота</th><th>Отчет</th><th>Дата</th><th>Время</th></tr>
                    </thead>
                    <tbody>
                        {candidates.map((item) => {
                            return <tr key={item.id}><td>{item.name}</td><td><a href='/Users/maksimkuvaev/Documents/Разработка/rpa-server/files/19.05.22.docx' download>Скачать</a></td>
                            <td>{item.date}</td><td>{item.time}</td></tr>
                        })}
                    </tbody>
                </table>
            </section>}
        </>
    );
}
//<a href={item.reportLink} onClick={getFile}>Ссылка</a>
export default Stat;