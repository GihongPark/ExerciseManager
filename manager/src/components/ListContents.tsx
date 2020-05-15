import React from 'react';
import { Record } from '../modules/list';
import ListContent from './ListContent';

type ListProps = {
    list: Record[];
    onRemoveRecord: (id: number) => void;
    onUpdateRecord: (record: Record) => void
}
function ListContents ({list, onRemoveRecord, onUpdateRecord}: ListProps) {
    const mapToRecord = () => {
        return list.map(record => (
            <ListContent key={record.id} record={record} onRemoveRecord={onRemoveRecord} onUpdateRecord={onUpdateRecord} />
        ))
    }
    return (
        <ul className='list-contents'>
            {mapToRecord()}
        </ul>
    )
}
export default ListContents;