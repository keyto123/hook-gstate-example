import React from 'react';
import useInputs from './store';
import Input from './components/Input';

function Inputs() {
    const [{ list }, actions] = useInputs({ list: 'ids' });
    return (
        <main className='list-main' >
            {
                list.map(function(item, index) {
                    return (
                        <Input
                            key={item}
                            identifier={item}
                            changeValue={actions.changeValue}
                        />
                    );
                })
            }
        </main>
    )
}

export default Inputs;