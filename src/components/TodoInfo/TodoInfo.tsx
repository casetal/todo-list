import { observer } from 'mobx-react-lite';
import todo from '../../store/todo';

const App = observer(() => {
    return todo.selected ? (
        <div className="p-4 bg-white rounded shadow-md">
            <h1 className="text-xl font-semibold mb-4">
                {todo.selected.id} - родитель: {todo.selected.parentId}
            </h1>
            <input
                type="text"
                onChange={(e) => todo.change(todo.selected.id, e.target.value, todo.selected.text)}
                value={todo.selected.name}
                className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Название задачи"
            />
            <textarea
                onChange={(e) => todo.change(todo.selected.id, todo.selected.name, e.target.value)}
                value={todo.selected.text}
                className="w-full h-32 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Описание задачи"
            />
        </div>
    ) : null;
});


export default App;