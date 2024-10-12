import { makeAutoObservable, reaction } from "mobx";

class Theme {
    constructor() {
        makeAutoObservable(this);
    }

    themes = 
    {
        LIGHT: {
            background: "bg-white",
            backgroundBlock: 'bg-white',
            task: 'bg-gray-100 hover:bg-gray-200',
            taskSelect: 'bg-gray-300',
            text: 'text-black',
            input: 'border border-gray-300'
        },
        DARK: {
            background: "bg-zinc-900",
            backgroundBlock: 'bg-zinc-800',
            task: 'bg-zinc-800 hover:bg-zinc-700 text-white',
            taskSelect: 'bg-zinc-700 text-white',
            text: 'text-white',
            input: 'bg-zinc-800 text-white border border-zinc-700'
        }
    }

    currentTheme = this.themes.DARK;

    change() {
        
    }
}

export default new Theme();