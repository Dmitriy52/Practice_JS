import React, { useEffect } from 'react';
import Todolist from './Todo_app/Todo_list';
import MyContext from './MyContext';
import Loader from './Loader';
import Modal from './Modal/Modal';

const AddTodo = React.lazy(() => import ('./Todo_app/Add_todo'))

function App() {
// хуки React.useState
  const [todos, setTodos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
    // { id: 1,
    //   completed: false,
    //   title: 'Купить хлеб'
    // },
    // { id: 2,
    //   completed: true,
    //   title: 'Купить масло'
    // },
    // { id: 3,
    //   completed: false,
    //   title: 'Купить молоко'
    // }
  //]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
        setTimeout(()=>{
          setTodos(todos);
          setLoading(false);
        }, 2000);
      })
  }, [])

  function switchTodo(id){
   setTodos(
     todos.map((todo) => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    })
    )
  }
    // отфильтруем, если ID элемента совпадает то элемент удалится
  function removeTodo(id){
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  
  function addTodo(titleofTodo){
    setTodos(todos.concat([{
      title: titleofTodo,
      id: Date.now(),
      completed: false
    }]))
  }

  return (
    // это value={{removeTodo: removeTodo}} можно записать просто value={{removeTodo}}
    // т.к ключ и значение совпадают
    <MyContext.Provider value={{removeTodo: removeTodo}}>
      <div className='wrapper'>
        <h1>Todo_list</h1>
        <Modal />
        <React.Suspense fallback={<p>Loading...</p>}>
          <AddTodo onCreate={addTodo} />
        </React.Suspense>
        
        {loading && <Loader />}
        {/* если todos.length отличается от 0 */}
        {(todos.length) ? (<Todolist todos={todos} onSwitch={switchTodo}/>) : ((loading) ? null : <p>No todos!</p>)}
         
      </div>
   </MyContext.Provider>
  );
}

export default App;
