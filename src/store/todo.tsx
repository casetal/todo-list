import { makeAutoObservable, reaction } from "mobx";
import Item from '../interfaces/todo';

class Todo {
    items: Array<Item> = [];

    constructor() {
        makeAutoObservable(this);
        this.loadFromLocalStorage();

        reaction(
            () => this.items,
            (items) => {
                localStorage.setItem('todoList', JSON.stringify(items));
            }
        );
    }

    private loadFromLocalStorage() {
        const storedInputs = localStorage.getItem('todoList');

        if (storedInputs) {
            this.items = JSON.parse(storedInputs);
        }
    }

    add(name: string, parentId: number = 0) {
        this.items.push({
            id: Date.now(),
            name: name,
            text: "",
            parentId: parentId,
            selectView: false
        });
    }

    remove(id: number) {
        this.items = this.items.filter(i => i.id !== id || i.parentId == id);
    }

    change(id: number, name: string, text: string) {
        this.items = this.items.map(i =>
            (i.id === id) ? {
                ...i,
                name: name,
                text: text
            } : i
        )
    }

    select(id: number) {
        this.items = this.items.map(i =>
            (i.id === id) ? {
                ...i,
                selectView: true
            } : {
                ...i,
                selectView: false
            }
        )
    }

    get selected(): Item {
        return this.items.filter(i => i.selectView)[0];
    }
}

export default new Todo();