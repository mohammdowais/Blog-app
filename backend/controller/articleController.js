const { Articles } = require("../models/articleModel"); // Importing Articles model
const { Users } = require("../models/userModel"); // Importing Users model

// Controller function to get all recent published articles
exports.getAllRecent = async (req, res) => {
  try {
    const articles = await Articles.find({ status: "published" }); // Find all published articles
    return res.status(200).json({ data: articles }); // Return articles data
  } catch (error) {
    console.log(error); // Log any errors
    return res.status(500).json({ message: error.message }); // Return internal server error
  }
};

// Controller function to create a new article
exports.createArticle = async (req, res) => {
  try {
    const { title, body } = req.body; // Destructuring title and body from request body
    const { _id: userId, name } = req.payload; // Destructuring userId and name from request payload

    // Check if title or body is missing
    if (!title || !body) {
      return res
        .status(400)
        .json({ message: "Invalid request, send title and body" });
    }

    // Create new article
    const article = await Articles.create({
      title: title,
      body: body,
      authorName: name,
      author: userId,
    });
    return res
      .status(200)
      .json({ message: "Article Published", data: article }); // Return success message
  } catch (error) {
    return res.status(500).json({ message: error.message }); // Return internal server error
  }
};

// Controller function to update an article
exports.updateArticle = async (req, res) => {
  try {
    const { _id, title, body } = req.body; // Destructuring _id, title, and body from request body
    const { _id: userId } = req.payload; // Destructuring userId from request payload

    // Check if title, body, or _id is missing
    if (!title || !body || !_id) {
      return res.status(400).json({ message: "Invalid request format" });
    }

    // Find article by _id
    const article = await Articles.findOne({ _id });
    if (!article) return res.status(404).json({ message: "Not found" });
    if (article.author != userId) {
      return res.status(401).json({ message: "Not Authorized" });
    }
    // Update article
    const updatedArticle = await Articles.updateOne({ _id }, { title, body });
    return res.status(200).json({ message: "Article Updated" }); // Return success message
  } catch (error) {
    console.log(error); // Log any errors
    return res.status(500).json({ message: "Something went wrong" }); // Return internal server error
  }
};

// Controller function to publish an article
exports.publishArticle = async (req, res) => {
  try {
    const { articleId } = req.params; // Get articleId from request parameters
    const article = await Articles.findOneAndUpdate(
      { _id: articleId },
      { status: "published" }
    ); // Find and update article status to published
    if (article) {
      return res.status(200).json({ message: "Article Published" }); // Return success message
    }
    return res.status(404).json({ message: "Article Not found" }); // Return article not found message
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" }); // Return internal server error
  }
};

// Controller function to get articles of a user based on status (draft or published)
exports.getUsersArticle = async (req, res) => {
  try {
    const { status } = req.params; // Get status from request parameters
    const { _id: author } = req.payload; // Destructuring userId from request payload

    // Check if status is either draft or published
    if (
      status.toLowerCase() === "draft" ||
      status.toLowerCase() === "published"
    ) {
      // Find articles based on status and author
      const articles = await Articles.find({ status, author });
      return res
        .status(200)
        .json({ message: "Found Articles", data: articles }); // Return found articles
    } else {
      return res.status(401).json({ message: "Invalid request" }); // Return invalid request message
    }
  } catch (error) {
    console.log(error); // Log any errors
    return res.status(500).json({ message: "Internal Server error" }); // Return internal server error
  }
};

// Controller function to like or unlike an article
exports.likeArticle = async (req, res) => {
  try {
    const { articleId } = req.params; // Get articleId from request parameters
    const { _id, name } = req.payload; // Destructuring userId and name from request payload
    var message = "Liked"; // Default message set to liked

    // Find user and article
    const user = await Users.findOne({ _id });
    const article = await Articles.findOne({ _id: articleId });
    if (user) {
      const i = user.likedArticles.indexOf(articleId);
      if (i < 0) {
        user.likedArticles.push(articleId);
      } else {
        message = "Unliked"; // Change message to unliked
        user.likedArticles.splice(i, 1);
      }

      // Update article likes count
      if (message == "Liked") {
        article.likes += 1;
      } else {
        article.likes += article.likes === 0 ? 0 : -1;
      }
      article.save(); // Save article
      user.save(); // Save user
      return res.status(200).json({ message }); // Return success message
    } else {
      return res.status(401).json({message:"Login to perform the action"})
    }
  } catch (error) {
    console.log(error); // Log any errors
    return res.status(500).json({ message: "Something went wrong" }); // Return internal server error
  }
};