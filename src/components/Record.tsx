import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Record } from '../modules/list';

type props = {
    id: string;
    record: Record;
    onRemoveRecord: (id: string, recordId: string) => void;
    onUpdateRecord: (id: string, record: Record) => void;
}
function RecordComponent ({ id, record, onRemoveRecord, onUpdateRecord }: props) {
    const [exercise, setExercise] = useState(record.exercise);
    const [weight, setWeight] = useState(record.weight);
    const [reps, setReps] = useState(record.reps);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch(e.currentTarget.dataset.id) {
            case 'exercise':
                return setExercise(e.currentTarget.value);
            case 'weight':
                return setWeight(Number(e.currentTarget.value));
            case 'reps':
                return setReps(Number(e.currentTarget.value));
        }
    }
    const onModify = () => {
        if(exercise==='' || weight<=0 || reps<= 0) return;
        onUpdateRecord(id, {id:record.id, exercise, weight, reps});
    }
    const onRemove = () => {
        onRemoveRecord(id, record.id);
    }

    return (
        <li>
            <div className='record-contents'>
                <div>운동 : {exercise}</div>
                <div>무게 : {weight}</div>
                <div>횟수 : {reps}</div>
            </div>
            <div className="record-control">
                <button type='button' onClick={onModify}><FontAwesomeIcon icon={faEdit} /></button>
                {/* <button type='button' onClick={onRemove}>Remove</button> */}
            </div>
        </li>
    )
}
export default RecordComponent;