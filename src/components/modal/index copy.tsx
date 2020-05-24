import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { closeModal } from '../../modules/modal';
import { Record } from '../../modules/list';
import { Exercise, addExercise } from '../../modules/exercise';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faSave } from '@fortawesome/free-solid-svg-icons';

import './modal.scss';

type props = {
    state: string;
    data: any;
    exercises: Exercise[];
    onAddRecord?: (id: string, record: Record) => void;
    onUpdateRecord?: (id: string, record: Record) => void
    onRemoveRecord?: (id: string, recordId: string) => void
}
function ModalComponent ({state, data, exercises, onAddRecord, onUpdateRecord, onRemoveRecord}: props) {
    const [exercise, setExercise] = useState('');
    const [exerciseList, setExerciseList] = useState(exercises);
    const [weight, setWeight] = useState(0);
    const [reps, setReps] = useState(0);
    const selector = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (state === 'UPDATE_RECORD') {
            const {record} = data;
            setExercise(record.exercise);
            setWeight(record.weight);
            setReps(record.reps);
        }
    },[state,data]);

    const dispatch = useDispatch();

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
        if(state === 'ADD_RECORD' && onAddRecord) {
            onAddRecord(data.id, {id: '', exercise, weight, reps});
        } else if(state === 'UPDATE_RECORD' && onUpdateRecord) {
            onUpdateRecord(data.id, {id: data.record.id, exercise, weight, reps});
        }
        onCancel()
    }
    const onRemove = () => {
        if(!onRemoveRecord) return;
        
        // TODO: 리덕스 미들웨어
        dispatch(onRemoveRecord(data.id, data.record.id));
        onCancel();
    }
    const onExercise =() => {
        
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
        liArr.push(
            <li key='addExercise' className='addExercise' onClick={() => {}}>+운동 추가</li>
        );
        liArr.push(
            <li key='addExerciseInput' className='addExerciseInput'>
                <input type='text' placeholder='부위' size={1}/>
                <input type='text' placeholder='운동 이름' size={1}/>
                <button type='button' onClick={onExercise}><FontAwesomeIcon icon={faSave} /></button>
            </li>
        )
        return liArr;
    };


    return (
        <>
        <div className='input-modal'>
            {state === 'UPDATE_RECORD' &&
                <button type='button' className='remove' onClick={onRemove}><FontAwesomeIcon icon={faTrashAlt} /></button>
            }
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
                        {state === 'ADD_RECORD' &&
                            <button type='submit'>저장</button>
                        }
                        {state === 'UPDATE_RECORD' &&
                            <button type='submit'>수정</button>
                        }
                        <button type='reset' onClick={onCancel}>취소</button>
                    </div>
                </div>
            </form>
        </div>
        </>
    )
}
export default ModalComponent;