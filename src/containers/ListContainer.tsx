import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { addList, removeList, updateTitle } from '../modules/list';
import ListComponent from '../components/List';

function ListContainer () {
    const lists = useSelector((state: RootState) => state.list);
    const dispatch = useDispatch();

    const onAddList = () => {
        dispatch(addList())
    };
    const onRemoveList = (id: string) => {
        dispatch(removeList(id))
    };
    const onUpdateTitle = (id: string, title: string) => {
        dispatch(updateTitle(id, title))
    };

    const mapToList = () => lists.map(list => (
        <ListComponent key={list.id} 
            list={list} 
            onRemoveList={onRemoveList} 
            onUpdateTitle={onUpdateTitle}
        />
    ));
    return (
        <>
            {mapToList()}
            <button type="button" className='add_list' onClick={onAddList}>Add list</button>
        </>
    )
}
export default ListContainer;