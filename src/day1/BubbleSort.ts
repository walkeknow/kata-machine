export default function bubble_sort(arr: number[]): void {
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const t = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = t
            }
        }
    }
    console.log('sorted', arr)
}