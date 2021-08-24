import React, {useContext}  from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context';
const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}

function TodoItem({todo, index, onChange}){
    const { removeTodo } = useContext(MyContext);

   const classes = [];
   if(todo.completed){
       classes.push('done');
   }

//    функция onChange передаётся поэтаптно от родительского элемента к дочернему,
//    но если вложенность будет больше лучше импользовать React Context чтобы передавать напрямую
    return (<li style={styles.li}>
                {/* В className должны передавать строку */}
                <span className={classes.join(' ')}>
                    <input
                     type='checkbox'
                     checked={todo.completed}
                     style={styles.input}
                     onChange={() => onChange(todo.id)}/>
                    <strong> {index + 1} </strong>
                    &nbsp;
                    {todo.title}
                </span>

                    {/* 1 - onClick={removeTodo{todo.id}} - данный способ при инициализации удалит все Todo
                        2 - onClick={()=> {removeTodotodo.id)}} - через колбэк
                        3 - {removeTodo.bind(null,todo.id)} - при помощи метода bind*/}
                <button className='rm' onClick={removeTodo.bind(null,todo.id)}>&times;</button>
            </li>)
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem;