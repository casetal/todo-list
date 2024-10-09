import { useState } from 'react';
import { observer } from 'mobx-react-lite';

import todo from '../../store/todo';

const AddTodo = observer(() => {
    const [name, setName] = useState<string>();
    return (
        <div className="addItem">
            <input type="text" placeholder="Название задачи" onChange={(e) => setName(e.target.value)} />
            <button onClick={() => {
                todo.add(name as string, (todo.selectedItem ? todo.selectedItem.id: 0));
                setName('');
            }}>Добавить</button>
        </div>
    )
});

export default AddTodo;