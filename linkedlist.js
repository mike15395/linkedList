class Node{
    constructor(data) {
        this.data = data;
        this.nextAddress = null;
    }
}



class Linkedlist{
   
    constructor(){
        this.root = null;
    }
    
    addElement(data) {
        
        let newNode = new Node(data);

        if (this.root == null) {
            this.root = newNode;
        }
        else {
            let temp = this.root;
            while (temp.nextAddress != null) {
                temp = temp.nextAddress;
            }
            temp.nextAddress = newNode;
        }
        
    }

    addFront(data) {
        
        let newNode = new Node(data);

        if (this.root == null) {
            this.root = newNode;
        }
        else {
            newNode.nextAddress = this.root;
            this.root = newNode;
        }

    }

    display() {

        if (this.root == null) {
            console.log('list empty');
            return;
        }
        else {
            let temp = this.root;
            while (temp != null) {
                console.log(temp.data);
                temp = temp.nextAddress;
            }
        }
    }

    deleteEnd() {
        
        if (this.root == null) {
            console.log('list empty cannot delete');
            return;
        }
        else if (this.root.nextAddress == null) {
            this.root = null;

        }
        else {
            let temp = this.root;
            while (temp.nextAddress.nextAddress != null) 
                temp = temp.nextAddress;
            
             temp.nextAddress = null;
        }

    }
    
    insertAt(data,index) {
        
        let newNode = new Node(data);
         
        let temp = this.root;
        for (let i = 0; temp.nextAddress!=null && i < index-1; i++) {
            temp = temp.nextAddress;
        }
        let next = temp.nextAddress;
        newNode.nextAddress = next;
        temp.nextAddress = newNode;
    }

    deleteAt(index) {

        if (this.root == null) {
            console.log('list empty cannot delete');
            return;
        }
        else if (index == 0 || this.root.nextAddress == null) {
            let temp = this.root;
            this.root = temp.nextAddress;
            temp.nextAddress = null;
            
        }
        else {
            let temp = this.root;
            for (let i = 0; i < index - 1; i++) {
                temp = temp.nextAddress;
            }
            temp.nextAddress = temp.nextAddress.nextAddress;
        }
        
    }

    }


let list = new Linkedlist();
list.addElement(10);
list.addElement(20);
list.addElement(30);
list.addElement(40);
list.addElement(50);
list.addFront(9);
list.addFront(8);
list.insertAt(12, 3);
list.insertAt(19, 4);
list.display();
list.deleteAt(0);
list.display();
list.deleteAt(7);
list.display();