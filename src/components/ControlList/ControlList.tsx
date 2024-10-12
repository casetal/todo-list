import { observer } from 'mobx-react-lite';
import todo from '../../store/todo';

const ControlList = observer(() => {
    return todo.checked ? (
        <button onClick={() => todo.removeChecked()} className="w-full px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
            Удалить выбранное: {todo.checked}
        </button>
    ) : null;
});

export default ControlList;