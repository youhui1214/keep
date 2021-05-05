

function LinkedList() {
    
    var Node = function (element) {
        this.element = element;
        this.next = null;
    }
    
    var length = 0;
    var head = null;
    
    this.append = function (element) {
        
        var node = new Node(element),
            current;
        
        if (head === null) {
            head = node
        } else {
            current = head;
            
            while (current.next) {
                current = current.next
            }
            
            current.next = node;
        }
        
        length++;
        
    }
    
    this.insert = function (position, element) {
    
    }
    
    this.remove = function (element) {
    
    }
    
    
}

var list = new LinkedList();

list.append(15);
list.append(10);

console.log(list)
