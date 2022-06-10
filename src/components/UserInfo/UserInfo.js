import './UserInfo.scss';
//import { Routes, Route, useLocation, useMatch, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function UserInfo() {

    const user = useSelector(state => state.currentUser);
    const adminLog = useSelector(state => state.adminLoggedIn);
    const bp = useSelector(state => state.bp_id)

    const dispatch = useDispatch();

    const bpSel =[
        {
            "bp_id": 1,
            "bp_name": "Подбор кандидата"
        },
        {
            "bp_id": 2,
            "bp_name": "Увольнение сотрудника"
        }
    ];

    function setBp(e) {
        dispatch({type: 'SET_BP', payload: e.target.value});
    }

    return (
        <>
            <h1 className='text'>Личный кабинет</h1>
            <section className='lk'>
                <h2>Ваши данные</h2>
                <div className='lk__info'>
                    <div className='lk__line'>
                        <p className='lk__text'>Имя:</p>
                        <span>{user.name}</span>
                    </div> 
                    <div className='lk__line'>
                        <p className='lk__text'>Фамилия:</p>
                        <span>{user.secondName}</span>
                    </div> 
                    <div className='lk__line'>
                        <p className='lk__text'>Email:</p>
                        <span>{user.email}</span>
                    </div> 
                    <div className='lk__line'>
                        <p className='lk__text'>Компания:</p>
                        <span>{user.company}</span>
                    </div> 
                    {adminLog ? <></> : 
                    <div className='lk__line'>
                        <p className='lk__text'>Отдел:</p>
                        <span>{user.dep}</span>
                    </div> }
                    <select className='lk__sel' onChange={setBp}>
                            <option value=''>Выберете бизнес-процесс</option>
                            {bpSel.map(item => {
                                return <option key={item.bp_id} value={item.bp_id}>{item.bp_name}</option>
                            })}
                        </select>
                    <div className='lk__bttns'>
                        <button className='lk__bttn lk__bttn_change'>Изменить</button>
                        <button className='lk__bttn lk__bttn_exit'>Выйти</button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default UserInfo;