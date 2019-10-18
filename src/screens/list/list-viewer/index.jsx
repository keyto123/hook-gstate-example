import React, { useCallback } from 'react';
import useList from '../state';

function ListViewer({itemID = '', index = -1}) {
    const [state, {changeListItem}] = useList([['item', `list.byId.${itemID}`]]);

    console.log('ListViewer test state:', state, itemID, index);

    const handleChangeListItem = useCallback(function(evt) {
        const value = evt.target.value;
        changeListItem(itemID, value);
    }, [changeListItem, itemID]);

    return (
        <div>
            <input value={state.item} onChange={handleChangeListItem} />
        </div>
    );
}

export default React.memo(ListViewer);