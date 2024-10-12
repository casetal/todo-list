import { observer } from 'mobx-react-lite';
import todo from '../../store/todo';
import Item from '../../interfaces/todo';
import theme from '../../store/theme';

const App = observer((t: Item) => {
    return (
        <div className={`p-4 bg-white rounded shadow-md relative ${theme.currentTheme.backgroundBlock}`}>
            <input
                type="text"
                onChange={(e) => todo.change(t.id, e.target.value, t.text)}
                value={t.name}
                className={`w-full mb-4 p-2 rounded focus:outline-none focus:ring focus:ring-blue-300 ${theme.currentTheme.input}`}
                placeholder="Название задачи"
            />
            <textarea
                onChange={(e) => todo.change(t.id, t.name, e.target.value)}
                value={t.text}
                className={`w-full h-32 p-2 rounded focus:outline-none focus:ring focus:ring-blue-300 ${theme.currentTheme.input}`}
                placeholder="Описание задачи"
            />
        </div>
    )
});


export default App;