const dynamoDbClient = require('../db/dynamoClient');

exports.getAllPosts = async () => {
    const params = {
      TableName: 'posts',
    };
  
    try {
      const data = await dynamoDbClient.scan(params).promise();
      return data.Items;
    } catch (error) {
      console.error("Error al obtener todos los posts: ", error);
      throw new Error('Error al obtener todos los posts');
    }
  };

exports.getPostById = async (postId, createdAt) => {
    const params = {
      TableName: 'posts',
      Key: {
        postId: postId,
        createdAt: createdAt,
      },
    };
  
    console.log("params: ", params);
  
    try {
      const { Item } = await dynamoDbClient.get(params).promise();
      return Item;
    } catch (error) {
      console.error(`Error al obtener el post con ID ${postId} y createdAt ${createdAt}: `, error);
      throw error; // Propagar el error para manejarlo en el controlador
    }
  };