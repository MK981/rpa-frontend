import './WorkStudio.scss';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import HomeIcon from '@mui/icons-material/Home';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import SettingsIcon from '@mui/icons-material/Settings';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import HelpIcon from '@mui/icons-material/Help';
import InfoIcon from '@mui/icons-material/Info';
import PersonIcon from '@mui/icons-material/Person';

import Main from '../Main/Main';
import Stat from '../Stat/Stat';
import Scenario from '../Scenario/Scenario';
import Bot from '../Bot/Bot';
import AdminPanel from '../AdminPanel/AdminPanel';
import Help from '../Help/Help';
import About from '../About/About';
import UserInfo from '../UserInfo/UserInfo';

function WorkStudio() {

    const location = useLocation();
    const adminLoggedIn = useSelector(state => state.adminLoggedIn);
    const user = useSelector(state => state.currentUser);
    //const user = useSelector(state => state.currentUser);

    const mainLinkClass = location.pathname === '/work-studio' ? 'menu__link active' : 'menu__link';
    const statLinkClass = location.pathname === '/work-studio/stat' ? 'menu__link active' : 'menu__link';
    const scenLinkClass = location.pathname === '/work-studio/scenario' ? 'menu__link active' : 'menu__link';
    const botLinkClass = location.pathname === '/work-studio/bot' ? 'menu__link active' : 'menu__link';
    const adminLinkClass = location.pathname === '/work-studio/admin' ? 'menu__link active' : 'menu__link';
    const helpLinkClass = location.pathname === '/work-studio/help' ? 'menu__link active' : 'menu__link';
    const sysLinkClass = location.pathname === '/work-studio/about' ? 'menu__link active' : 'menu__link';


    return (
        <>
            <menu className='menu'>
                {/*adminLoggedIn ? <h1 className='menu__comp'>Администратор</h1> : <h1 className='menu__comp'>Название компании</h1>*/}
                <h1 className='menu__comp'>{adminLoggedIn ? 'Администратор' : user.company}</h1>
                <ul className='menu__list'>
                    <li className='menu__item'><Link to='/work-studio' className={mainLinkClass}><HomeIcon className='menu__icon'/>Главная</Link></li>
                    <li className='menu__item'><Link to='stat' className={statLinkClass}><EqualizerIcon className='menu__icon'/>Статистика</Link></li>
                    <li className='menu__item'><Link to='scenario' className={scenLinkClass}><AppRegistrationIcon className='menu__icon'/>Сценарии</Link></li>
                    <li className='menu__item'><Link to='bot' className={botLinkClass}><SettingsIcon className='menu__icon'/>Настройка бота</Link></li>
                    <li className='menu__item'>{adminLoggedIn ? 
                    <Link to='admin' className={adminLinkClass}><AdminPanelSettingsIcon className='menu__icon'/>Админ-панель</Link> : 
                    <Link to='help' className={helpLinkClass}><HelpIcon className='menu__icon'/>Помощь</Link>}</li>
                    <li className='menu__item'><Link to='about' className={sysLinkClass}><InfoIcon className='menu__icon'/>О системе</Link></li>
                </ul>
            </menu>
            <main className='main'>
                <header className='header'>
                    <h1 className='header__title'>RPA First</h1>
                    <Link to='/hr-process' className='header__link'>Бизнес-процесс</Link>
                    <Link to='lk' className='header__link'><PersonIcon />Личный кабинет</Link>
                </header>
                <section className='studio'>
                    <Routes>
                        <Route path='/' element={<Main />} />
                        <Route path='stat' element={<Stat />} />
                        <Route path='scenario' element={<Scenario />} />
                        <Route path='bot' element={<Bot />} />
                        <Route path='admin' element={<AdminPanel />} />
                        <Route path='help' element={<Help />} />
                        <Route path='about' element={<About />} />
                        <Route path='lk' element={<UserInfo />} />
                    </Routes>
                </section>
            </main>
        </>
    );
}

export default WorkStudio;