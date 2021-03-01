var express=require('express');
var app=express();
var bodyParser=require('body-Parser');
var connection=require('./model/database');
app.set("views","./views")
app.set("view engine","ejs");
const{createConnection }=require('mysql');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname));
app.use('/login',function(req,res){
    console.log("Sent");
    res.render('Task1');
});
app.post('/loginv',function(req,res){
    var name=req.body.name;
    var rollno=req.body.roll;
    var date=req.body.date;
    console.log("submitted");
        connection.query('select * from ejs_details where name like ? and rollno like ?',[name,rollno],(err,results)=>{
        if(err) throw err;
        console.log("shhhhh");
        if(results)
        {
            connection.query('select ejs_marks.*,ejs_details.name from ejs_details join ejs_marks on ejs_marks.rollno=ejs_details.rollno and ejs_marks.dateofexam=ejs_details.dateofexam where ejs_details.rollno like ? and ejs_details.dateofexam like ?',[rollno,date],(err,results)=>{
                if(err)throw err
                if(results){
                    res.render("mark",{userData:results});
                    console.log(results);
                    console.log("Success")
                }
            })
        }
    })
});
app.use('/products',function(req,res){
    console.log("Sent");
    res.render('Task2');
});
app.post('/productsv',function(req,res){
    console.log("button pressed");
    connection.query('select * from products where price>16000',(err,data)=>{
        if(err)throw err
        if(data)
        {
            res.render("products",{userData:data});
            console.log("displayed");
        }
    });
});
app.use('/temp',function(req,res){
    console.log("Sent");
    res.render('Task3');
});
app.post('/tempv',function(req,res){
    console.log("button pressed");
    connection.query('select country,high,low from temperature',(err,data)=>{
        if(err)throw err
        if(data)
        {
            res.render("temp",{userData:data});
            console.log("displayed");
        }
    });
});
app.listen(5000,()=>{
    console.log("Server is listening at port 5000");
});