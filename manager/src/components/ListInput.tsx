import React, { useState } from 'react';
import { Record } from '../modules/list';

type ListProps = {
    onAddRecord: (record: Record) => void;
}
function ListInput ({onAddRecord}: ListProps) {
    const [exercise, setExercise] = useState('');
    const [weight, setWeight] = useState(0);
    const [reps, setReps] = useState(0);

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
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(exercise==='' || weight<=0 || reps<= 0) return;
        onAddRecord({id:0, exercise, weight, reps});
        onCancel()
    }
    const onCancel = () => {
        setExercise('');
        setWeight(0);
        setReps(0);
    }

    return (
        <div className='list-input'>
            <form onSubmit={onSubmit}>
                <div className='input-contents'>
                    <label>Exercise</label>
                    <input type='text' data-id='exercise'
                        onChange={onChange}
                        value={exercise}
                    />
                    <label>Weight</label>
                    <input type='number' data-id='weight'
                        onChange={onChange}
                        value={weight}
                    />
                    <label>Reps</label>
                    <input type='number' data-id='reps'
                        onChange={onChange}
                        value={reps}
                    />
                </div>
                <div className='input-controls'>
                    <button type='submit'>Add</button>
                    <button type='reset' onClick={onCancel}>Cancel</button>
                </div>
            </form>
        </div>
    )
}
export default ListInput;