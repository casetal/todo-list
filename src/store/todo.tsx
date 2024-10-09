import { makeAutoObservable } from "mobx";
import Item from '../interfaces/todo';

class Todo {
    items: Array<Item> = [];

    constructor() {
        makeAutoObservable(this);
    }

    addTodo(name: string, text: string = "", parentId: number = 0, selectView: boolean = false) {
        this.items.push({
            id: Date.now(),
            name: name,
            text: text,
            parentId: parentId,
            selectView: selectView
        });
    }

    removeTodo(id: number) {
        this.items.filter(i => i.id != id);
    }

    changeTodo(id: number, name: string, text: string) {
        this.items.map(i =>
            (i.id == id) ? {
                ...i,
                name: name,
                text: text
            } : i
        )
    }

    selectItem(id: number) {
        this.items.map(i =>
            (i.id == id) ? {
                ...i,
                selectView: true
            } : {
                ...i,
                selectView: false
            }
        )
    }

    get selectedItem(): Array<Item> {
        return this.items.filter(i => i.selectView === true);
    }
}

export default new Todo();