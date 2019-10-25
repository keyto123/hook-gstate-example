import React, { useCallback, useMemo } from 'react';
import useLogin from '../store';

function LoginInput({ placeholder, identifier, action }) {
    const kp = useMemo(function() {
        return { value: identifier };
    }, [identifier]);

    const [{value} ] = useLogin(kp);

    console.log('render', identifier);

    const update = useCallback(function(evt) {
        action(evt.target.value);
    }, [action]);

    return (
        <input value={value} placeholder={placeholder} onChange={update} />
    );
}

export default LoginInput;