import { useState } from 'react';
import { observer } from 'mobx-react-lite';

import todo from '../../store/todo';

const AddTodo = observer(() => {
    const [name, setName] = useState<string>();
    return (
        <div className="addItem">
            <input type="text" placeholder="Название задачи" onChange={(e) => setName(e.target.value)} />
            <button onClick={() => todo.addTodo(name as string)}>Добавить</button>
        </div>
    )
});

export default AddTodo;