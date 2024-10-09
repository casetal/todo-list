import { makeAutoObservable } from "mobx"
import internal from "stream";

interface Item {
    id: number;
    name: string;
    text: string;
    parentId: number;
}

class Todo {
    items: Array<Item> = [];

    constructor() {
        makeAutoObservable(this);
    }

    addTodo(id: number, name: string, text: string, parentId: number) {
        this.items.push({
            id: id,
            name: name,
            text: text,
            parentId: parentId
        });
    }

    removeTodo(id: number) {
        this.items.filter(i => i.id != id);
    }

    changeTodo(id: number, name: string, text: string) {
        this.items.map(i =>
            (i.id === id) ? {
                ...i,
                name: name,
                text: text
            } : i
        )
    }
}