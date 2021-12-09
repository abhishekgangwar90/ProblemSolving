function Node(val){
  this.val = val;
  this.left = null;
  this.right = null;
}


class BST{
  constructor(){
    this.root = null;
    this.bfs = [];
  }


  insert(val, head){
    if(!this.root){
      let newNode = new Node(val);
      this.root = newNode;
      return this;
    }

    let current = head ? head : this.root;

    console.log('current', current.val, val, current.val > val)
      // if current.val < VAL
    if(val > current.val){
      // base case
      if(!current.right){
        let newNode = new Node(val);
        current.right = newNode;
      } else{
        this.insert(val, current.right)
      }
      return this;
    }

    // if current.val > VAL
    if(val < current.val){
      // base case
      if(!current.left){
        let newNode = new Node(val);
        current.left = newNode;
      } else{
        this.insert(val, current.left)
      }
      return this;
    }
  }


  find(node){
    if(!this.root){
      return false;
    }

    let current = this.root;

    while(current){
      if(current.val === node){
        return true;
      }

      if(current.val > node){
        current = current.left
      }
      if(current.val < node){
        current = current.right
      }
    }

    return false;
  }

  DFS(node){
    let current = node ? node : this.root;

    if(!current){
      return [];
    }

    if(current.val) this.bfs.push(current.val);
    if(current.left){
      this.bfs.concat(this.DFS(current.left));
    }
    if(current.right){
      this.bfs.concat(this.DFS(current.right));
    }
    return this.bfs
  }
}