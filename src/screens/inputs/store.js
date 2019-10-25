import { createState, update, useSub } from 'hook-gstate';

const byId = {};
const ids = (new Array(10000)).fill(0).map(function(d, i) { byId[i] = ''; return i; });

const INITIAL_STATE = {
    ids,
    byId
};

createState('inputs', INITIAL_STATE);

const actions = Object.freeze({
    changeValue: function(id, value) {
        update({ [`inputs.byId.${id}`]: value });
    }
});

/**
 * 
 * @param {{}} keysAndPath
 * @returns {[, actions]}
 */
export default function useInputs(keysAndPath) {
    return [
        useSub('inputs', keysAndPath),
        actions
    ];
}