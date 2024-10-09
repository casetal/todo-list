import { observer } from 'mobx-react-lite';
import todo from '../../store/todo';

import todoList from '../../interfaces/todoList';

const TodoList = observer(({ parentId }: todoList) => {
    return (
        <div className="items">
            {todo.items.map(t => t.parentId === parentId ? (
                <div key={t.id} className="item">
                    <input type="checkbox" />
                    <button onClick={() => todo.selectItem(t.id)}>{t.name}</button>
                    <button onClick={() => todo.removeTodo(t.id)}>Х</button>

                    <TodoList parentId={t.id} />
                </div>
            ) : null
            )}
        </div>
    )
});

export default TodoList;