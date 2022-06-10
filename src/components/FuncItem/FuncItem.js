import './FuncItem.scss'

import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

function FuncItem (props) {

    const itemClass = `func-item ${props.type ? props.type : ''}`;

    function add() {
        props.changeAlg(props.func.id, props.func.name);
    }

    return (
        <div className={itemClass}>
            <span className='func-item__text'>{props.name}</span>
            <div className='func-item__add' onClick={add}>
                <ArrowCircleRightIcon color='success' fontSize='large' /></div>
        </div>
    );
}

export default FuncItem;