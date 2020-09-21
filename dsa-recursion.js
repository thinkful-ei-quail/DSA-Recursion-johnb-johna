// Counting Sheep

// function sheepCounter(num) {
//   if(num === 0) {
//     console.log('All sheep jumped over the fence')
//     return
//   }
//   console.log(`${num}: Another sheep jumps over the fence`)
//   sheepCounter(num - 1)
// }

// sheepCounter(5)

// Power Calculator

// function powerCalculator(b, e) {
//   if(e < 0) {
//     return 'exponent should be >= 0'
//   }

//   if( e === 0 ) {
//     return 1
//   }

//   return b * powerCalculator(b, e - 1)
// }

// console.log(powerCalculator(10, 5))

//Reverse String

// function reverseString(str) {
//   if(str.length === 0) {
//     return ''
//   }

//   return str[str.length - 1] + reverseString(str.slice(0, -1))
// }

// console.log(reverseString('hello'))


// Nth Triangular Number

// function calcTriangularNum(num) {
//   if(num === 1) {
//     return num
//   }
//   return num + calcTriangularNum(--num)
// }

// console.log(calcTriangularNum(10))


//String Splitter

// function stringSplitter(str, seperator) {
//   const index = str.indexOf(seperator)
//   if(index === -1) {
//     return [str]
//   }

//   return [str.slice(0, index), ...stringSplitter(str.slice(index + 1), seperator)]
// }

// console.log(stringSplitter('02/20/2020', '/'))

// Fibonacci Seq

// function fibonacci(num) {
//   if(num < 3) {
//     return 1
//   }
//   return fibonacci(num - 2) + fibonacci(num - 1)
// }

// console.log(fibonacci(7))

//Facotrial

// function factorial(num) {
//   if(num === 0) {
//     return 1
//   }

//   return num * factorial(num - 1)
// }

// console.log(factorial(5))

//Maze 

function mazeRunner(x, y, facing, maze) {
  if(maze[y][x] === 'e') {
    return ''
  }

}

// All maze paths

function findAllPaths(x, y, path, maze) {
  if(x < 0 || y < 0 || y >= maze.length || x >= maze[y].length || maze[y][x] === '*') {
    return []
  }
  
  if(maze[y][x] === 'e'){
    return [path]
  }
  
  maze[y][x] = '*'

}