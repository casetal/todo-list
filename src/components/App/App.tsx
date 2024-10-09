import { Fragment } from 'react/jsx-runtime';
import './App.css';
import TodoList from '../TodoList/TodoList';
import AddTodo from '../AddTodo/AddTodo';
import TodoInfo from '../TodoInfo/TodoInfo';

const App = () => {
  return (
    <Fragment>
      <AddTodo />
      <TodoList />
      <TodoInfo />
    </Fragment>
  )
}

export default App;