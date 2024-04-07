const postsService = require('../services/postService');

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await postsService.getAllPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).send(error.toString());
  }
};

exports.getPostById = async (req, res) => {
    const postId = req.params.postId; // Asumiendo que la ruta es algo como /posts/:postId
    const createdAt = req.query.createdAt; // Asumiendo que el query param es algo como /posts/:postId?createdAt=123456789
  
    try {
      const post = await postsService.getPostById(postId,createdAt);
      if (!post) {
        return res.status(404).send({ message: "Post no encontrado." });
      }
      res.json(post);
    } catch (error) {
      res.status(500).send(error.toString());
    }
  };
  

exports.createPost = async (req, res) => {
  // Implementar lógica para crear un post
};

exports.updatePost = async (req, res) => {
  // Implementar lógica para actualizar un post
};

exports.deactivatePost = async (req, res) => {
  // Implementar lógica para desactivar (eliminar) un post
};
