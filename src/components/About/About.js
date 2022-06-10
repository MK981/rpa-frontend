import './About.scss';
//import { Routes, Route, useLocation, useMatch, Link } from 'react-router-dom';

function About() {

    return (
        <>
            <h1>О системе</h1>
            <p className='about__text'>RPA First - российская RPA система, предназначенная для быстрой роботизации процессов компаний, 
                путем создания и конфигурирования сценариев внедренных заранее роботов.</p>
            <p className='about__text'>Система позволяет отслеживать как результаты работы процесса, так и компании в целом.</p>
            <div className='about__text'>
                Разработчик и проектировщик: студенты группы ИНМО-01-20 Куваев М.Ю. и Завражнов И.С.
            </div>
            <p className='about__text'>В случе, если возникли проблемы или вопросы перейдите в раздел "Помощь" для свзяи с администратором системы.</p>
            <p className='about__text'>Для более подробного изучения функционала предлагаем ознакомится с видео-инструкцией</p>
            <p className='about__text'>Тут видосик</p>
        </>
    );
}

export default About;