import { parse } from "date-fns";
export class Node {
  //
  //A node is a basic data structure that knows two things.
  //What its connected to, behind it, and ahead of it. "next" and "previous"
  //what data it stores,
  //Whether it is a head node, or a tail node.
  //Tail nodes have no next, and head nodes have no previous.
  //
  constructor(isHead, isTail, Data, nextNode, prevNode) {
    isHead = this.isHead;
    isTail = this.isTail;
    Data = this.data;
    nextNode = this.nextNode;
    prevNode = this.prevNode;
  }
  displayNodeDetails() {
    console.log(this.Data, this.prevNode, this.nextNode);
  }
  //
  // Getters
  //
  getIsHead() {
    return this.isHead;
  }

  getIsTail() {
    return this.isTail;
  }

  getData() {
    return this.data;
  }

  getNextNode() {
    return this.nextNode;
  }

  getPrevNode() {
    return this.prevNode;
  }

  //
  // Setters
  //
  setIsHead(isHead) {
    this.isHead = isHead;
  }

  setIsTail(isTail) {
    this.isTail = isTail;
  }

  setData(data) {
    this.data = data;
  }

  setNextNode(nextNode) {
    this.nextNode = nextNode;
  }

  setPrevNode(prevNode) {
    this.prevNode = prevNode;
  }
}
