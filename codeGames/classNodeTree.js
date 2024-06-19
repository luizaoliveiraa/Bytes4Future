class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class Tree {
  constructor() {
    this.root = null;
  }
  add(data) {
    const node = new Node(data);
    if (!this.root) {
      this.root = node;
    } else {
      let current = this.root;
      while (current) {
        if (current.data > data) {
          if (!current.left) {
            current.left = node;
            break;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = node;
            break;
          }
          current = current.right;
        }
      }
    }
    return this;
  }
  has(data) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;
    while (!found && current) {
      if (current.data > data) {
        current = current.left;
        continue;
      }
      if (current.data < data) {
        current = current.right;
        continue;
      }
      return true;
    }
    return false;
  }

  find(data) {
    if (!this.root) return undefined;
    let current = this.root;
    let element;
    while (!element && current) {
      if (data < current.data) {
        current = current.left;
        continue;
      }
      if (data > current.data) {
        current = current.right;
        continue;
      }
      element = current;
    }
    return element;
  }
}
