import React, { useCallback } from 'react';

import useList from '../state';

function ListInput() {
    const [{list}, actions] = useList([['list', 'list.ids']]);
    const { addToList, removeFromList } = actions;

    const handleAdd = useCallback(function() {
        addToList(list.length, "0");
    }, [addToList, list.length]);

    const handleRemove = useCallback(function() {
        removeFromList(list.length - 1);
    }, [ removeFromList, list.length])
    return (
        <div>
            <button onClick={handleAdd} >add</button>
            <button onClick={handleRemove} >remove</button>
        </div>
    );
}

export default React.memo(ListInput);