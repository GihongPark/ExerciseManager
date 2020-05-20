import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faTimes } from '@fortawesome/free-solid-svg-icons';
import {List} from '../modules/list';
import RecordContainer from '../containers/RecordContainer';
import './list.scss'

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
                <div className='list-title'>
                    <input type='text' onChange={onTitle} value={title} placeholder='title' size={1} maxLength={100} />
                    <button type='button' onClick={onTitleSave}><FontAwesomeIcon icon={faSave} /></button>
                </div>
                <button type='button' className='list-del' onClick={onListDelete}><FontAwesomeIcon icon={faTimes} /></button>
            </div>
            <RecordContainer id={list.id} records={list.records} />
        </div>
    )
}
export default ListComponent;