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
    }



let list = new Linkedlist();
list.addElement(10);
list.addElement(20);
list.addElement(30);
list.addElement(40);
list.addElement(50);
list.addFront(9);
list.addFront(8);
list.deleteEnd();
list.deleteEnd();
list.display();


