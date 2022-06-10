import React from 'react';
import './ScenItem.scss';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function ScenItem (props) {

    function deleteItem() {
        props.delete(props.id);
    }

    return (
        <div className='scen-item'>
            <ArrowDownwardIcon color='action'/>
            <div className='scen-item__main'>
                <button className='scen-item__del' onClick={deleteItem}>Удалить</button>
                <span>{props.action}</span>
            </div>
        </div>
    );
}

export default ScenItem;