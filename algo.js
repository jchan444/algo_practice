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

// https://leetcode.com/problems/move-zeroes/
var moveZeroes = function(nums) {
  for (let i = nums.length; i >= 0; i--) {
      if(nums[i] === 0) {
          nums.push(0);
          nums.splice(i, 1);
      }
  }
  
  return nums;
  
};

// https://leetcode.com/problems/add-strings/solutions/?languageTags=javascript
var addStrings = function(num1, num2) {
  sum = '';
  len1 = num1.length;
  len2 = num2.length;
  carry = 0;

  while(len1 > 0 || len2 > 0 || carry) {
      num1Digit = +num1.charAt(len1-1);
      num2Digit = +num2.charAt(len2-1);
      len1--;
      len2--;
      
      digitTotal = num1Digit + num2Digit + carry;
      carry = Math.floor(digitTotal / 10);
      digitToAppend = digitTotal % 10;
      sum = digitToAppend + sum;
  } 

  return sum;
};

//https://leetcode.com/problems/number-of-segments-in-a-string/
var countSegments = function(s) {
  if(s === "") return 0;

  const arr = s.split(' ');

  return arr.length;
};

//splitting the array
  //returning the length.
  //filter to take out any empty space elements
//o(N) space and time

// https://leetcode.com/problems/generate-parentheses/description/
var generateParenthesis = function(n) {
  var arr = [];
    compose(n, n, '');
    return arr;
  
    function compose(left, right, str) {
      if (!left && !right && str.length) return arr.push(str);
      if (left) compose(left - 1, right, str + '(');
      if (right > left) compose(left, right - 1, str + ')');
    }
  };

  // https://leetcode.com/problems/longest-substring-without-repeating-characters/
  var lengthOfLongestSubstring = function(s) {

    let max = 0;
    let arr = [];

    for(let i = 0; i < s.length; i++) {
        if(arr.indexOf(s[i]) === -1) {
            arr.push(s[i]);
            if(arr.length > max) max = arr.length;
        } else {
            arr = arr.slice(arr.indexOf(s[i]) + 1, arr.length);
            arr.push(s[i]);
        }
    }
    return max;
    
};
 
// https://leetcode.com/problems/longest-palindromic-substring/

var longestPalindrome = function(str) {
  //edge case for strings with length <= 1;
if(str.length <= 1) return str;

let longest = "";

for(let i = 0; i < str.length; i++) {
//check for palindromes of ODD length
let palindrome = getLongestPal(str, i, i);
if(palindrome.length > longest.length) longest = palindrome;

//check for palindromes of EVEN length
palindrome = getLongestPal(str, i, i + 1)
if(palindrome.length > longest.length) longest = palindrome;

}
return longest;
}

//helper function that returns longest pal at given center point.
function getLongestPal (str, left, right) {
  while(left >= 0 && right < str.length && str[left] === str[right]) {
      left--;
      right++;
  }
  return str.slice(left + 1, right)
}

// https://leetcode.com/problems/sqrtx/solutions/25167/easy-to-understand-javascript-solution/
var mySqrt = function(x) {
  let left = 1;
  let right = Math.floor(x / 2) + 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (mid * mid > x) {
      right = mid - 1;
    } else if (mid * mid < x) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return right;
};

// https://leetcode.com/problems/longest-nice-substring/solutions/1074601/js-brute-force/
function split (s) {
s = s.split("");
  const N = s.length;
  let max = "";

  for (let i = 0; i < N - 1; i++) {
    let substr = [s[i]];

    for (let j = i + 1; j < N; j++) {
      substr.push(s[j]);
      let isNice = true;

      for (const c of substr) {
        if (
          !substr.includes(c.toLowerCase()) ||
          !substr.includes(c.toUpperCase())
        ) {
          isNice = false;
        }
      }

      if (isNice && substr.join("").length > max.length) {
        max = substr.join("");
      }
    }
  }

  return max;
}

  // https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/description/
  var countGoodSubstrings = function(s) {
    const arr = s.split('');
    let count = 0;

    for(let i = 0; i < s.length-2; i++) {
        if(arr[i] !== arr[i+1] && arr[i] !== arr[i+2] && arr[i+1] !== arr[i+2]) {
            count++;
        }
    }
    return count;
};

// https://leetcode.com/problems/fizz-buzz/
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


const pairProducts = (arr, target) => {
  const cache = {};

//iterate through the array using a for loop
for (let i = 0; i < arr.length; i++) {
  const complement = target / arr[i];
  
  if(cache[complement] !== undefined) return [cache[complement], i]
  else {
    cache[arr[i]] = i;
  }

}
} 

//https://www.algoexpert.io/questions/validate-subsequence
function isValidSubsequence(array, sequence) {
  // Write your code here.
  let seqIdx = 0;

  for(let arrIdx = 0; arrIdx < array.length; arrIdx++) {
    if(array[arrIdx] === sequence[seqIdx]) seqIdx++;
  }

  return seqIdx === sequence.length;
}

// https://www.algoexpert.io/questions/product-sum

function productSum(array, depth = 1) {
  // Write your code here.
  let sum = 0;
  //[5, 2, [7, -1], 3, [6, [-13, 8], 4]]
  // 5 + 2 + 2(6) + 3 + 2(6 + 3(-5) + 4))
  for(let i = 0; i < array.length; i++) {
    if(Array.isArray(array[i])) 
      sum += productSum(array[i], depth + 1); 
        else sum += array[i];
  }

  return sum * depth;
  
}

//https://www.algoexpert.io/questions/remove-duplicates-from-linked-list
function removeDuplicatesFromLinkedList(linkedList) {
  // Write your code here.
  let current = linkedList;

  //keep checking while curent.next !== null;
  while(current.next !== null) {
    //checking if the next node is the same as current's value
    if(current.value === current.next.value) {
      //deletes node and points current pointer over duplicate
      current.next = current.next.next;
    } else 
      //iterate to next node if no duplicate was found.
      current = current.next;
  }
  
  return linkedList;
}

// https://www.algoexpert.io/questions/sorted-squared-array
function sortedSquaredArray(array) {
  // Write your code here.

  const resultArray = [];
  let left = 0;
  let right = array.length - 1;

  while(left <= right) {
    if(Math.abs(array[left]) > Math.abs(array[right])) {
      resultArray.unshift(array[left]*array[left])
      left++;
    } else {
      resultArray.unshift(array[right]*array[right])
      right--;
    }
  }
  
  return resultArray;
}


//https://www.algoexpert.io/questions/tournament-winner

function tournamentWinner(competitions, results) {
  // Write your code here.

  let leader = {name: '', score: -Infinity}
  const scoreBoard = {};

  for(let match = 0; match < results.length; match++) {
    if(results[match] === 0) scoreBoard[competitions[match][1]] ? scoreBoard[competitions[match][1]] += 3 : scoreBoard[competitions[match][1]] = 3;
      else scoreBoard[competitions[match][0]] ? scoreBoard[competitions[match][0]] += 3 : scoreBoard[competitions[match][0]] = 3;
  }

  for(const team in scoreBoard) {
    if(scoreBoard[team] > leader.score) {
      leader.name = team;
      leader.score = scoreBoard[team];
    }
  }
    
  return leader.name;
} 


//https://www.algoexpert.io/questions/caesar-cipher-encryptor
function caesarCipherEncryptor(string, key) {
  // Write your code here.
  let finalString = '';

  for(let letter = 0; letter < string.length; letter++) {
      //converting string to Unicode and adding 3
      let newLetter = string.charCodeAt(letter) + key;
      //Account for anything past 122 (z)
    while(newLetter > 122) {
      newLetter = (newLetter % 122) + 96
    }
      newLetter = String.fromCharCode(newLetter)
      finalString = finalString.concat(newLetter);
    }
  
  return finalString;
  }

// https://www.algoexpert.io/questions/first-non-repeating-character
  function firstNonRepeatingCharacter(string) {
    // Write your code here.
    if(string === "") return -1
  
    const letterBank = {};
  
    //iterate through string and input into letter bank - duplicates will be set to false.
    for(let i = 0; i < string.length; i++) {
      if(letterBank[string[i]] === undefined) letterBank[string[i]] = i;
        else letterBank[string[i]] = false;
    }
  
    //iterate thru letterBank - first that isn't false returns index
    for(let key in letterBank) {
      if(letterBank[key] !== false) return letterBank[key]
    }
    
    return -1;
  }


  // https://www.algoexpert.io/questions/generate-document
  function generateDocument(characters, document) {
    // Write your code here.
    //first edge case
    if(characters === "") return true;
    
    const wordBank = {};
  
    //iterate thru characters to create the wordBank
    for(let letter of characters) {
      wordBank[letter] ? wordBank[letter]++ : wordBank[letter] = 1;
    }
    //iterate thru document to count each character
    for(let letter of document) {
      if(wordBank[letter] === undefined || wordBank[letter] === 0) return false;
        else wordBank[letter]--;
  }
  
    return true;
  }