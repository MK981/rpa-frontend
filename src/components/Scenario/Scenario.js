import './Scenario.scss';

import React from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import FuncItem from '../FuncItem/FuncItem';
import ScenItem from '../ScenItem/ScenItem';

import { useDispatch, useSelector } from 'react-redux';

function Scenario() {

    const [bot, setBot] = React.useState(0);

    const dispatch = useDispatch();
    const alg = useSelector(state => state.scenario);
    const bp = useSelector(state => state.bp_id);

    const arrFunc = [
        {
            id: 1,
            name: 'Перейти по ссылке',
            keyWord: ''
        },
        {
            id: 2,
            name: 'Собрать данные',
            keyWord: 'file'
        },
        { 
            id: 3,
            name: 'Открыть бизнес-процесс',
            keyWord: ''
        },
        { 
            id: 4,
            name: 'Заполнить данные кандидата',
            keyWord: ''
        },
        { 
            id: 5,
            name: 'Отправить форму данных кандидата',
            keyWord: ''
        },
        { 
            id: 6,
            name: 'Открыть результаты теста',
            keyWord: ''
        },
        { 
            id: 7,
            name: 'Собрать результаты теста',
            keyWord: ''
        },
        { 
            id: 8,
            name: 'Открыть форму результатов теста',
            keyWord: ''
        },
        { 
            id: 9,
            name: 'Заполнить данные результатов',
            keyWord: ''
        },
        { 
            id: 10,
            name: 'Собрать результаты теста',
            keyWord: ''
        },
        { 
            id: 11,
            name: 'Открыть результаты кандидатов',
            keyWord: ''
        },
        { 
            id: 12,
            name: 'Сравнить показатели и составить отчет',
            keyWord: ''
        },
        { 
            id: 13,
            name: 'Сформировать документ для запроса в ПФ',
            keyWord: ''
        }
    ];
   // const algorithm = [];

   function changeAlg (id, name) {
       // setAlg([...alg, {id: id, action: name}])
       const item = {
            id: id, 
            action: name,
            funcId: id
       }
        dispatch({type: 'ADD_SCENITEM', payload: item});
   }

   function deleteScenItem(id) {
        dispatch({type: 'DELETE_SCENITEM', payload: id})
   }

   function clearAlg() {
       dispatch({type: 'CLEAR_ALG'});
   }

   function startBot() {
        fetch('http://localhost:3001/bot');
   }

   function botChange(e) {
        //console.log(e.target.value);
        //в селекте отрисовываются доступные боты для каждого бп где value это его айди
        //при выборе селекта в этой функции делается запрос к бд функций исходя из выброанного бота, найденные функции записываются
        //в редакс стейт массив из которого уже отрисовываются в сценарии
        setBot(e.target.value);
   }

   //для начала работы выберете бизнес-процесс

    return (
        <>
            {bp === 0 ? <>
                <section className='scenario'>
                    <h1 className='scenario__mess'>Вы подключены к нескольким процессам. Для начала работы выберете один в ЛК.</h1>
                </section>
            </> : 
                <>
                    <h1>Сценарий робота</h1>
                    <section className='scenario'>
                        <div className='scenario__func'>
                            <h2 className='scenario__title'>Доступные функции</h2>
                            <h3 className='scenario__part'>Основные</h3>
                            <FuncItem type='start' name='Начало' />
                            <FuncItem type='end' name='Конец' />
                            <h3 className='scenario__part'>Бизнес-процесс</h3>
                            <ul className='scenario__list'>
                                {arrFunc.map((it) => {
                                    return <li key={it.id}><FuncItem name={it.name} func={it} changeAlg={changeAlg} /></li>
                                })}
                            </ul>
                        </div> 
                        <div className='scenario__work'>
                            <div className='scenario__up'>
                                <h2 className='scenario__title scenario__title_black'>Рабочая зона</h2>
                                <select className='scenario__select' onChange={botChange}>
                                    <option>Выберете бота</option>
                                    <option value={1}>Сбор данных</option>
                                    <option value={2}>Анализ и составление отчетов</option>
                                </select>
                                <div>
                                    <button className='scenario__clear' onClick={clearAlg}>Очистить сценарий</button>
                                </div>
                            </div>
                            {
                                bot === 0 ? <h2 className='scenario__title scenario__title_black'>Бот не выбран</h2> :
                                <>
                                    {alg.length === 0 ? <h2 className='scenario__title scenario__title_black'>Элементы сценария отсутствуют</h2> : 
                                    <div className='scenario__start' onClick={startBot}>
                                        <div className='scenario__start-icon'><PlayArrowIcon fontSize='large'/></div></div>}
                                    {alg.length === 0 ? <></> : alg.map((it) => {
                                        return <ScenItem key={it.id} action={it.action} id={it.id} delete={deleteScenItem} />
                                    })}
                                    {alg.length === 0 ? <></> : 
                                    <div className='scenario__end'>
                                        <ArrowDownwardIcon color='action'/>
                                        <div className='scenario__red'></div>
                                    </div>}
                                </>
                            }
                        </div>
                    </section>
                </>
            }
        </>
    );
}

export default Scenario;