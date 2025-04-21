const mongoose = require('mongoose');  // mongoose provide  odm to data base to save data 

const PostSchema = new mongoose.Schema({

title: String,
content: String,
author: String,
createdAt: {
    type: Date,
    default: Date.now,
  },

});

let Post = mongoose.model('Post' , PostSchema);  // saving in post variable

module.exports = Post;   // export to use in routing