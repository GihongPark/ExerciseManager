import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { openModal } from '../modules/modal';
import { Record } from '../modules/list';
import { useDispatch } from 'react-redux';
import RecordComponent from '../components/Record';

type props = {
    id: string;
    records: Record[];
}
function RecordContainer ({id, records}:props) {
    const dispatch = useDispatch();

    const onOpen = () => {
        dispatch(openModal());
    };
    const mapToRecord = () => {
        if(records.length === 0) return <li className='isEmpty'>운동 기록이 없습니다.</li>;

        return records.map(record => (
            <RecordComponent key={record.id} id={id} record={record} />
        ))
    };

    return (
        <>
            <ul className='list-contents'>{mapToRecord()}</ul>
            <button type='button' className='list-input' onClick={onOpen}><FontAwesomeIcon icon={faPlus} /> Add Record</button>
        </>
    )
}
export default RecordContainer;