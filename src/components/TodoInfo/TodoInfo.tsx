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
                    <input type="text" onChange={(e) => todo.changeName(todo.selectedItem.id, e.target.value)} value={todo.selectedItem.name} />
                    <textarea onChange={(e) => todo.changeText(todo.selectedItem.id, e.target.value)} value={todo.selectedItem.text} />
                </>
            ) : null}
        </div>
    )
});

export default App;