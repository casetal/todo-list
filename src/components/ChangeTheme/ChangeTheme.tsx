import { observer } from 'mobx-react-lite';
import theme from '../../store/theme';

const ChangeTheme = observer(() => {
    return (
        <div className={`fixed bottom-0 right-0 flex gap-4 cursor-pointer p-4 justify-center ${theme.currentTheme.text}`}>
            <div className={`p-2 rounded select-none ${theme.selectTheme === 'light' ? theme.currentTheme.taskSelect : theme.currentTheme.task}`} onClick={() => theme.change('light')}>Светлая тема</div>
            <div className={`p-2 rounded select-none ${theme.selectTheme === 'dark'  ? theme.currentTheme.taskSelect : theme.currentTheme.task}`} onClick={() => theme.change('dark')}>Тёмная тема</div>
            <div className={`p-2 rounded select-none ${(theme.selectTheme === 'system')  ? theme.currentTheme.taskSelect : theme.currentTheme.task}`} onClick={() => theme.change('system')}>Системно</div>
        </div>
    )
});

export default ChangeTheme;