let express = require('express');
let app = express();
let dotenv = require('dotenv');
dotenv.config();

let port = process.env.PORT || 7800;
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let mongourl = "mongodb+srv://test:test123@cluster0.qgh2x.mongodb.net/?retryWrites=true&w=majority"
let db;



app.get('/',(req,res)=>{
    res.send('hi from express')
})

app.get('/location',(req,res)=>{
    db.collection('location').find().toArray((err,result) =>{
        if(err) throw err;
            res.send(result)
            
    })
   
})

app.get('/products',(req,res)=>{
    db.collection('products').find().toArray((err,result) =>{
        if(err) throw err;
            res.send(result)
            
    })
   
})

app.get('/language',(req,res)=>{
    db.collection('language').find().toArray((err,result) =>{
        if(err) throw err;
            res.send(result)
            
    })
   
})

app.get('/cost',(req,res)=>{
    db.collection('sortbycost').find().toArray((err,result) =>{
        if(err) throw err;
            res.send(result)
            
    })
   
})

app.get('/brand',(req,res)=>{
    db.collection('sortbybrand').find().toArray((err,result) =>{
        if(err) throw err;
            res.send(result)
            
    })
   
})


MongoClient.connect(mongourl,(err,client)=>{
    if(err) console.log(`error while connecting`);
    db = client.db('edurekaintern')
    app.listen(port,() => {
        console.log(`listening on port ${port}`)
})


})