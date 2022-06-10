import './Bot.scss';
//import { Routes, Route, useLocation, useMatch, Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import ConfigItem from '../ConfigItem/ConfigItem';

function Bot() {

    //прилетел из бд
    const config = [
        {
            id: 1,
            funcId: 1,
            confName: 'Ссылка на резюме'
        },
        {
            id: 2,
            funcId: 6,
            confName: 'Ссылка на тест'
        },
    ];

    const dispatch = useDispatch();
    const alg = useSelector(state => state.scenario);
    //console.log(alg)

    return (
        <>
            <h1>Настройка робота</h1>
            {alg.length === 0 ? <p>В сценарии пока нет ни одного дейтсвия</p> :
            config.map((item) => {
                const checkEl = alg.some(el => {
                    return el.funcId === item.funcId;
                })
                return checkEl ? <ConfigItem key={item.id} name={item.confName} /> : <></>
            })}
        </>
    );
}

export default Bot;