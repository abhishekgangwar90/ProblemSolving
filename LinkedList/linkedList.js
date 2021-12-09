function Node(val, next){
  this.val = val;
  this.next = next;
}

class LinkedList{
  constructor(){
    this.head = null;
    this.end = null;
    this.length = 0;
  }

 // pushing in the end
  push(val){
    let newNode = new Node(val, null)
    if(this.length === 0){
      this.head = newNode;
      this.end = newNode;
    } else{
      this.end.next = newNode;
      this.end = newNode;
    }
    this.length++;
    return this.traverse();
  }

  traverse(){
    let current = this.head;
    let str = '';
    while(current){
      str = str + ' -> ' + current.val;
      current  = current.next;
    }
    return str;
  }


  pop(){
    if(this.length === 1){
      this.head = null;
      this.end = null
      return this;
    }

    let prev = this.head;
    let current = prev.next;
    
    while(current){
      if(current.next !== null){
        let temp = current;
        current= current.next;
        prev = temp; 
      } else{
        prev.next = null;
        this.end = prev;
        this.length--;
        return this.traverse();
      }
    }
  }

  insert(val, pos){
    let current = this.head;
    let counter = 0;

    if(pos > this.length-1){
      return  'Could not find position'
    }

    while(current){
      if(counter < pos){
        current = current.next
        counter++;
      } else{
        let newNode = new Node(val);
        let temp = current.next;
        current.next = newNode;
        newNode.next = temp;
        this.length++;
        return this.traverse()
      }
    }

    return 'Could not find position'
  }

  reverse(){
    let current = this.head;
    let next = null;
    let prev = null;
    
    // swaping head and end
    this.head = this.end;
    this.end = current;

    while(current){
      next =  current.next;
      current.next = prev;
      prev = current;
      current = next
    }
    return this;
  }
}