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

        this.select(0);
    }

    checked(id: number, checked: boolean) {
        this.items = this.items.map(i =>
            (i.id === id) ? {
                ...i,
                checked: !checked
            } : i
        )

        this.checkedChildren(id);
        this.checkedParent(id);
    }

    private checkedChildren(id: number) {
        this.items = this.items.map(i =>
            (i.parentId === id) ? {
                ...i,
                checked: !i.checked
            } : i
        )

        this.items.map(i => i.parentId === id && this.checkedChildren(i.id));        
    }

    private checkedParent(id: number) {
        if(id === 0) {
            return;
        }

        let parentId: number = this.items.reduce((pv, cv) => (id == cv.id) ? cv.parentId : pv, 0);

        const getAllChild: Array<Item> = this.items.filter(i => i.parentId === parentId);
        const getAllChildChecked: Array<Item> = this.items.filter(i => (i.parentId === parentId && i.checked));

        const allChildChecked = getAllChild.length === getAllChildChecked.length;

        this.items = this.items.map(i =>
            (i.id === parentId) ? {
                ...i,
                checked: allChildChecked
            } : i
        );

        this.checkedParent(parentId);
    }

    add(name: string, parentId: number = 0) {
        const id = Date.now();

        this.items.push({
            id: id,
            name: name,
            text: "",
            parentId: parentId,
            checked: false,
            selectView: false
        });

        this.checked(id, true)
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