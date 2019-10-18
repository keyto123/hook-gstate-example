// State creating
import { createState, useSub, update } from 'hook-gstate';

// Passing a entry 'random' and it's initial value
createState('random', {
    value: Math.random()
});

// Here, update can be used to change multiple values with the style [path, value]
const actions = {
    changeValue: function(newValue) {
        update([
            ['random.value', newValue]
        ]);
    }
}

// keysAndPath represents the state definition the component will like to receive
// an example is [ ['myRandom', 'random.value'] ]
export default function useRandom(keysAndPath) {
    return [
        useSub('random', keysAndPath),
        actions
    ]
}