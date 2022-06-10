import './Appeal.scss';

function Appeal(props) {

    const status = props.status ? 'Отвечено' : 'Ждет ответа';
    const statusClass = props.status ? 'appeal__green' : 'appeal__red';

    return (
        <div className='appeal'>
            <p className='appeal__top'>Тема: {props.theme}. Статус: <span className={statusClass}>{status}</span></p>
            <p className='appeal__answer'>Ответ: {props.answer}</p>
        </div>
    );
}

export default Appeal;