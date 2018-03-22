var express=require('express');
var route=express.Router();
var mydb=require('./model.js');

route.get('/',function(req,res){

    mydb.getData(function(err,data){
        if(err) throw err;
        res.json(data);
    })
})
console.log("I am in routes file dont worry")
route.post('/',function(req,res){
    var newdb={
        Name:req.body.Name,
        Age:req.body.Age
    }
    mydb.addData(newdb,function(err,data){
        if(err) throw err;
        res.json(data);
    })
})

route.delete('/:_id',function(req,res){
     mydb.deleteData(req.params._id,function(err,data){
         if(err) throw err;
         res.json(data);
     })
})
module.exports=route