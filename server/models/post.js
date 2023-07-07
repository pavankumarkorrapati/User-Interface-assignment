const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  
  comment: [String]
});

const Post = mongoose.model("Post", postSchema);

async function createpost(comment) { 
  const post = await getPost(comment);
  const newPost = await Post.create({
    comment: comment
  });

  return newPost._doc;
}



module.exports = {createpost};
