import { useState } from 'react';
import todo from '../../store/todo';
import theme from '../../store/theme';

const Search = (() => {
    const [name, setName] = useState<string>('');

    return todo.items.filter(i => i.name !== '').length > 0 ? (
        <div className={`flex items-center gap-4 p-4 mb-5 rounded shadow-md mx-auto ${theme.currentTheme.backgroundBlock}`}>
            <input
                type="text"
                placeholder="Поиск..."
                onChange={(e) => {
                    todo.search(e.target.value);
                    setName(e.target.value);
                }}
                value={name}
                className={`${theme.currentTheme.input} text-sm flex-1 p-1 rounded focus:outline-none`}
            />
        </div>
    ) : null;
});

export default Search;