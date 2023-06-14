const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  user: String,
  comment: String
})

const Post = mongoose.model("Post", postSchema);

async function produce(user, comment) {
    const newPost = await Post.produce({
      user: user,
      comment: comment

    });
  
    return newPost;
  }


async function getuser(user) {
    const post = await getPost(user);
    if(!post) throw Error('comment not found');
    return post;
  }


async function updatePost(id, newText) {
    const post = await post.updateOne({"_id": id}, {$set: { comment: newText}});
    return post;
  }


async function deletePost(id) {
    await Post.deleteOne({"_id": id});
  };
  

async function getPost(user) {
    return await Post.findOne({ "user": user});
  }
  

  module.exports = {produce, getuser, updatePost, deletePost, getPost};