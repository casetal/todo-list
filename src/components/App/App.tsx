import './App.css';
import TodoList from '../TodoList/TodoList';
import AddTodo from '../AddTodo/AddTodo';
import TodoInfo from '../TodoInfo/TodoInfo';
import ControlList from '../ControlList/ControlList';
import ChangeTheme from '../ChangeTheme/ChangeTheme';
import Search from '../Search/Search';

import todo from '../../store/todo';
import theme from '../../store/theme';

import { BrowserRouter as HashRouter, Routes, Route, Outlet } from "react-router-dom";
import { observer } from 'mobx-react-lite';

const App = observer(() => {
  return (
    <HashRouter>
      <div className={`h-screen ${theme.currentTheme.background}`}>
        <div className="container mx-auto py-10 max-w-10xl">
          <AddTodo />
          <div className={`flex gap-5 mt-5 ${theme.currentTheme.background}`}>
            <div className="w-1/3">
              {/* <div className="h-1/2 overflow-y-auto"> */}
              <Search />
              <TodoList parentId={0} />
              <ControlList />
              {/* </div> */}
            </div>
            <div className="w-2/3">
              <Routes>
                <Route path="/" element={<Outlet />} />
                {todo.items.map(t =>
                  <Route key={t.id} path={`/${t.id}`} element={<TodoInfo {...t} />} />
                )}
              </Routes>
            </div>
          </div>
          <ChangeTheme />
        </div>
      </div>
    </HashRouter>
  )
})

export default App;