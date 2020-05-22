import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { closeModal } from '../../modules/modal';
import { Record } from '../../modules/list';
import { Exercise } from '../../modules/exercise';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import './modal.scss';

type props = {
    id: string;
    exercises: Exercise[];
    onAddRecord: (id: string, record: Record) => void;
}
function ModalComponent ({id, exercises, onAddRecord}: props) {
    const [exercise, setExercise] = useState('');
    const [exerciseList, setExerciseList] = useState(exercises);
    const [weight, setWeight] = useState(0);
    const [reps, setReps] = useState(0);
    const selector = useRef<HTMLDivElement>(null);

    const dispatch = useDispatch();
    
    useEffect(() => {

    },[]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch(e.currentTarget.dataset.id) {
            case 'exercise':
                setExerciseList(exercises.filter(exercise => exercise.name.match(e.currentTarget.value)));
                return setExercise(e.currentTarget.value);
            case 'weight':
                return setWeight(Number(e.currentTarget.value.replace(/[^0-9]/g, '')));
            case 'reps':
                return setReps(Number(e.currentTarget.value.replace(/[^0-9]/g, '')));
        }
    }
    const onFocus = (e: React.FocusEvent<HTMLInputElement>) => selector.current?.classList.add('show');
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(exercise==='' || weight<=0 || reps<= 0) return;
        onAddRecord(id, {id: '', exercise, weight, reps});
        onCancel()
    }
    const onCancel = () => {
        setExercise('');
        setWeight(0);
        setReps(0);
        dispatch(closeModal());
    }

    const getExerciseList = (section: string) => {
        setExerciseList(exercises.filter(exercise => {
            if(section === 'all') return true;
            else return exercise.section === section;
        }));
    }
    const mapToExercises = () => {
        let liArr = exerciseList.map(exercise => (
            <li key={exercise.id} onClick={() => {
                setExercise(exercise.name);
                selector.current?.classList.remove('show');
            }}>{exercise.name}</li>
        ));
        liArr.push(<li key='addExercise' onClick={() => {}}>+운동 추가</li> );
        return liArr;
    };


    return (
        <>
        <div className='input-modal'>
            <form onSubmit={onSubmit}>
                <div className='input-contents'>
                    <div className='exercise-wrapper'>
                        <label>운동</label>
                        <input type='text' data-id='exercise'
                            onFocus={onFocus}
                            onChange={onChange}
                            value={exercise}
                            size={1}
                        />
                        <div className='exercise-selector' ref={selector}>
                            <div className='section'>
                                <button type='button' onClick={() => getExerciseList('all')}>ALL</button>
                                <button type='button' onClick={() => getExerciseList('leg')}>하체</button>
                                <button type='button' onClick={() => getExerciseList('chest')}>가슴</button>
                                <button type='button' onClick={() => getExerciseList('back')}>등</button>
                                <button type='button' onClick={() => getExerciseList('shoulder')}>어깨</button>
                                <button type='button' onClick={() => getExerciseList('arm')}>팔</button>
                                <button type='button' onClick={() => getExerciseList('abs')}>복근</button>
                                <button type='button' className='right' onClick={() => selector.current?.classList.remove('show')}>취소</button>
                            </div>
                            <ul>
                                {mapToExercises()}
                            </ul>
                        </div>
                    </div>
                    <div className='record-wrapper'>
                        <label>무게</label>
                        <label>횟수</label>
                        <input type='text' data-id='weight'
                            onChange={onChange}
                            value={weight}
                            size={1}
                            />
                        <input type='text' data-id='reps'
                            onChange={onChange}
                            value={reps}
                            size={1}
                        />
                    </div>
                    <div className='control-wrapper'>
                        <button type='submit'>저장</button>
                        <button type='reset' onClick={onCancel}>취소</button>
                    </div>
                </div>
            </form>
        </div>
        </>
    )
}
export default ModalComponent;