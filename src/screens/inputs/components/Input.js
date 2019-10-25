import React, { useCallback, useMemo } from 'react';
import useInputs from '../store';

function Input({ identifier, changeValue }) {
    const keyMap = useMemo(function() {
        return { value: `byId.${identifier}` };
    }, [identifier]);

    const [{ value }] = useInputs(keyMap);

    const onChange = useCallback(function(evt) {
        changeValue(identifier, evt.target.value);
    }, [identifier, changeValue]);

    return (
        <input
            value={value} onChange={onChange}
        />
    )
}

export default Input;