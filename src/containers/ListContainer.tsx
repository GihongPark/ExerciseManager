import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { addList, removeList, updateTitle } from '../modules/list';
import ListComponent from '../components/List';

function ListContainer () {
    const lists = useSelector((state: RootState) => state.list);
    const dispatch = useDispatch();
    const scroll = useRef<HTMLDivElement>(null);
    const prevListsLength = useRef(0);

    useEffect(() => {
        if(prevListsLength.current > 0 && prevListsLength.current < lists.length){
            scroll.current?.scrollTo(0, scroll.current.scrollHeight)
        }

        prevListsLength.current = lists.length;
    }, [lists])

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
        <div className='list-wrapper' ref={scroll}>
            {mapToList()}
            <button type="button" className='add_list' onClick={onAddList}>Add list</button>
        </div>
    )
}
export default ListContainer;