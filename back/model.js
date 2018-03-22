var mongoose=require('mongoose');

var my=mongoose.Schema({

    Name:String,
    Age:Number

})
console.log("I am in model file")

var mydb=module.exports=mongoose.model('mydb',my);

module.exports.getData=function(callback){
    mydb.find(callback);
}
module.exports.addData=function(newdb,callback){
    mydb.create(newdb,callback);

}
module.exports.deleteData=function(id,callback){
    mydb.findByIdAndRemove(id,callback)
}

