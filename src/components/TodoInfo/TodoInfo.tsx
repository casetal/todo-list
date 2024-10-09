import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import todo from '../../store/todo';

const App = observer(() => {
    const [name, setName] = useState<string>();
    const [text, setText] = useState<string>();

    return (
        <div className="todoInfo">
            {todo.selectedItem ? (
                <>
                <h1>{todo.selectedItem.id}</h1>
                    <input type="text" onChange={(e) => setName(e.target.value)} defaultValue={todo.selectedItem.name} />
                    <textarea onChange={(e) => setText(e.target.value)} defaultValue={todo.selectedItem.text} />
                    <button onClick={() => todo.changeTodo(todo.selectedItem.id, name as string, text as string)}>Сохранить</button>
                </>
            ) : null}
        </div>
    )
});

export default App;