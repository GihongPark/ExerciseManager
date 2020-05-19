import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import {List} from '../modules/list';
import RecordContainer from '../containers/RecordContainer';

type props = {
    list: List;
    onRemoveList: (id: string) => void
    onUpdateTitle: (id: string, title: string) => void
}
function ListComponent ({list, onRemoveList, onUpdateTitle}: props) {
    const [title, setTitle] = useState(list.title);

    const onTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.currentTarget.value === '') {}
        setTitle(e.currentTarget.value);
    }
    const onTitleSave = () => onUpdateTitle(list.id, title);
    const onListDelete = () => onRemoveList(list.id);


    return (
        <div className='list'>
            <div className='list-header'>
                <input type='text' onChange={onTitle} value={title} placeholder='title'></input>
                <button type='button' onClick={onTitleSave}><FontAwesomeIcon icon={faPlus} /></button>
                <button type='button' onClick={onListDelete}><FontAwesomeIcon icon={faTrashAlt} /></button>
            </div>
            <div className='list-contents'>
                <RecordContainer id={list.id} records={list.records} />
            </div>
        </div>
    )
}
export default ListComponent;