function myArray(){
    Object.defineProperty(this,'length',{
        value:0,
        enumerable:false,
        writable:true,
    })
}

myArray.prototype.map=function(cb){
    for(index in this){
        if(this.hasOwnProperty(index)){
            cb(this.index,index,this)
        }
    }
}

let arr = new myArray()

arr.map(function(val){
    console.log(val)
})