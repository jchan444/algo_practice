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

console.log(anagrams('restful', 'fluster'))