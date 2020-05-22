import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { openModal } from '../modules/modal';
import { Record } from '../modules/list';
import { useDispatch } from 'react-redux';

type props = {
    id: string;
    record: Record;
}
function RecordComponent ({ id, record }: props) {
    const dispatch = useDispatch();
    const onOpen = () => dispatch(openModal);

    return (
        <li>
            <div className='record-contents'>
                <div>운동 : {record.exercise}</div>
                <div>무게 : {record.weight}</div>
                <div>횟수 : {record.reps}</div>
            </div>
            <div className="record-control">
                <button type='button' onClick={onOpen}><FontAwesomeIcon icon={faEdit} /></button>
            </div>
        </li>
    )
}
export default RecordComponent;