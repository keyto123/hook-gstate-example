import React, { useCallback } from 'react';
import useRandom from './useRandom';

function MyComponent(props) {
    const [{myRandom}, {changeValue}] = useRandom([ ['myRandom', 'value'] ]);

    const handleChange = useCallback(function() { changeValue(Math.random()); }, [changeValue]);

    return (
        <div>
            My random value: {myRandom}
            <button onClick={handleChange}>Change random value</button>
        </div>
    );
}

export default MyComponent;