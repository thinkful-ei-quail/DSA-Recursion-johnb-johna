/* eslint-disable no-console */
//Counting Sheep

function sheepCounter(num) {
  if(num === 0) {
    console.log('All sheep jumped over the fence')
    return
  }
  console.log(`${num}: Another sheep jumps over the fence`)
  sheepCounter(num - 1)
}

sheepCounter(5)

//Power Calculator

function powerCalculator(b, e) {
  if(e < 0) {
    return 'exponent should be >= 0'
  }

  if( e === 0 ) {
    return 1
  }

  return b * powerCalculator(b, e - 1)
}

console.log(powerCalculator(10, 5))

//Reverse String

function reverseString(str) {
  if(str.length === 0) {
    return ''
  }

  return str[str.length - 1] + reverseString(str.slice(0, -1))
}

console.log(reverseString('hello'))


//Nth Triangular Number

function calcTriangularNum(num) {
  if(num === 1) {
    return num
  }
  return num + calcTriangularNum(--num)
}

console.log(calcTriangularNum(10))


//String Splitter

function stringSplitter(str, seperator) {
  const index = str.indexOf(seperator)
  if(index === -1) {
    return [str]
  }

  return [str.slice(0, index), ...stringSplitter(str.slice(index + 1), seperator)]
}

console.log(stringSplitter('02/20/2020', '/'))

//Fibonacci Seq

function fibonacci(num) {
  if(num < 3) {
    return 1
  }
  return fibonacci(num - 2) + fibonacci(num - 1)
}

console.log(fibonacci(7))

//Facotrial

function factorial(num) {
  if(num === 0) {
    return 1
  }

  return num * factorial(num - 1)
}

console.log(factorial(5))

//Maze 

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

function mazeRunner(x, y, path, maze) {
  if(x < 0 || y < 0 || y >= maze.length || x >= maze[y].length || maze[y][x] === '*') {
    return null
  }
  if(maze[y][x] === 'e') {
    return path
  }

  maze = maze.map(row => [...row])
  maze[y][x] = '*'

  return mazeRunner(x + 1, y, path + 'R', maze) 
    || mazeRunner(x - 1, y, path + 'L', maze) 
    || mazeRunner(x, y + 1, path + 'D', maze) 
    || mazeRunner(x, y - 1, path + 'U', maze)

}

console.log(mazeRunner(0, 0, '', maze))

//All maze paths

function findAllPaths(x, y, path, maze) {
  if(x < 0 || y < 0 || y >= maze.length || x >= maze[y].length || maze[y][x] === '*') {
    return []
  }
  
  if(maze[y][x] === 'e'){
    return [path]
  }
  maze = maze.map(row => [...row])
  
  maze[y][x] = '*'
  return [
    ...findAllPaths(x + 1, y, path + 'R', maze),
    ...findAllPaths(x - 1, y, path + 'L', maze), 
    ...findAllPaths(x, y - 1, path + 'U', maze), 
    ...findAllPaths(x, y + 1, path + 'D', maze)
  ]

}

console.log(findAllPaths(0, 0, '', maze))

//Anagrams

function makeAnagrams(str) {
  if(str.length < 2) {
    return [str]
  }

  const prefixArr = str.split('')
  return [...new Set(prefixArr.reduce((a, c, i) => {
    return [...a, ...makeAnagrams(prefixArr.slice(0, i).join('') + prefixArr.slice(i + 1).join('')).map(suffix => c + suffix)]
  }, []))]
}

console.log(makeAnagrams('bee'))

//Organization Chart

const orgChart = {
  name: 'Zuckerberg',
  directReports: [
    {
      name: 'Schroepfer',
      directReports: [
        {
          name: 'Bowsworth',
          directReports: [
            {name: 'Steve',directReports: []},
            {name: 'Kyle',directReports: []},
            {name: 'Andra',directReports: []},
          ]
        },
        {
          name: 'Zhao',
          directReports: [
            {name: 'Richie', directReports: []},
            {name: 'Sofia', directReports: []},
            {name: 'Jen',directReports: []},
          ]
        }
      ],
    },
    {
      name: 'Schrage',
      directReports: [
        {
          name: 'VanDyck',
          directReports: [
            {name: 'Sabrina', directReports: []},
            {name: 'Michelle', directReports: []},
            {name: 'Josh', directReports: []}
          ]
        },
        {
          name: 'Swain',
          directReports: [
            {name: 'Blanch', directReports: []},
            {name: 'Tom', directReports: []},
            {name: 'Joe', directReports: []}
          ]
        }
      ]
    },
    {
      name: 'Sandberg',
      directReports: [
        {
          name: 'Goler',
          directReports: [
            {name: 'Eddie', directReports: []},
            {name: 'Julie', directReports: []},
            {name: 'Annie', directReports: []}
          ]
        },
        {
          name: 'Hernandez',
          directReports: [
            {name: 'Rowi', directReports: []},
            {name: 'Inga', directReports: []},
            {name: 'Morgan', directReports: []}
          ]
        },
        {
          name: 'Moissinac',
          directReports: [
            {name: 'Amy', directReports: []},
            {name: 'Chuck', directReports: []},
            {name: 'Vinni', directReports: []}
          ]
        },
        {
          name: 'Kelley',
          directReports: [
            {name: 'Eric', directReports: []},
            {name: 'Ana', directReports: []},
            {name: 'Wes', directReports: []}
          ]
        }
      ]
    }
  ]
}

function printOrgChart(orgObj, indent = '') {
  console.log(indent + orgObj.name)
  indent += '\t'
  orgObj.directReports.forEach(person => printOrgChart(person, indent))
}

printOrgChart(orgChart)

//Binary Converter

function convertToBinary(num) {
  num = num|0
  if(num <= 1) {
    return num.toString()
  }
  const lsb = (num % 2).toString()
  return convertToBinary(num/2) + lsb
}

console.log(convertToBinary(10))


