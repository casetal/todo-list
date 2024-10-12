import { makeAutoObservable, autorun } from "mobx";

class Theme {
    private themes = {
        LIGHT: {
            background: "bg-white",
            backgroundBlock: 'bg-white',
            task: 'bg-gray-100 hover:bg-gray-200',
            taskSelect: 'bg-gray-300',
            text: 'text-black',
            input: 'border border-gray-300',
        },
        DARK: {
            background: "bg-zinc-900",
            backgroundBlock: 'bg-zinc-800',
            task: 'bg-zinc-800 hover:bg-zinc-700 text-white',
            taskSelect: 'bg-zinc-700 text-white',
            text: 'text-white',
            input: 'bg-zinc-800 text-white border border-zinc-700',
        }
    }
    
    selectTheme: string = 'light';
    currentTheme = this.themes.DARK;

    constructor() {
        makeAutoObservable(this);

        autorun(() => {
            
        })

        let theme = localStorage.getItem('theme');
        this.selectTheme = theme ? theme : 'light';
        this.set(this.selectTheme);
        
        this.initSystemThemeWatcher();
    }

    private change(theme: string) {
        if (theme === 'light')
            this.currentTheme = this.themes.LIGHT;
        else if (theme === 'dark')
            this.currentTheme = this.themes.DARK;
    }

    set(theme: string) {
        this.selectTheme = theme;
        localStorage.setItem("theme", this.selectTheme) 
        

        if (theme === 'system') {
            const matchMediaDark = window.matchMedia('(prefers-color-scheme: dark)');
            this.change(matchMediaDark.matches ? 'dark' : 'light');
        } else {
            this.change(theme);
        }
    }

    private initSystemThemeWatcher() {
        const matchMediaDark = window.matchMedia('(prefers-color-scheme: dark)');
        
        const onSystemThemeChange = (e: MediaQueryListEvent) => {
            if (this.selectTheme === 'system') {
                this.change(e.matches ? 'dark' : 'light');
            }
        };
        
        matchMediaDark.addEventListener('change', onSystemThemeChange);
    }
}

export default new Theme();