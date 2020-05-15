import React from 'react';
import { Record } from '../modules/list';
import ListContents from './ListContents';
import ListInput from './ListInput';

type ListProps = {
    list: Record[];
    onAddRecord: (record: Record) => void;
    onRemoveRecord: (id: number) => void;
    onUpdateRecord: (record: Record) => void
}
function List ({list, onAddRecord, onRemoveRecord, onUpdateRecord}: ListProps) {

    return (
        <div className='list-wrapper'>
            <div className='list-header'></div>
            <ListContents list={list} onRemoveRecord={onRemoveRecord} onUpdateRecord={onUpdateRecord} />
            <ListInput onAddRecord={onAddRecord} />
        </div>
    )
}
export default List;