import { makeAutoObservable } from "mobx";
import Item from '../interfaces/todo';

class Todo {
    items: Array<Item> = [];

    constructor() {
        makeAutoObservable(this);
    }

    addTodo(name: string, parentId: number = 0) {
        this.items.push({
            id: Date.now(),
            name: name,
            text: "",
            parentId: parentId,
            selectView: false
        });
    }

    removeTodo(id: number) {
        this.items = this.items.filter(i => i.id !== id);
    }

    changeName(id: number, name: string) {
        this.items = this.items.map(i =>
            (i.id === id) ? {
                ...i,
                name: name
            } : i
        )
    }

    changeText(id: number, text: string) {
        this.items = this.items.map(i =>
            (i.id === id) ? {
                ...i,
                text: text
            } : i
        )
    }

    selectItem(id: number) {
        this.items = this.items.map(i =>
            (i.id === id) ? {
                ...i,
                selectView: true
            } : {
                ...i,
                selectView: false
            }
        )

        console.log(this.items.filter(i => i.selectView === true));
    }

    get selectedItem(): Item {
        return this.items.filter(i => i.selectView)[0];
    }
}

export default new Todo();