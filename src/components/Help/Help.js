import './Help.scss';
import React from 'react';
import Appeal from '../Appeal/Appeal';

function Help() {

    const appeals = [
        {
            id: 1,
            userId: 54,
            time: '12:54',
            theme: 'Проблема с пунктом сценария',
            status: true,
            answer: 'Удалите сценарий и создайте заново'
        }
    ];

    const [open, setOpen] = React.useState(false);

    const historyClass = `help__history ${open ? 'open' : ''}`;

    function openHistory () {
        open ? setOpen(false) : setOpen(true);
    }

    return (
        <>
            <h1>Связь с администратором</h1>
            <form className='help'>
                <fieldset className='help__field'>
                    <label className='help__label' htmlFor='name-input'>Имя</label>
                    <input type='text' className='help__input' id='name-input' name='name-input' required />
                    <label className='help__label' htmlFor='comp-input'>Компания</label>
                    <input type='text' className='help__input' id='comp-input' name='comp-input' required />
                </fieldset>
                <label className='help__label' htmlFor='theme-input'>Тема</label>
                <input type='text' className='help__input' id='theme-input' name='theme-input' required />
                <textarea className='help__text' placeholder='Описание проблемы'></textarea>
                <button type='submit' className='help__submit'>Отправить</button>
            </form>
            <h2>История обращений</h2>
            <button className='help__open' onClick={openHistory}>{open ? '-' : '+'}</button>
            <div className={historyClass}>
                <ul className='help_history-list'>
                    {appeals.length === 0 ? <>Пока обращений нет</> : 
                    appeals.map((it) => {
                        return <li key={it.id}><Appeal theme={it.theme} status={it.status} answer={it.answer} /></li>
                    })}
                </ul>
            </div>
        </>
    );
}

export default Help;