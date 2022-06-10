import React, { useRef } from 'react';
import './ConfigItem.scss';

import CheckIcon from '@mui/icons-material/Check';
import { set } from 'date-fns';

function ConfigItem (props) {

    //const [open, setOpen] = React.useState(true);
    //при клике в бд добавляется новое поле с id алгоритма id его эл ключемым словом и значением

    const confValue = useRef();
    const [checkItem, setCheckItem] = React.useState(0);

    function check() {
        console.log(confValue.current.value);
        confValue.current.value = '';
        setCheckItem(1);
    }

    return (
        <div className='conf-item'>
            <input type='text' className='conf-item__input' ref={confValue} placeholder={props.name} required/>
            <button className='conf-item__add' onClick={check}>Сохранить</button>
            {checkItem === 0 ? <></> : <CheckIcon color='success' />}
        </div>
    );
}

export default ConfigItem;