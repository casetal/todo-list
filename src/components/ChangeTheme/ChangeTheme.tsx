import { observer } from 'mobx-react-lite';
import theme from '../../store/theme';

const ChangeTheme = observer(() => {
    return (
        <div className={`flex gap-4 cursor-pointer p-4 justify-center ${theme.currentTheme.text}`}>
            <div onClick={() => theme.change('light')}>Светлая тема</div>
            <div onClick={() => theme.change('dark')}>Тёмная тема</div>
            <div onClick={() => theme.change('system')}>Системно</div>
        </div>
    )
});

export default ChangeTheme;