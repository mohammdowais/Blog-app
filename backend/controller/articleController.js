const { Articles } = require("../models/articleModel");
const { Users } = require("../models/userModel");

exports.getAllRecent = async (req, res) => {
  try {

    const articles = await Articles.find().where("status").equals("draft")

    console.log(header, title, userId);

    return res.status(200).json({ data: ["all articles"] });
  } catch (error) {
    console.log(e);
    return res.status(500).jsong({ message: e.message });
  }
};

exports.createArticle = async (req, res) => {
  try {
    const { title, body } = req.body;
    const {_id:userId,name } = req.payload

    if (!title || !body) {
      return res
        .status(400)
        .json({ message: "Invalid request, send title and body" });
    }

    const article = await Articles.create({ 
        title: title, 
        body: body,
        authorName:name,
        author:userId
    });
    return res.status(200).json({ message: "Article Published",data:article });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.likeArticle = async (req,res)=>{
    try{
        const {articleId} = req.params
        const {_id,name} = req.payload
        var message = "Liked"
        const user = await Users.findOne({_id})
        const article = await Articles.findOne({_id:articleId})
        if(user){
            const i = user.likedArticles.indexOf(articleId)
            if(i < 0){
                user.likedArticles.push(articleId)
            } else {
                message = "Unliked"
                user.likedArticles.splice(i,1)
            }


            if(message == "Liked"){
                article.likes += 1
            } else {
                article.likes += article.likes === 0? 0:-1
            }
            article.save()
            user.save()
            return res.status(200).json({message}) 
        } else {
            console.log("not found")
        }
        
    } catch(e){
        console.log(e)
    }
}

exports.publishArticle = async (req,res)=>{
    try{
        const {articleId} = req.params
        const article = await Articles.findOneAndUpdate({_id:articleId},{status:'Published'})
        if(article){
           return res.status(200).json({message:"Article Published"}) 
        }
        return res.status(404).json({message:"Article Not found"})
    } catch(e){
        return res.status(500).json({message:"Something went wrong"})
    }
}

exports.updateArticle = async (req,res)=>{
    try{
        const {_id,title,body} = req.body
        const {_id:userId} = req.payload

        if(!title || !body || !_id){
            return res.status(400).json({message:"Invalid request format"})
        }

        const article = await Articles.findOne({_id})
        if(!article) return res.status(404).json({message:"Not found"})
        if(article.author != userId){
            return res.status(401).json({message:"Not Authorized"})
        }
        const udpatedArticle = await Articles.updateOne({title,body})
        return res.status(200).json({message:"Article Update"})
    } catch(e){
        console.log(e)
        return res.status(500).json({message:"Something went wrong"})
    }
}