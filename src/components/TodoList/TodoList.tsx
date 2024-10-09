import { observer } from 'mobx-react-lite';
import todo from '../../store/todo';

import Item from '../../interfaces/todo';

const TodoList = observer(() =>{
  return (
    <div className="items">
        {todo.items.map(t => 
            <div key={t.id} className="item">
                <input type="checkbox" />
                <button onClick={() => todo.selectItem(t.id)}>{t.name}</button>
                <button onClick={() => todo.removeTodo(t.id)}>Х</button>
            </div>
        )}
    </div>
  )
});

export default TodoList;