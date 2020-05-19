import React from 'react';
import { Record, addRecord, removeRecord, updateRecord } from '../modules/list';
import { useDispatch } from 'react-redux';
import RecordComponent from '../components/Record';
import RecordInput from '../components/RecordInput';

type props = {
    id: string;
    records: Record[];
}
function RecordContainer ({id, records}:props) {
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

    const mapToRecord = () => {
        if(records.length === 0) return <li>운동 기록이 없습니다.</li>;

        return records.map(record => (
            <RecordComponent key={record.id} id={id} record={record} onRemoveRecord={onRemoveRecord} onUpdateRecord={onUpdateRecord} />
        ))
    };

    return (
        <>
            <ul>{mapToRecord()}</ul>
            <RecordInput id={id} onAddRecord={onAddRecord} />
        </>
    )
}
export default RecordContainer;