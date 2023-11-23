type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined
        this.length = 0
    }

    enqueue(item: T): void {
        const newNode: Node<T> = {value: item}
        if (this.tail) this.tail.next = newNode
        this.tail = newNode
        this.length++

        if (this.length === 1) {
            this.head = this.tail
        }
    }
    deque(): T | undefined {
        if (this.head) {
            const oldNode = this.head
            this.head = this.head.next
            oldNode.next = undefined
            this.length--
            return oldNode.value
        }
        return undefined
    }
    peek(): T | undefined {
        return this.head?.value
    }
}
