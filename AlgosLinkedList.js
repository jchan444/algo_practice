//#1 Write a function, linkedListValues, that takes in the head of a linked list as an argument. 
//The function should return an array containing all values of the nodes in the linked list.

//create constructor function - 

// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }



const linkedListValues = (head) => {
 const result = [];
 let current = head;
 
 if (current === null) return [];

 while(current !== null) {
    result.push(current.val);
    current = current.next;
 }

 return result;
}

// const a = new Node("A")
// const b = new Node("B")
// const c = new Node("C")

// a.next = b;
// b.next = c;

// console.log(linkedListValues(a))

//#2 sum list

//Write a function, sumList, that takes in the head of a linked list containing numbers as an argument. 
//The function should return the total sum of all values in the linked list.

// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// const a = new Node(2);
// const b = new Node(8);
// const c = new Node(3);
// const d = new Node(-1);
// const e = new Node(7);

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;

// 2 -> 8 -> 3 -> -1 -> 7

const sumList = (head) => {
    // let result = 0;
    // let current = head;

    // while(current !== null) {
    //     result += current.val;
    //     current = current.next;
    // }

    // return result;

    if(head === null) return 0;
    return head.val + sumList(head.next)

}

// console.log(sumList(a)); // 19

// #3 linkedlist find

//Write a function, linkedListFind, that takes in the head of a linked list and a target value. 
//The function should return a boolean indicating whether or not the linked list contains the target.

class Node {
    constructor (val) {
        this.val = val;
        this.next = null
    }
}

//input head, target
//output: boolean

const linkedListFind = (head, target) => {

    let current = head;

    //iterate through the nodes checking the target each time

    while(current !== null) {
        if(current.val === target) return true;

        current = current.next;
    }

    return false;

    //reached the end of the linkedlist

    if(head === null) return false;
    if(head.val === target) return true;

    return linkedListFind(head.next, target)

}

// const a = new Node('A')
// const b = new Node('B')
// const c = new Node('C')
// const d = new Node('D')
// const e = new Node('E')

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;

//#4 get node value 
//Write a function, getNodeValue, that takes in the head of a linked list and an index. The function should return the value of the linked list at the specified index.

//If there is no node at the given index, then return null.

//input: head node and index
//output: value specified in the index



const getNodeValue = (head, index) => {
    // let currentIndex = 0;
    // let current = head;

    // while (currentIndex < index) {
    //     if(current === null) return "does not exist"
    //     current = current.next
    //     currentIndex++;
    // }
    // return current.val;

    //recusively
    if(head === null) return null
    if(index === 0) return head.val
    
    return getNodeValue(head.next, index-1)


}

// console.log(getNodeValue(a, 1)); // 'c'




//#5reverse list

// Write a function, reverseList, that takes in the head of a linked list as an argument. 
// The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.

const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')
const e = new Node('E')

a.next = b;
b.next = c;
c.next = d;
d.next = e;

//input head
//output: new head

//reverse in place

const reverseList = (head) => {
    //create a pointer in memory to point at current node
    let prev = null;
    // let prev = null;
    while (head !== null) {
        const next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
    
    

}

console.log(reverseList(a)); // f -> e -> d -> c -> b -> a