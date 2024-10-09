import { observer } from 'mobx-react-lite';
import todo from '../../store/todo';

const App = observer(() => {
    return (
        <div className="todoInfo">
            {todo.selectedItem ? (
                <>
                <h1>{todo.selectedItem.id} - родитель: {todo.selectedItem.parentId}</h1>
                    <input type="text" onChange={(e) => todo.changeName(todo.selectedItem.id, e.target.value)} value={todo.selectedItem.name} />
                    <textarea onChange={(e) => todo.changeText(todo.selectedItem.id, e.target.value)} value={todo.selectedItem.text} />
                </>
            ) : null}
        </div>
    )
});

export default App;