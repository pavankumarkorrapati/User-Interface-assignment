const express = require("express");
const Post = require('../models/post');
const router = express.Router();

router
.post('/createpost', async (req,res) => {
    try{
     const post = await Post.produce(req.body.user, req.body.comment);  
     res.send({...post});
    } catch(error){
      res.status(401).send({message: error.message});
    }
 })  
 .post('/getuser', async (req,res) => {
    try{
     const post = await Post.getuser(req.body.user);  
     res.send({...post});
    } catch(error){
      res.status(401).send({message: error.message});
    }
 })
.put('/update', async (req,res) => {
    try{
     const post = await Post.updatePost(req.body.id,req.body.newText);  
     res.send({...post, password: undefined});
    } catch(error){
      res.status(401).send({message: error.message});
    }
 })
 .delete('/delete', async (req,res) => {
    try{
     await Post.deletePost(req.body.id);  
     res.send({ success: "Account successfully Deleted" });
    } catch(error){
      res.status(401).send({message: error.message});
    }
 })

 module.exports = router;