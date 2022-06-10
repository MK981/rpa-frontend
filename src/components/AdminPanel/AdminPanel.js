import './AdminPanel.scss';

import React from 'react';
//import { Routes, Route, useLocation, useMatch, Link } from 'react-router-dom';

import AppealToAnswer from '../AppealToAnswer/AppealToAnswer';

function AdminPanel() {

    const [reports, setReports] = React.useState(false);

    const appeals = [
        {
            id: 12,
            emp: 'Алексей',
            theme: 'Проблема',
            text: 'Что делать?',
            date: '25.04.22'
        }
    ];

    function changePart() {
        reports ? setReports(false) : setReports(true);
    }

    return (
        <>
            <div className='up-line'>
                <h1>Админ-панель</h1>
                <button className='switch' onClick={changePart}>{reports ? 'Конфигурация' : 'Обращения'}</button>
            </div>
            {!reports ? 
                <section className='admin'>
                    <form className='admim__form'>
                        <h2 className='admin__title'>Добавить компанию</h2>
                        <input type='text' className='admin__input' id='comp-input' name='comp-input' placeholder='Название' required />
                        <button type='submit' className='admin__submit'>Добавить</button>
                        <h2 className='admin__title first'>Добавить отдел</h2>
                        <select className='admin__sel'>
                            <option>Компания</option>
                            <option>РиалВеб</option>
                            <option>Компания 2</option>
                        </select>
                        <input type='text' className='admin__input' id='comp-input' name='comp-input' placeholder='Название' required />
                        <button type='submit' className='admin__submit'>Добавить</button>
                    </form>
                    <form className='admim__form'>
                        <h2>Добавить сотрудника</h2>
                        <div>
                            <input type='text' className='admin__group-input' id='comp-input' name='comp-input' placeholder='Имя' required />
                            <input type='text' className='admin__group-input' id='comp-input' name='comp-input' placeholder='Фамилия' required />
                        </div>
                        <div>
                            <input type='email' className='admin__group-input' id='comp-input' name='comp-input' placeholder='Email' required />
                            <input type='password' className='admin__group-input' id='comp-input' name='comp-input' placeholder='Пароль' required />
                        </div>
                        <select className='admin__sel'>
                            <option>Компания</option>
                            <option>РиалВеб</option>
                            <option>Компания 2</option>
                        </select>
                        <select className='admin__sel'>
                            <option>Отдел</option>
                            <option>Отдел 1</option>
                            <option>Отдел 2</option>
                            <option>Отдел 3</option>
                        </select>
                        <button type='submit' className='admin__submit'>Добавить</button>
                    </form>
                    <form className='admim__form'>
                        <h2>Добавить бизнес-процесс</h2>
                        <select className='admin__sel'>
                            <option>Компания</option>
                            <option>РиалВеб</option>
                            <option>Компания 2</option>
                        </select>
                        <input type='text' className='admin__input' id='comp-input' name='comp-input' placeholder='Название' required />
                        <button type='submit' className='admin__submit'>Добавить</button>
                    </form>
                    <form className='admim__form'>
                        <h2>Привязать сотрудника к БП</h2>
                        <select className='admin__sel'>
                            <option>Бизнес-процесс</option>
                            <option>РиалВеб</option>
                            <option>Компания 2</option>
                        </select>
                        <select className='admin__sel'>
                            <option>Сотрудник</option>
                            <option>РиалВеб</option>
                            <option>Компания 2</option>
                        </select>
                        <button type='submit' className='admin__submit'>Добавить</button>
                    </form>
                    <form className='admim__form'>
                        <h2>Добавить функцию для БП</h2>
                        <select className='admin__sel'>
                            <option>Бизнес-процесс</option>
                            <option>БП 1</option>
                            <option>БП 2</option>
                        </select>
                        <input type='text' className='admin__input' id='comp-input' name='comp-input' placeholder='Название' required />
                        <input type='text' className='admin__input' id='comp-input' name='comp-input' placeholder='Кодовое слово' required />
                        <button type='submit' className='admin__submit'>Добавить</button>
                    </form>
                    <form className='admim__form'>
                        <h2>Добавить конфиг для функции</h2>
                        <select className='admin__sel'>
                            <option>Функция</option>
                            <option>Функция 1</option>
                            <option>Функция 2</option>
                        </select>
                        <input type='text' className='admin__input' id='comp-input' name='comp-input' placeholder='Название' required />
                        <input type='text' className='admin__input' id='comp-input' name='comp-input' placeholder='Тип' required />
                        <button type='submit' className='admin__submit'>Добавить</button>
                    </form> 
                    <form className='admim__form'>
                        <h2>Добавить бота</h2>
                        <select className='admin__sel'>
                            <option>Бизнес-процесс</option>
                            <option>БП 1</option>
                            <option>БП 2</option>
                        </select>
                        <input type='text' className='admin__input' id='comp-input' name='comp-input' placeholder='Название' required />
                        <button type='submit' className='admin__submit'>Добавить</button>
                    </form>
                </section>
            : 
            <section>
                {
                    appeals.length === 0 ? <>Нет неотвеченных обращений</> : 
                    appeals.map(it => {
                        return <AppealToAnswer key={it.id} emp={it.emp} theme={it.theme} text={it.text} date={it.date} />
                    })
                }

            </section>}
            
        </>
    );
}

export default AdminPanel;