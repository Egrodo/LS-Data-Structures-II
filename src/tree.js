// Should have the methods: addChild, and contains
// Each node on the tree should have a value property and a children array.
// addChild(value) should accept a value and add it to that node's children array.
// contains(value) should return true if the tree or its children the given value.
// When you add nodes to the children array use new Tree(value) to create the node.
// You can instantiate the Tree class inside of itself.

class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  addChild(val) { // Should accept a value and add it to that node's children array.
    // Create a new node/branch that is an object with the value and empty children array.
    const newNode = new Tree(val); // const newNode = {value: val, children: []};
    this.children.push(newNode); // Push that new node onto the (already established) tree.
  }
  contains(searchTerm) {
    // Depth-First-Traversal.
    // Return true if it does contain, false if it does not.
    if (this.value === searchTerm) return true;
    let doesContain = false;

    const recurSearch = (children) => {
      children.forEach((child) => {
        if (doesContain) return;
        if (child.value === searchTerm) doesContain = true; // If we found it, change flag to true.
        if (child.children.length > 0) recurSearch(child.children);
      });
    };

    recurSearch(this.children); // Provoke recursive function with the top level children.
    return doesContain;
  }
}

module.exports = Tree;
