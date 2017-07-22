// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx

// Should have the methods: insert, contains, and depthFirstForEach.
// insert(value) inserts the new value at the correct location in the tree.
// contains(value) searches the tree and returns true if the the tree contains the specified value.
// depthFirstForEach(cb) should iterate over the tree using DFS and passes each currNode of the tree to the given callback function.

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(val) {
    // First number given is the root. For each number, if greater than currNode go right, if smaller than go left.
    // Create new currNode, then figure out where to put that new currNode (left or right).
    const newNode = new BinarySearchTree(val);

    if (this.value > val && this.left === null) {
      this.left = newNode;
    } else if (this.value > val) {
      this.left.insert(val);
    } else if (this.value < val && this.right === null) {
      this.right = newNode;
    } else if (this.value < val) {
      this.right.insert(val);
    }
  }

  contains(searchTerm) {
    // TODO: WTF.
    let doesContain = false; // Create flag.
    if (searchTerm === this.value) doesContain = true;

    const recurSearch = (node) => {
      if (searchTerm === node.value) doesContain = true; // base case.
      if (searchTerm > node.value) {
        recurSearch(node.right); // Go right.
      } else if (searchTerm < node.value) {
        recurSearch(node.left); // Otherwise go left
      }
    };

    recurSearch(this);
    return doesContain;
  }

  depthFirstForEach(cb) {
    console.log(cb);
  }
}

module.exports = BinarySearchTree;
