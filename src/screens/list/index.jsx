import React from 'react';
import ListViewer from './list-viewer';
import ListInput from './list-input';
import useList from './state';
import useTeste from './state2';
import { getState } from 'hook-gstate';

function List(props) {
    const [state] = useList([['items', 'list.ids']]);
    const [state2, {changeRVal}] = useTeste();
    console.log('list state', JSON.parse(JSON.stringify(state)));
    console.log('list state2', JSON.parse(JSON.stringify(state2)));
    console.log('global state:', getState());
    return (
        <div>
            <div onClick={changeRVal} >rVal: {state2.rVal}</div>
            <ListInput />
            {
                state.items.map((item, index) => <ListViewer key={item} itemID={item} index={index} />)
            }
        </div>
    );
}

export default List;