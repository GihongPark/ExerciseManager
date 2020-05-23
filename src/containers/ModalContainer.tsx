import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { Record, addRecord, removeRecord, updateRecord } from '../modules/list';
import Modal from '../components/modal';

function ModalContainer () {
    const modalState = useSelector((state: RootState) => state.modal);
    const exercises = useSelector((state: RootState) => state.exercise);
    const dispatch = useDispatch();
    
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
        {modalState.state !== 'CLOSE_MODAL' &&
            <div className='modal-wrapper'>
                {modalState.state === 'ADD_RECORD' && modalState.data &&
                    <Modal state={modalState.state} 
                        data={modalState.data} 
                        exercises={exercises} 
                        onAddRecord={onAddRecord}
                    />
                }
                {modalState.state === 'UPDATE_RECORD' && modalState.data &&
                    <Modal state={modalState.state} 
                        data={modalState.data} 
                        exercises={exercises} 
                        onUpdateRecord={onUpdateRecord}
                        onRemoveRecord={onRemoveRecord}
                    />
                }
            </div>
        }
        </>
    )
}
export default ModalContainer;