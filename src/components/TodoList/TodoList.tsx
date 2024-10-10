import { observer } from 'mobx-react-lite';
import todo from '../../store/todo';
import todoList from '../../interfaces/todoList';

const TodoList = observer(({ parentId }: todoList) => {
    return (
        <>
            {todo.items.map(t => t.parentId === parentId ? (
                <ul className={t.parentId != 0 ? 'ml-4' : ''}>
                    <li onClick={() => todo.select(t.id)} key={t.id} className="cursor-pointer items-center mb-2 p-2 border rounded bg-gray-100 hover:bg-gray-200 transition">
                        <div className="flex">
                            <input type="checkbox" className="mr-2" />
                            <div className="flex-1 text-left" >
                                {t.name ? t.name : "Без названия"}
                            </div>
                            <div onClick={() => todo.add("", t.id)} className="ml-2 text-green-600">
                                <svg className="w-6 h-6 fill-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5" />
                                </svg>
                            </div>

                            <div onClick={() => todo.remove(t.id)} className="ml-2 text-red-600">
                                <svg className="w-6 h-6 fill-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14" />
                                </svg>
                            </div>
                        </div>
                    </li>
                    <TodoList parentId={t.id} />
                </ul>
            ) : null)}
        </>
    );
});

export default TodoList;