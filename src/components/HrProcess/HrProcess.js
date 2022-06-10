import './HrProcess.scss';

import CloseIcon from '@mui/icons-material/Close';
import React from 'react';

function HrProcess() {

    const [bot, setBot] = React.useState(false);
    const [resultForm, setResultForm] = React.useState(false);
    const [results, setResults] = React.useState(false);
    
    const candidates = [
        {
            id: 1,
            fullName: 'Николай Петров',
            age: 24,
            position: 'Разработчик',
            salary: 130000,
            experiens: '4 года',
            education: 'Высшее образование',
            gpa: 15.4,
            correct: 12
        },
        {
            id: 2,
            fullName: 'Олег Ходырев',
            age: 31,
            position: 'Системный-администратор',
            salary: 94000,
            experiens: '6 лет',
            education: 'Высшее образование',
            gpa: 12,
            correct: 8
        },
        {
            id: 1,
            fullName: 'Мария Васильева',
            age: 27,
            position: 'Менеджер по продажам',
            salary: 110000,
            experiens: '2 года',
            education: 'Высшее образование',
            gpa: 18,
            correct: 15
        }
    ];


    const interfaceClass = bot ? 'bot__interface bot__active' : 'bot__interface';
    const buttonClass = bot ? 'bot__show bot__show_active' : 'bot__show';

    function clickBot() {
        bot ? setBot(false) : setBot(true);
        //botButton ? setBotButton(false) : setBotButton(true);
    }

    function changeForm() {
        resultForm ? setResultForm(false) : setResultForm(true);
    }

    function openResults() {
        results ? setResults(false) : setResults(true);
    }

    //о кандидате - фио, возраст, должность, зарплата, опыт, кол-во компаний, образование
    //рез теста - имя фамилия, тел, снилс, количество правильных ответов, средний балл  
    
    return (
        <section className='hr'>
            <h1 className='hr__title'>Процесс подбора кандидата</h1>

            <div className='hr__button-group'>
                <button className='hr__switch' onClick={changeForm}>Заполнение данных из резюме</button>
                <button className='hr__switch' onClick={changeForm}>Заполнение результатов теста</button>
            </div>

            {!resultForm ? <form className='hr__form'>
                <input type='text' className='hr__input' id='age-input' name='age-input' placeholder='Возраст' required />
                <input type='text' className='hr__input' id='position-input' name='position-input' placeholder='Должность' required />
                <input type='text' className='hr__input' id='sel-input' name='sel-input' placeholder='Зарплата' required />
                <input type='text' className='hr__input' id='exp-input' name='exp-input' placeholder='Опыт' required />
                <input type='text' className='hr__input' id='places-input' name='places-input' placeholder='Кол-во мест работы' required />
                <input type='text' className='hr__input' id='ed-input' name='ed-input' placeholder='Образование' required />
                <button className='hr__submit'>Отправить</button>
            </form> : 
            <form className='hr__form'>
                <input type='text' className='hr__input' id='age-input' name='age-input' placeholder='ФИО' required />
                <input type='text' className='hr__input' id='position-input' name='position-input' placeholder='Телефон' required />
                <input type='text' className='hr__input' id='sel-input' name='sel-input' placeholder='Снилс' required />
                <input type='text' className='hr__input' id='exp-input' name='exp-input' placeholder='Кол-во правильных ответов' required />
                <input type='text' className='hr__input' id='places-input' name='places-input' placeholder='Средний балл' required />
                <button className='hr__submit'>Отправить</button>
            </form> }

            <button className='hr__switch' onClick={openResults}>Показать результаты всех кандидатов</button>
            {results ? <div>
                <table className='hr__table'>
                    <thead>
                        <tr><th>ФИО</th><th>Возраст</th><th>Должность</th><th>Зарплата</th>
                        <th>Опыт</th><th>Образование</th><th>Средний балл</th><th>Кол-во правильных ответов</th></tr>
                    </thead>
                    <tbody>
                        {candidates.map((item) => {
                            return <tr key={item.id}><td>{item.fullName}</td><td>{item.age}</td>
                            <td>{item.position}</td><td>{item.salary}</td><td>{item.experiens}</td><td>{item.education}</td>
                            <td>{item.gpa}</td><td>{item.correct}</td></tr>
                        })}
                    </tbody>
                </table>
            </div> : <></>}


            <div className='bot'>
                <div className={interfaceClass}>
                        <p>я бот</p>
                </div>
                <button className={buttonClass} onClick={clickBot}><CloseIcon /></button>
            </div>
        </section>
    );
}

export default HrProcess;