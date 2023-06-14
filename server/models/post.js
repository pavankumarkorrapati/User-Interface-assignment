const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
   
    comment: { type: String, required: true}
   
  })
  
  
  const Post = mongoose.model("Post", postSchema);
  

  async function comment(comment) { 
    const info = await comment(comment);
  
    const newPost = await Post.create({
     comment: comment
    });
  
    return newPost;
  }

  module.exports = {comment};