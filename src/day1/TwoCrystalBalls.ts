export default function two_crystal_balls(breaks: boolean[]): number {
    let index = 0
    let jumpUnit = Math.floor(Math.sqrt(breaks.length))
    while (!breaks[index]) {
        if (index >= breaks.length) return - 1
        index += jumpUnit
    }
    index = index - jumpUnit
    
    while (!breaks[index]) {
        if (index >= breaks.length) return - 1
        index += 1
    }
    console.log(index)
    return index
}