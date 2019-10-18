import { useSub, createState, update } from 'hook-gstate';
import { getFromPath } from 'hook-gstate';

function createList() {
    const obj = {
        ids: (new Array(25).fill(0).map((v,i) => i)),
        byId: {}
    }
    obj.ids.forEach(id => { obj.byId[id] = 0 });
    return obj;
}

createState('listState', {
    list: createList()
});

async function changeListSideEffect(list) {
    console.log('side effect with new list:', list);
}

const actions = Object.freeze({
    addToList: function(id, value) {
        const basePath = 'listState.list';
        const oldList = getFromPath(`${basePath}.ids`);
        const newList = [...oldList];
        newList.push(id);

        const byId = getFromPath(`${basePath}.byId`);
        const newById = {...byId, [id]: value};

        update([
            [`${basePath}.ids`, newList],
            [`${basePath}.byId`, newById]
        ]);
    },
    removeFromList: function(id) {
        const basePath = 'listState.list';
        const list = getFromPath(`${basePath}.ids`);
        const byId = getFromPath(`${basePath}.byId`);

        const newList = list.filter(function(_id) { return _id !== id });
        const newById = {...byId};
        delete newById[id];

        update([
            [`${basePath}.ids`, newList],
            [`${basePath}.byId`, newById]
        ]);
    },
    changeList: function(list) {
        update([['listState.list.ids', list]]);
        changeListSideEffect(list) },
    changeListItem: function(id, value) { 
        update([[`listState.list.byId.${id}`, value]]);
    }
});

export default function useList(keysAndPath) {
    return [
        useSub('listState', keysAndPath),
        actions
    ];
}
