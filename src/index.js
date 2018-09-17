class Sorter {
  constructor() {
    this.array = [];
    this.length = 0;
    this.compare = null;
  }

  add(element) {
    this.array.push(element);
    this.length+=1;
  }

  at(index) {
    return this.array[index];
  }
  //in es6 i need "_" bcs if i do not use undersrcore it will  
  //calls setter(getter) again and again, wich leads to an infinite recursion.
  get length() {
    return this._length;
  }

  set length(value) {
    this._length = value; 
  }

  toArray() {
    return this.array;
  }
  // if we do not have a template how to sort (in setComparator)
  // it will sort just in regular mode (in ascending style)
  sort(indices) {
    var ar = [];
    for(var i = 0; i<indices.length;i++){
      ar.push(this.array[indices[i]]);
    }
    //we need to sort indices too in ascending mode,
    //otherwise it will not change our array correct.
    indices = indices.sort((a,b)=>a-b);
    // before we do not have any template our compare function is equal null
    // and before sorting we check if we have a template for sorting
    if(this.compare === null){
      ar = ar.sort((a,b)=>a-b);
    }else{
      ar = ar.sort(this.compare);
    }
    //after sorting we need to place our elements in indices we choose to sort originally
    for(var i=0;i<ar.length;i++){
      this.array[indices[i]] = ar[i];
    }
  }
  // we initial our compare function
  setComparator(compareFunction) {
    this.compare = compareFunction;
  }
}

module.exports = Sorter;
