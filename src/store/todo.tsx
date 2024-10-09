import { makeAutoObservable } from "mobx";
import Item from '../interfaces/todo';

class Todo {
    items: Array<Item> = [];

    constructor() {
        makeAutoObservable(this);
    }

    addTodo(name: string, text: string = "", parentId: number = 0) {
        this.items.push({
            id: Date.now(),
            name: name,
            text: text,
            parentId: parentId,
            selectView: false
        });
    }

    removeTodo(id: number) {
        this.items = this.items.filter(i => i.id != id);
    }

    changeTodo(id: number, name: string, text: string) {
        this.items = this.items.map(i =>
            (i.id === id) ? {
                ...i,
                name: name,
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