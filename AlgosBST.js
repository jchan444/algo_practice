class Node {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

// const a = new Node('a')
// const b = new Node('b')
// const c = new Node('c')
// const d = new Node('d')
// const e = new Node('e')
// const f = new Node('f')

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

//#1

//Write a function, depthFirstValues, that takes in the root of a binary tree. 
//The function should return an array containing all values of the tree in depth-first order.

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

//input:root
//output: array;

const depthFirstValues = (root) => {
if (root === null) return [];

//create a result array

const result = [];
//use a stack to push elements in in depthfirst order
//initialize it with root
const stack = [root];

//while loop - stack.length > 1
while(stack.length > 0) {
//push the value in the result array
const current = stack.pop()
    // console.log(current.val)
    result.push(current.val);
    //push the resulting node into the stack - left then right

    if(current.right !== null) stack.push(current.right)
    if(current.left !== null) stack.push(current.left)

}

    

return result;

}

// console.log(depthFirstValues(a)); 
//    -> ['a', 'b', 'd', 'e', 'c', 'f']


//#2 breadth first search

//Write a function, breadthFirstValues, that takes in the root of a binary tree. 
//The function should return an array containing all values of the tree in breadth-first order.

// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

const breadthFirstValues = (root) => {
    const result = [];
    const queue = [ root ];

    //using queue system - push/shift value.
    //while loop as long as queue.length > 0
    while (queue.length > 0) {
    //shift method  and push into result array
    const current = queue.shift();
    result.push(current.val);
    //push into queue - left then right
    
    if(current.left !== null) queue.push(current.left)
    if(current.right !== null) queue.push(current.right)
    }
    

    return result;
}

// console.log(breadthFirstValues(a)); 
//    -> ['a', 'b', 'c', 'd', 'e', 'f']




//#3 tree sum
//Write a function, treeSum, that takes in the root of a binary tree that contains number values. 
//The function should return the total sum of all values in the tree.

// const a = new Node(3);
// const b = new Node(11);
// const c = new Node(4);
// const d = new Node(4);
// const e = new Node(-2);
// const f = new Node(1);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

const treeSum = (root) => {
    //depth first
    //stack - 
    // if (root === null) return 0;

    // return root.val + treeSum(root.left) + treeSum(root.right);

    //breadth first
    //queue:

    //queue and result;
    const queue = [ root ];
    let result = 0;

    //while queue.length > 0 
    while(queue.length > 0) {
    //shift the queue - and add to result - save it to a current variable
    const current = queue.shift();
    result += current.val;
    //check current varaible for left - and right nodes - push it into queue.
    if(current.left !== null) queue.push(current.left)
    if(current.right !== null) queue.push(current.right);

    }

    return result;

}

// console.log(treeSum(a)); // -> 21

//#4 tree includes
//Write a function, treeIncludes, that takes in the root of a binary tree and a target value. 
// The function should return a boolean indicating whether or not the value is contained in the tree.

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

const treeIncludes = (root, target) => {
    //depth first search recursively
    if(root === null) return false;

    if(root.val === target) return true;
    
    return treeIncludes(root.left, target) || treeIncludes(root.right, target);
}
    //breadth first - queue;

    //queue
//     const queue = [ root ]

//     //while queue.length > 0 
//     while (queue.length > 0) {
//         //check if target === value
//     const current = queue.shift();
//     if(current.val === target) return true;

//     //if conditionals to push into queue
//     if(current.left !== null) queue.push(current.left);
//     if(current.right !== null) queue.push(current.right);
//     }

//     return false;
// }

// console.log(treeIncludes(a, "f")); // -> true


//#5 tree min value
// Write a function, treeMinValue, that takes in the root of a binary tree that contains number values. 
//The function should return the minimum value within the tree.

// You may assume that the input tree is non-empty.


// const a = new Node(3);
// const b = new Node(11);
// const c = new Node(4);
// const d = new Node(4);
// const e = new Node(-2);
// const f = new Node(1);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1


const treeMinValue = (root) => {
    // let smallest = Infinity
    // //breadth first - queue
    // const queue = [ root ];
    // //while queue length -
    // while(queue.length > 0) {
    //     //current to keep track.
    //     let current = queue.shift();
    //     // check queue if it is larger than smallest
    //     //if it is - replace the smallest
    //     if(current.val < smallest) smallest = current.val;

    //     //if right and left
    //     if(current.left !== null) queue.push(current.left);
    //     if(current.right !== null) queue.push(current.right);

    // }
    // return smallest;

    // recursively
    if (root === null) return Infinity;

    return Math.min(root.val, treeMinValue(root.left), treeMinValue(root.right))

}


// console.log(treeMinValue(a)); // -> -2


//#6 maxroot to leaf path sum
// Write a function, maxPathSum, that takes in the root of a binary tree that contains number values. The function should return the maximum sum of any root to leaf path within the tree.

// You may assume that the input tree is non-empty.

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1


const maxPathSum = (root) => {

}

console.log(maxPathSum(a)); // -> 18