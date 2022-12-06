// 1) max value
// Write a function, maxValue, that takes in array of numbers as an argument. The function should return the largest number in the array.

// Solve this without using any built-in array methods.

// You can assume that the array is non-empty.

const maxValue = (nums) => {
    let result = nums[0]
    for(let i = 0; i < nums.length; i++) {
      if(nums[i] > result) {
        result = nums[i]
      }
    }
    return result;
  };

// 2) is prime
// Write a function, isPrime, that takes in a number as an argument. The function should return a boolean indicating whether or not the given number is prime.

// A prime number is a number that is only divisible by two distinct numbers: 1 and itself.

// For example, 7 is a prime because it is only divisible by 1 and 7. For example, 6 is not a prime because it is divisible by 1, 2, 3, and 6.

// You can assume that the input number is a positive integer.


const isPrime = (n) => {
    // todo
    
    //edge case
    if (n === 1 || n <= 0 ) return false;
    //determine if n is divisible by numbers equal or less than the Math.sqrt() of that numbers
    let halfway = Math.floor(Math.sqrt(n))
    
    for(let i = 2; i <=halfway; i++) {
      //if it is divisible then return false
      if(n % i === 0) return false;
    }
    //if cannot find then return true - it is Prime.
    return true;
  };


  // Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern:

  const uncompress = (s) => {
    // todo
    let result = '';
    let num = '';
    let str = '';

    //concatenate a resulting string number of times of that character
    const concat = (str, num) => {
    let result = '';
    for(let i = 1; i <= num; i++) {
      result += str;
    }
      return result;
  };
    
    //iterate through string - 
    for (let i = 0; i < s.length; i++) {
      //save the letter to another variable, save the parsed number into a variable
      num = s[i];
      //condintional to check if there is a digit on the next index
      while(Number.isInteger(Number(s[i+1]))) {
        console.log('hi')
        i++;
        num += s[i];
      }
      num = Numnber(num)
      i++;
      str = s[i];
      result += concat(str, num);
    }
    
    return result;
    
  };
  
  
  
  
  // console.log(uncompress("2c3a1t"))

  
//#4 Compress
//Write a function, compress, that takes in a string as an argument. 
//The function should return a compressed version of the string where consecutive occurrences 
//of the same characters are compressed into the number of occurrences followed by the character. 
//Single character occurrences should not be changed.

// 'aaa' compresses to '3a'
// 'cc' compresses to '2c'
// 't' should remain as 't'

//input: string
//output: string;
//function - compress that takes in a string
//return string

//make a caching object to keep count of the occurances.
const compress = (str) => {
  let result = '';
  let i = 0;
  let j = 0;
  let count;
console.log(str[0])
//loop through using 2 pointers to check and count.
while (j <= str.length) {
  //check if i pointer equals j
  if(str[i] === str[j]) {
    j++;
  } else {
    count = j - i;
    if(count === 1) {
      result += str[i]
      i = j
    } else {
      result += count + str[i]
      i = j
    }
  }
}
  return result;
}


//test cases
console.log(compress('ccaaatsss')) // -> '2c3at3s'


//#5 Anagrams
//Write a function, anagrams, that takes in two strings as arguments. 
//The function should return a boolean indicating whether or not the strings are anagrams. 
//Anagrams are strings that contain the same characters, but in any order.


//input: string
//output: boolean;


const anagrams = (str1, str2) => {
  const obj1 = {};
  const obj2 = {};

  //check lengths to make sure they are the same.
  if(str1.length !== str2.length) return false;

//create a caching object that keeeps track of letters and their # of occurances
for(let i = 0; i < str1.length; i++) {
  obj1[str1[i]] = obj1[str1[i]]++ || 1;
  obj2[str2[i]] = obj2[str2[i]]++ || 1;
  // if(obj1[str1[i]]) {
  //   obj1[str1[i]]++
  // } else obj1[str1[i]] = 1;
}

for (let key in obj1) {
  if(obj1[key] !== obj2[key]) return false;
}

return true;
}

// console.log(anagrams('restful', 'fluster'))

//#6 most frequent Char

//Write a function, mostFrequentChar, that takes in a string as an argument. 
//The function should return the most frequent character of the string. 
//If there are ties, return the character that appears earlier in the string.

// You can assume that the input string is non-empty.

//input: string
//output:string (frequent char)


mostFrequentChar = (str) => {
const obj = {};
//create a object that takes each character as a property - Key is how many times it appears.
for(let i = 0; i < str.length; i++) {
  obj[str[i]] = obj[str[i]] + 1 || 1
}
//initilize a most frequent char variable in which we can iterate through the string and checking if it is greater
//ensures that the first one will be chosen.

let mostFrequent = 0;
let result = '';

for(let key in obj) {
  if(obj[key] > mostFrequent) {
    mostFrequent = obj[key];
    result = key
  }
}


return result;
}

// console.log(mostFrequentChar('bookeeper'))
// console.log(mostFrequentChar('mississippi'))


//#7 pair sum

//Write a function, pairSum, that takes in an array and a target sum as arguments. 
//The function should return an array containing a pair of indices whose elements sum to the given target. The indices returned must be unique.

//Be sure to return the indices, not the elements themselves.

//There is guaranteed to be one such pair that sums to the target.

//

const pairSum = (arr, target) => {
const obj = {};

//iterate through the array using a for loop
//brute force for two loops - On^2
//complement and storing in obj - finding the complement - target - arr[i] - Time complexity is O(n)
//don't do if statement conditionals without an operator. (ex !== undefined)
for(let i = 0; i < arr.length; i++) {
  const complement = target - arr[i];
  if(obj[complement] !== undefined) return [obj[complement], i]
  else {
    obj[arr[i]] = i;
  }
 }


//check if the complement exists in our obj, if not make one. - if it does exist - then return indecies


}

//input: array and target number
//output: two indexes that contain the two values that equal the sum

// console.log(pairSum([3, 2, 5, 4, 1], 8)); // -> [0, 2]


//#8 pair product




const pairProduct = (arr, target) => {
  const cache = {};

//iterate through the array using a for loop
for (let i = 0; i < arr.length; i++) {
  const complement = target / arr[i];
  
  if(cache[complement] !== undefined) return [cache[complement], i]
  else {
    cache[arr[i]] = i;
  }

}
//try for the O(n) - caching the complement in an obj
//and then checking to see if the complemment exists in the caching obj as it iterates through.
}

//#9 intersection
// console.log(pairProduct([3, 2, 5, 4, 1], 8)); // -> [1, 3]

const intersection = (arr1, arr2) => {
  const result = [];
  //includes method - 
  for (let i = 0; i < arr1.length; i++) {
    if(arr2.includes(arr1[i])) result.push(arr1[i])
  }

  return result;
}

// console.log(intersection([4,2,1,6], [3,6,9,2,10]))// -> [2,6]


//#10 pair sort
//Write a function, fiveSort, that takes in an array of numbers as an argument. 
//The function should rearrange elements of the array such that all 5s appear at the end. 
//Your function should perform this operation in-place by mutating the original array. The function should return the array.

//Elements that are not 5 can appear in any order in the output, as long as all 5s are at the end of the array.

//input: array
//output:array;

const fiveSort = (arr) => {
//two pointers i & j - i starts in beginning - j starts in the end
let j = arr.length - 1
let i = 0

while(i < j) {
  //if to check index j is 5
  //if to check index i is not 5
  //swap - using destructuring assignemnt
  if(arr[j] === 5) j--;
    else if (arr[i] === 5) {
      [arr[i], arr[j]] = [arr[j], arr[i]]
      i++;
    } else {
      i++;
    }
}

return arr;

}

//decrement j until it reaches not a 5



// console.log(fiveSort([12, 5, 1, 5, 12, 7]));
// // -> [12, 7, 1, 12, 5, 5] 


//https://leetcode.com/problems/excel-sheet-column-title/
var convertToTitle = function(columnNumber) {
  let ans = '';
  while(columnNumber >= 1){
      ans = String.fromCharCode(((columnNumber - 1) % 26) + 65) + ans;
      columnNumber = (columnNumber - 1)/ 26;
  }
  return ans;
};

//https://leetcode.com/problems/isomorphic-strings/
var isIsomorphic = function(s, t) {
  if (s.length != t.length) return false
  
  let m = new Map()
  
  for (let i = 0; i < s.length; i++) {
      if (!m.has(s[i])) m.set(s[i], t[i])
      else if (m.get(s[i]) != t[i]) return false
  }
  return new Set([...m.values()]).size == m.size
  
};


//https://leetcode.com/problems/length-of-last-word/

var lengthOfLastWord = function(s) {
  let count = 0;
  
  const arr = s.split(' ');
  console.log(arr)
  
  for(let i = arr.length-1; i >= 0; i--) {
      if(arr[i] !== '') {
          for(let j = 0; j < arr[i].length; j++) {
              count++;
          }
          break;
      }
  }
  
  return count;
};

//https://leetcode.com/problems/binary-tree-paths/
var binaryTreePaths = function(root) {
  if(root === null) return [];
      else if(root.right === null && root.left === null) return [`${root.val}`];
      else {
          const left = binaryTreePaths(root.left).map(x => root.val + '->' + x);
          const right = binaryTreePaths(root.right).map(x => root.val + '->' + x);
          
          return [...left, ...right]
      }

};

//https://leetcode.com/problems/island-perimeter/
var islandPerimeter = function(grid) {
  let count = 0;
  
  for(let row = 0; row < grid.length; row++) {
      for(let col = 0; col < grid[0].length; col++) {
          if(grid[row][col] === 1) {
              count += 4;
              if(row > 0 && grid[row-1][col] === 1) count--;
              if(row < grid.length - 1 && grid[row+1][col] === 1) count--;
              if(grid[row][col+1] === 1) count--;
              if(grid[row][col-1] === 1) count--;
          }
      }
  }
  
  return count;
  
};

// https://leetcode.com/problems/reshape-the-matrix/
var matrixReshape = function(mat, r, c) {
  let arr = mat.flat();
  if (r * c != arr.length) return mat;
   
 let res = [];
   
 while (arr.length) {
     res.push(arr.splice(0, c));
 }
   
 return res;
};

//mat - array
//r = row, c = col

//legal? - size, negative numbers?


//https://leetcode.com/problems/valid-parentheses/
var isValid = function(s) {
    
  //stack
  //hashmap
  //O(N) space
  
  const hashmap = {
      '(': ')',
      '{': '}',
      '[': ']'
  }
  
  const stack = [];
  
//for loop to iterate once O(N)
  for(let i = 0; i < s.length; i++) {
      //check if the matching bracket is within the stack.
      //if it doesn't equal- return false;
      if(hashmap[s[i]] !== undefined) stack.push(hashmap[s[i]])
          else if(stack.pop() !== s[i]) return false;        
  }
  
  return stack.length === 0
};

// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
var findDisappearedNumbers = function(nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
      let num = Math.abs(nums[i]);
      let idx = num-1;
      nums[idx] = Math.abs(nums[idx]) * -1;
  }

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) res.push(i+1);
  }
  return res;
  
  
  // Time Complexity: O(N)
  // Space Complexity: O(1)
};

// https://leetcode.com/problems/third-maximum-number/
var thirdMax = function(nums) {
  let first = -Infinity; //
  let second = -Infinity; //
  let third = -Infinity; //
  
  const set = new Set(nums);
  const arr = [...set];
  
  for(let i = 0; i < arr.length; i++) {
      if(arr[i] > first) {
          third = second;
          second = first;
          first = arr[i];
      } else {
          if(arr[i] > second) {
              third = second;
              second = arr[i];
          } else {
              if(arr[i] > third) {
                  third = arr[i]
              }
          }
      }
  }
  
  return third === -Infinity ? first : third
  
};

// https://leetcode.com/problems/assign-cookies/
var findContentChildren = function(g, s) {
  let count = 0;
  let cookieCount = 0;
  let childCount = 0;
  
  g.sort((a, b) => b - a)
  s.sort((a, b) => b - a)

  while(cookieCount < s.length && childCount < g.length) {
      if(g[childCount] <= s[cookieCount]) {
          cookieCount++;
          childCount++;
          count++;
      } else childCount++;
  }
  
  return count;
};
 

// https://leetcode.com/problems/max-consecutive-ones/
var findMaxConsecutiveOnes = function(nums) {
  let count = 0;
  let max = 0;
  
  for(let i = 0; i < nums.length; i++) {
      if(nums[i] === 1) count++
      if(nums[i] === 0) {
          max = Math.max(count, max)
          count = 0;
      }
  }
  
  max = Math.max(count, max)
  
  return max;
  
};

// https://leetcode.com/problems/reverse-string/solutions/?languageTags=javascript
var reverseString = function(s) {

  for(let i = 0; i < s.length; i++) {
      s.splice(i, 0, s.pop())
  }

  return s;
  
};

// https://leetcode.com/problems/first-unique-character-in-a-string/solutions/?languageTags=javascript
var firstUniqChar = function(s) {
  const hash = {};

  for(let i = 0; i < s.length; i++) {
      if(hash[s[i]] !== undefined) hash[s[i]] = -1;
          else hash[s[i]] = i;
  }
  
  for(let key in hash) {
      if(hash[key] >= 0) return hash[key];
  }

  return -1
};

// https://leetcode.com/problems/find-the-difference/submissions/855792189/
var findTheDifference = function(s, t) {
  const hash1 = {};
  const hash2 = {};

  for(let i = 0; i < s.length; i++) {
      if(hash1[s[i]] !== undefined) hash1[s[i]]++
          else hash1[s[i]] = 1;
  }

  for(let i = 0; i < t.length; i++) {
      if(hash2[t[i]] !== undefined) hash2[t[i]]++
          else hash2[t[i]] = 1;
  }

  for(let key in hash2) {
      if(hash2[key] !== hash1[key]) return key;
  }
};

// https://leetcode.com/problems/fizz-buzz/submissions/855798155/
var fizzBuzz = function(n) {
  const res = [];
  
  for(let i = 1; i <= n; i++) {
      if(i % 15 === 0) {
          res.push(`FizzBuzz`);
      } else if(i % 3 === 0) {
          res.push(`Fizz`);
      } else if(i % 5 === 0) {
          res.push(`Buzz`);
      } else {
          res.push(`${i}`);
      }
  }
  return res;
};