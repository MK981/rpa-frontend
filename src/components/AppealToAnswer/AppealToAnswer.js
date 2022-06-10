import './AppealToAnswer.scss'

function AppealToAnswer (props) {

    return (
        <div className='answ-appeal'>
            <h2>От: {props.emp}</h2>
            <p>Тема: {props.theme}</p>
            {props.text}
            <form className='answ-appeal__form'>
                <textarea className='answ-appeal__text' placeholder='Дать ответ'></textarea>
                <button type='submit' className='answ-appeal__submit'>Ответить</button>
            </form>
        </div>
    );
}

export default AppealToAnswer;