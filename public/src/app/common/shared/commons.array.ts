export class CommonsArray extends Array {

  public keyName;
  private constructor(items) {
    super(...items)
  }

  static create(): CommonsArray {    
    return Object.create(CommonsArray.prototype);
  }

  setKeyName(keyName?:any) {
    this.keyName=keyName;
  }

  addElements(data: any[]) {
    for(let element of data) {
      this.push(element);
    }
  }

  addElementsMissing(data: any[]) {
    for(let element of data) {
      if(!this.exist(element))
        this.push(element);
      
    }
  }

   exist(element:any) {
    
    for(let i =0; i<this.length;i++) {
      if(element[this.keyName] == this[i][this.keyName] ) {
        return true
      }
        
    }
    return false
   }
  

  addElement(element:any) {
    this.push(element);
    
  }

  editElement(elementEdit:any) {
    for(let i =0; i<this.length;i++) {
      if(elementEdit[this.keyName] == this[i][this.keyName] ) {
        this[i] = elementEdit;
        break;
      }
        
    }
  }

  getElement(id:string) {
    for(let i =0; i<this.length;i++) {
      if(id == this[i][this.keyName] ) {
        return this[i];
      }
        
    }

  }
  
  
  removeElementByElement(element:any) {
    let elementfind = this.getElement(element[this.keyName]) 
    var index = this.indexOf(elementfind); 
      if (index > -1) {
        this.splice(index, 1);
      }
  }
  
  removeElementById(elementId:any) {
    let elementfind = this.getElement(elementId) 
    var index = this.indexOf(elementfind); 
      if (index > -1) {
        this.splice(index, 1);
      }
  }
}

