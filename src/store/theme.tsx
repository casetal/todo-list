import { makeAutoObservable } from "mobx";

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

        let theme = localStorage.getItem('theme');
        this.selectTheme = theme ? theme : 'light';
        this.change(this.selectTheme);
        console.log(theme);
        this.onChange();
    }

    change(theme: string) {
        this.selectTheme = theme;

        if (theme === 'light')
            this.currentTheme = this.themes.LIGHT;
        else if (theme === 'dark')
            this.currentTheme = this.themes.DARK;
        else if (theme === 'system') {
            this.change(this.matchMedia.matches ? 'dark' : 'light');
            this.selectTheme = 'system';
        }

        localStorage.setItem("theme", this.selectTheme);
    }

    onChange = () => {
        this.matchMedia.addEventListener('change', (e: MediaQueryListEvent) => {
            if (this.selectTheme === 'system') {
                this.change(e.matches ? 'dark' : 'light');
                this.selectTheme = 'system';
            }

            console.log(this.selectTheme);
        });
    }

    private matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
}

export default new Theme();