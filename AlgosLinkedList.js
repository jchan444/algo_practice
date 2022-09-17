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

// const a = new Node('A')
// const b = new Node('B')
// const c = new Node('C')
// const d = new Node('D')
// const e = new Node('E')

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;

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

// console.log(reverseList(a)); // f -> e -> d -> c -> b -> a

//#6 zipper list

//Write a function, zipperLists, that takes in the head of two linked lists as arguments. The function should zipper the two lists together into single linked list by alternating nodes. 
//If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes. 
//The function should return the head of the zippered linked list.

//input: 2 linked lists
//output: 1 zipped linked list

//altnerate nodes into one node - in place
//if any of the nodes are null - return the lineked list head as is.

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// a.next = b;
// b.next = c;
// // a -> b -> c

// const x = new Node("x");
// const y = new Node("y");
// const z = new Node("z");
// const zy = new Node("zy");
// x.next = y;
// y.next = z;
// x -> y -> z


zipperLists = (head1, head2) => {
//solve resuively
//set base cases - if head1 or head 1 or head 2 is null - return null;
if(head1 === null && head2 === null) return null;
//if head1 is null - return head2;
if(head1 === null) return head2;
//if head 2 is null - return head1;
if(head2 === null) return head1;

const next1 = head1.next;
const next2 = head2.next;

head1.next = head2;

head2.next = zipperLists(next1, next2)

return head1;

}


// console.log(zipperLists(a, x));
// a -> x -> b -> y -> c -> z

//#7 merge lists
//Write a function, mergeLists, that takes in the head of two sorted linked lists as arguments. 
//The function should merge the two lists together into single sorted linked list. The function should return the head of the merged linked list.

// Do this in-place, by mutating the original Nodes.

// You may assume that both input lists are non-empty and contain increasing sorted numbers.

// const a = new Node(5);
// const b = new Node(7);
// const c = new Node(10);
// const d = new Node(12);
// const e = new Node(20);
// const f = new Node(28);
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;
// // 5 -> 7 -> 10 -> 12 -> 20 -> 28

// const q = new Node(6);
// const r = new Node(8);
// const s = new Node(9);
// const t = new Node(25);
// q.next = r;
// r.next = s;
// s.next = t;
// // 6 -> 8 -> 9 -> 25

mergeLists = (head1, head2) => {
let current1 = head1;
let current2 = head2;
let dummyhead = new Node(null);
let tail = dummyhead;

while(current1 !== null && current2 !== null) {
    if(current1.val < current2.val) {
        tail.next = current1;
        current1 = current1.next
        } else {
            tail.next = current2;
            current2 = current2.next;
     }
     tail = tail.next;
}

if(current1 === null) {
    tail.next = current2;
}

if(current2 === null) {
    tail.next = current1;
}

return dummyhead.next;



}

// console.log(mergeLists(a, q));


//#8 univalue list

//Write a function, isUnivalueList, that takes in the head of a linked list as an argument. 
//The function should return a boolean indicating whether or not the linked list contains exactly one unique value.

// You may assume that the input list is non-empty.

// const a = new Node(7);
// const b = new Node(7);
// const c = new Node(7);

// a.next = b;
// b.next = c;

// 7 -> 7 -> 7

//input: head
//output: boolean

const isUnivalueList = (head) => {
let target = head.val;
let current = head;

while(current !== null) {
    if(current.val !== target) return false;
    current = current.next;
}

return true;
}

// console.log(isUnivalueList(a)); // true


//#9 longest streak
//Write a function, longestStreak, that takes in the head of a linked list as an argument. 
//The function should return the length of the longest consecutive streak of the same value within the list.

const a = new Node(5);
const b = new Node(5);
const c = new Node(7);
const d = new Node(7);
const e = new Node(7);
const f = new Node(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// 5 -> 5 -> 7 -> 7 -> 7 -> 6

const longestStreak = (head) => {
    
}


longestStreak(a); // 3