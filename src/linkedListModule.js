import { Node } from "./nodeModule.js";
export class LinkedList {
  constructor(nodes) {
    //if we needed multiple lists this would need an id system
    //this.id = id;
    this.nodes = nodes ? nodes : [];
  }

  displayDetails() {
    //console.log(`Name: ${this.name}`);
  }
  append(value) {
    //Add a new node containing the value to the end.
    //const newTask = new Task(id, name, ...);
    const newNode = new Node(value, null, this.nodes[this.nodes.length - 1]);
    this.nodes.push(newNode);
  }
  prepend(value) {
    const newNode = new Node(value, this.nodes[0], null);
    // Set nextNode of the new node to the current head

    if (this.nodes.length === 0) {
      // If the list is empty, set the new node as both head and tail
      this.nodes.push(newNode);
    } else {
      this.nodes[0].setPrevNode(newNode);
      // Set the previous node of the current head to the new node
      this.nodes.unshift(newNode);
      // Update the head of the linked list to the new node
    }
  }
  size() {
    //return the total number of nodes
    return this.nodes.length;
  }
  head() {
    //return the first node
    if (this.nodes[0] == null) {
      return null;
    } else return this.nodes[0];
  }
  tail() {
    //return the last node.
    linkedListLength = this.nodes.length;
    if (this.nodes[linkedListLength - 1] == null) {
      return null;
    } else return this.nodes[linkedListLength - 1];
  }
  at(index) {
    //return the value at a specific index in the linked list
  }
  pop() {
    //removes the last value from the list.
    this.nodes.pop();
  }
  contains(value) {
    //returns true if the passed in value is in the list, otherwise false
    this.nodes.array.forEach((element) => {
      if (element.getData() === value) {
        return true;
      }
    });
    return false;
  }
  find(value) {
    //return the index where value is found, otherwise false.
  }
  toString() {
    //print object as a string node by node.
  }
}
