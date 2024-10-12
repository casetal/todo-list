import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import todo from '../../store/todo';
import { Info } from '../../interfaces/todoList';
import Item from '../../interfaces/todo';

const App = observer((t: Item) => {
    return (
        <div className="p-4 bg-white rounded shadow-md relative">
            <input
                type="text"
                onChange={(e) => todo.change(t.id, e.target.value, t.text)}
                value={t.name}
                className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Название задачи"
            />
            <textarea
                onChange={(e) => todo.change(t.id, t.name, e.target.value)}
                value={t.text}
                className="w-full h-32 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Описание задачи"
            />
        </div>
    )
});


export default App;