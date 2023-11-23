export class Node<T> {
    public next?: Node<T>
    public value: T;

    constructor(value: T) {
        this.next = undefined;
        this.value = value;
    }
}

export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = undefined;
        this.tail = undefined
        this.length = 0
    }

    prepend(item: T): void {
        const itemNode = new Node<T>(item)
        itemNode.next = this.head
        this.head = itemNode

        this.length++

        if (this.length === 1) {
            this.tail = this.head
        }
    }
    insertAt(item: T, idx: number): void {
        if (idx <= this.length) {
            if (idx === 0){
                this.prepend(item)
            } else if (idx === this.length) {
                this.append(item)
            } else {
                const itemNode = new Node<T>(item)
                let currNode = this.head
                for(let i = 1; i < idx; i++) {
                    currNode = currNode!.next
                }
                itemNode.next = currNode!.next
                currNode!.next = itemNode
            }
        }
    }
    append(item: T): void {
        const itemNode = new Node<T>(item)
        if (this.length !== 0) {
            const lastNode = this.tail
            lastNode!.next = itemNode
        }
        this.tail = itemNode
        this.length++

        if (this.length === 1) {
            this.head = this.tail
        }
    }
    // remove(item: T): T | undefined {}
    get(idx: number): T | undefined {
        if (this.length !== 0) {
            if (idx === 0) {
                return this.head!.value
            } else if (idx === this.length) {
                return this.tail!.value
            } 
            let currNode = this.head
            for(let i = 0; i < idx; i++) {
                currNode = currNode!.next
            }
            return currNode!.value
        } else return undefined
    }
    // removeAt(idx: number): T | undefined {}
}

const list = new SinglyLinkedList<number>();
list.append(1)
list.append(2)
list.prepend(3)
list.insertAt(4, 1)
list.insertAt(5, 2)
const num = list.get(2)
console.log(num)
console.log(list)