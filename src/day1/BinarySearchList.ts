export default function bs_list(haystack: number[], needle: number): boolean {
    let start = 0
    let end = haystack.length
    let midIndex = 0

    let sortedHaystack = haystack.sort((a, b) => a - b)

    console.log(sortedHaystack)

    // the loop will stop when start becomes end
    while (start !== end) {
        midIndex = Math.floor((start + end)/2)
        if(sortedHaystack[midIndex] === needle) {
            return true
        } else if (needle > sortedHaystack[midIndex]) {
            start = midIndex + 1
        } else {
            end = midIndex
        }
    }
    return false
}