import './App.css';
import TodoList from '../TodoList/TodoList';
import AddTodo from '../AddTodo/AddTodo';
import TodoInfo from '../TodoInfo/TodoInfo';
import ControlList from '../ControlList/ControlList';

import { observer } from 'mobx-react-lite';

const App = observer(() => {
  return (
    <div className="container mx-auto py-10 max-w-10xl">
      <AddTodo />
      <div className="flex gap-5 mt-5">
        <div className="w-1/3">
          <>
            <TodoList parentId={0} />
            <ControlList />
          </>
        </div>
        <div className="w-2/3">
          <TodoInfo />
        </div>
      </div>
    </div>
  )
})

export default App;