const mongoose=require('mongoose');
mongoose.connect("mongodb://172.21.0.2:27017/lab3");
module.exports=mongoose;
