import React, { useState } from 'react';
import PropTypes from 'prop-types';

//реализация с кастомным хуком
function useInputValue(defaultValue = ""){
    const [inputValue, setValue] = useState(defaultValue);

    return {
        bind: {
            value: inputValue,
            onChange: (event) => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => inputValue
    }
}

function AddTodo({onCreate}){

    const input = useInputValue('');
    
    function submitHandler(event){
        // отменяем дефолтное поведение, чтобы страница не перезагружалась
        event.preventDefault();

        if(input.value().trim()){
            onCreate(input.value());
            input.clear();
        }
    }
    
    return (
        <form className='addForm' onSubmit={submitHandler}>
            {/* <input value={inputValue} onChange={(event)=> setValue(event.target.value)}/> */}
            <input {...input.bind}/>
            <button type='submit'>Add todo</button>
        </form>
    )
    
}

AddTodo.prototype = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo;