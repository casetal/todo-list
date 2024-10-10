import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import todo from '../../store/todo';

const AddTodo = observer(() => {
    const [name, setName] = useState<string>('');

    return (
        <div className="flex items-center gap-4 p-4 bg-white rounded shadow-md mx-auto">
            <input
                type="text"
                placeholder="Введите название задачи..."
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
            <button
                onClick={() => {
                    if (name) {
                        todo.add(name, 0);
                        setName('');
                    }
                }}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
                Добавить
            </button>
        </div>
    );
});

export default AddTodo;