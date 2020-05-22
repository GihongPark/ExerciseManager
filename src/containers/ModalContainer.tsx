import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { Record, addRecord, removeRecord, updateRecord } from '../modules/list';
import { addExercise, removeExercise, updateExercise } from '../modules/exercise';
import Modal from '../components/modal';

function ModalContainer () {
    const isModal = useSelector((state: RootState) => state.modal);
    const exercises = useSelector((state: RootState) => state.exercise);
    const dispatch = useDispatch();
    
    // TODO: 파라미터 어떻게 받을지 고민
    const onAddRecord = (id: string, record: Record) => {
        dispatch(addRecord(id, record));
    }
    const onRemoveRecord = (id: string, recordId: string) => {
        dispatch(removeRecord(id, recordId))
    };
    const onUpdateRecord = (id: string, record: Record) => {
        dispatch(updateRecord(id, record))
    };

    return (
        <>
        {isModal && 
            <div className='modal-wrapper'>
                <Modal id={'test'} exercises={exercises} onAddRecord={onAddRecord}/>
            </div>
        }
        </>
    )
}
export default ModalContainer;