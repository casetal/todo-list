import { makeAutoObservable, reaction } from "mobx";
import Item from '../interfaces/todo';

class Todo {
    items: Array<Item> = [];

    constructor() {
        makeAutoObservable(this);
        this.loadFromLocalStorage();
        this.search('');

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

    check(id: number, checked: boolean) {
        this.items = this.items.map(i =>
            (i.id === id) ? {
                ...i,
                checked: !checked
            } : i
        )

        this.checkedChildren(id, !checked);
        this.checkedParent(id);
    }

    private checkedChildren(id: number, checked: boolean) {
        this.items = this.items.map(i =>
            (i.parentId === id) ? {
                ...i,
                checked: checked
            } : i
        )

        this.items.map(i => i.parentId === id && this.checkedChildren(i.id, i.checked));        
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


    search(name: string) {
        let foundIds: Array<number> = [];
    
        this.items.forEach(i => {
            if (i.name.toLowerCase().includes(name.toLowerCase())) {
                let currentId = i.id;
                if (!foundIds.includes(currentId)) foundIds.push(currentId);
    
                let parentId: number = i.parentId;
                while (parentId && !foundIds.includes(parentId)) {
                    foundIds.push(parentId);
                    const foundParentId = this.items.find(item => item.id === parentId);
                    parentId = foundParentId ? foundParentId.parentId : 0;
                }
            }
        });
    
        foundIds.forEach(parentId => {
            this.items.forEach(i => {
                if (i.parentId === parentId && !foundIds.includes(i.id)) {
                    foundIds.push(i.id);
                }
            });
        });
    
        this.items = this.items.map(i => ({
            ...i,
            visible: foundIds.includes(i.id)
        }));
    }

    add(name: string, parentId: number = 0) {
        const id = Date.now();

        this.items.push({
            id: id,
            name: name,
            text: "",
            parentId: parentId,
            checked: false,
            visible: true
        });

        this.check(id, true)
    }

    remove(id: number) {
        this.items = this.items.filter(i => i.id !== id || i.parentId == id);
    }

    removeChecked() {
        this.items = this.items.filter(i => !i.checked);
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

    get checked(): number {
        return this.items.filter(i => i.checked).length;
    }
}

export default new Todo();