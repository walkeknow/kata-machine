type Node<T> = {
    value: T;
    prev?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node: Node<T> = { value: item };
        this.length++;
        if (!this.head) {
            this.head = node;
            return;
        }
        node.prev = this.head;
        this.head = node;
    }
    pop(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        this.length--;
        const oldNode = this.head;
        this.head = this.head.prev;
        oldNode.prev = undefined;
        return oldNode.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
