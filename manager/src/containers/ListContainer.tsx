import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { addRecord, removeRecord, updateRecord, Record } from '../modules/list';
import List from '../components/List';

function ListContainer () {
    const list = useSelector((state: RootState) => state.list);
    const dispatch = useDispatch();

    const onAddRecord = (record: Record) => {
        dispatch(addRecord(record));
    }
    const onRemoveRecord = (id: number) => {
        dispatch(removeRecord(id));
    }
    const onUpdateRecord = (record: Record) => {
        dispatch(updateRecord(record));
    }

    return (
        <List list={list} onAddRecord={onAddRecord} onRemoveRecord={onRemoveRecord} onUpdateRecord={onUpdateRecord} />
    )
}
export default ListContainer;