import { makeAutoObservable } from "mobx";
import Item from '../interfaces/todo';

class Todo {
    items: Array<Item> = [];

    constructor() {
        makeAutoObservable(this);
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
        this.items = this.items.filter(i => i.id !== id);
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

    get selectedItem(): Item {
        return this.items.filter(i => i.selectView)[0];
    }
}

export default new Todo();