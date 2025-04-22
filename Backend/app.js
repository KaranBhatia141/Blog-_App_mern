const express = require('express');// it provide web server to the appplication
const mongoose = require('mongoose'); // use for db
const cors = require('cors'); // it help to connect froenend to backend
const jwt = require('jsonwebtoken'); // it help to authenticate, user verifiying  storing session
const bcrypt = require('bcryptjs');// it use to protect user password with method of hashing
const User = require('./models/User'); 
const Post = require('./models/Post'); 
const dotenv = require('dotenv'); // require dotenv for enviorment variable 


dotenv.config();
// JWT_SECRET = 'karan';  // jwt secert key that help for to identiy that session is created by you server its a heart of token

mongoose.connect(process.env.MongoDB_URL)                               //("mongodb://127.0.0.1:27017/Blog-app") // its is a part to connect nodejs to momgodb 
.then(()=>{
    console.log("DB connected sucessfully");  // display
})
.catch((err)=>{
     console.log(err,'DB not connected'); //display
     
})

const app = express();  // instance of server 
app.use(cors());  // calling cors connect backend or frontend
app.use(express.json()); //it basicly use to under stand incoming data is form of json


// api 
// register 
app.post('/register' , async(req , res)=>{
 const {username , password} = req.body; // require username or password 
 const hash = bcrypt.hashSync(password); // secure your password with help of hasing
 try{
    const user = new User({     
        username,
        password:hash,
    });
    await user.save();   // save user in db
    res.status(201).send('User Created'); // response to client
 }catch(err){
    res.status(400).send('Error creating user'); // response to client
 }
});

// login 
app.post('/login' ,async (req , res)=>{
 const {username , password}  = req.body;
 const user = await User.findOne({username});
 if(!user || !bcrypt.compareSync(password,user.password)) {    // copmparing passwoed that user is legitimate or not
    return res.status(401).send('Indiviual crediential');  // response to client
 }
 const token = jwt.sign({id:user._id},process.env.JWT_SECRET);  // token that store clint data or information ,sign to user data 
 res.json({token});  // header response

});

// create post 

app.post('/posts' ,async (req,res)=>{  // post api 
try{

 const newPost =  new Post(req.body);   // post require from body 
 await newPost.save(); // save in the db 
 res.status(201).json(newPost);

}catch(err){
  res.status(500).json({err:err.message});
}
});

// to get all post from db
app.get('/', async(req,res)=>{     // get all post from db 
    try{
     const posts = await Post.find().sort({ createdAt: -1 });  
     res.json(posts);  

    }catch(err){
        res.status(500).json({error:'Faild to fetch posts'});
    }
})



const PORT = process.env.PORT || 8080;   // assign port 
app.listen(PORT ,()=>{         // calling server 
    console.log(`Server is connected at http://localhost:${PORT}`); // diaplay
    
})
