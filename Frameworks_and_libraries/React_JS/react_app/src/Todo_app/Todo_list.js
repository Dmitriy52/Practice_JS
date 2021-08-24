import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './Todo_item';

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
    
}

function Todolist(props){
    return(
        <ul style={styles.ul}>
         {props.todos.map((todo, index)=>{
             return (<TodoItem todo={todo} key={todo.id} index={index} onChange={props.onSwitch}/>)
         }) }
        </ul>
    )
}

Todolist.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onSwitch: PropTypes.func.isRequired
}

export default Todolist;