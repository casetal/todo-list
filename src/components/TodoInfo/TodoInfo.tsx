import { observer } from 'mobx-react-lite';
import todo from '../../store/todo';

const App = observer(() => {
    return (
        <div className="todoInfo">
            {todo.selected ? (
                <>
                    <h1>{todo.selected.id} - родитель: {todo.selected.parentId}</h1>
                    <input type="text" onChange={(e) => todo.change(todo.selected.id, e.target.value, todo.selected.text)} value={todo.selected.name} />
                    <textarea onChange={(e) => todo.change(todo.selected.id, todo.selected.name, e.target.value)} value={todo.selected.text} />
                </>
            ) : null}
        </div>
    )
});

export default App;