const directions = [
    [0 , 1],
    [1, 0],
    [0, -1],
    [-1, 0]
]

function walk(maze: string[], wall: string, end: Point, curr: Point, visited: boolean[][], correctPath: Point[]): boolean {
    
    // Base cases
    // off the map
    if (curr.x < 0 || curr.x >= maze[0].length || curr.y < 0 || curr.y >= maze.length) {
        return false
    }
    // hit a wall
    if (maze[curr.y][curr.x] === wall) {
        return false
    }
    // reach goal
    if (curr.x === end.x && curr.y === end.y) {
        correctPath.push(curr)
        return true
    }
    // visit visited note
    if (visited[curr.y][curr.x]) {
        return false
    }
    
    visited[curr.y][curr.x] = true
    correctPath.push(curr)

    for(let i = 0; i < directions.length; ++i) {
        const [x , y] = directions[i]
        if(walk(maze, wall, end, {
            x: curr.x + x,
            y: curr.y + y
        }, visited, correctPath)) {
            return true
        }
    }

    correctPath.pop()
    return false
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const curr = start
    const visited: boolean[][] = []
    const correctPath: Point[] = []

    for(let x = 0; x < maze.length; ++x) {
        visited.push(new Array(maze[0].length).fill(false))
    }

    walk(maze, wall, end, curr, visited, correctPath)

    return correctPath
}