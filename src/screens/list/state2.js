import { useSub, createState, update } from "hook-gstate";

createState('teste', { rVal: Math.random() });

const actions = Object.freeze({
    changeRVal: function() {
        update([['teste.rVal', Math.random()]]);
    }
});

export default function useTeste() {
    return [
        useSub('teste', [['rVal', 'rVal']]),
        actions
    ]
}