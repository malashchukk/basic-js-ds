const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
class Node {
  constructor(data){
    this.data = data; 
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor(){
    this.rootOfTree = null;
  }
  root() {
    if (!this.rootOfTree){
      return null;
    }
    return this.rootOfTree
  }

  add(data) {
    this.rootOfTree = addInside(this.rootOfTree, data);

    function addInside(node, data){
      if (!node){
        return new Node(data);
      }
      if (node.data === data){
        return node;
      }
      if (node.data > data){
        node.left = addInside(node.left, data);
      } else {
        node.right = addInside(node.right, data);
      }
      return node;

    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  has(data) {
    return isInside(this.rootOfTree, data);
    
    function isInside(node, data){
        // console.log(node.data);
        // console.log(data);
      if (!node){
        return false;
      }
      if (node.data === data){
        return true;
      }
      
    //   if (node.data > data){
    //     return isInside(node.left, data);
    //   } else {
    //     return isInside(node.right, data);
    //   } 
    return data < node.data ?
        isInside(node.left, data):
        isInside(node.right, data);

    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(data) {
      return withData(this.rootOfTree, data);
      
      function withData(node, data){
          if (!node){
              return null;
          }
          if (node.data === data){
              return node;
          }
          if (node.data > data){
            return withData(node.left, data);
          } else {
            return withData(node.right, data);
        }
      }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(data) {
      this.rootOfTree = removeNode(this.rootOfTree, data);
      
      function removeNode(node, data){
          if (!node){
              return null;
          }
          if (node.data > data){
              node.left = removeNode(node.left, data);
              return node;
          } else if ( node.data < data){
              node.right = removeNode(node.right, data);
              return node;
          } else {
              if (!node.left && !node.right){
                  return null;
              }
              if (!node.left){
                  node = node.right;
                  return node;
              }
              if (!node.right){
                  node = node.left;
                  return node;
              } 
              
                  let minOfRight = node.right;
                  
                  while (minOfRight.left){
                      minOfRight = minOfRight.left;
                      console.log(1);
                  }
                  
                  node.data = minOfRight.data;
                  node.right = removeNode(node.right, minOfRight.data);
                  
                  return node;
                  
              
          }
      }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
      return minOfTree(this.rootOfTree);
      
      function minOfTree(node){
          if (!node){
              return null;
          }
          if (!node.left){
              return node.data;
          }
          let minimum = node.left;
          while(minimum.left){
              minimum = minimum.left;
          } 
          return minimum.data;
      }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
            return maxOfTree(this.rootOfTree);
      
      function maxOfTree(node){
          if (!node){
              return null;
          }
          if (!node.right){
              return node.data;
          }
          let maximum = node.right;
          while(maximum.right){
              maximum = maximum.right;
          } 
          return maximum.data;
      }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};