const { ErrorResponse } = require('../../helpers/responseHandler')
const responseMessages = require('../../helpers/responseMessages')

const { bucket } = require("../../../config/firebase");
const { v4: uuidv4 } = require("uuid");
const Post = require("../../models/Post");
const Media = require('../../models/Media');

const uploadToFirebase = async (file) => {
  try {
    const fileName = `media/${uuidv4()}_${file.originalname}`;
    const fileUpload = bucket.file(fileName);
    const stream = fileUpload.createWriteStream({
      metadata: {
        contentType: file.mimetype,
      },
    });

    return new Promise((resolve, reject) => {
      stream.on("error", (error) => reject(error));
      stream.on("finish", async () => {
        await fileUpload.makePublic();
        const publicUrl = `https://storage.googleapis.com/${bucket.name}/${fileName}`;
        resolve(publicUrl);
      });
      stream.end(file.buffer);
    });
  } catch (error) {
    throw new ErrorResponse(error.message, error.statusCode || 500)
  }

};

const uploadMedia = async (file, postId) => {
    const mediaType = file.mimetype;
    const allowedMediaTypes = ['image/jpeg', 'image/png', 'image/gif', 'video/mp4', 'video/avi', 'video/mkv']
  try {
    const isPostExists = await Post.findByPk(postId)
    if (!isPostExists) {
      throw new ErrorResponse(responseMessages.POST_NOT_FOUND, 404)
    }
    if (!allowedMediaTypes.includes(mediaType)) {
      throw new ErrorResponse(responseMessages.INVALID_MEDIATYPE, 415)
    }
    const mediaUrl = await uploadToFirebase(file)
    const media = await Media.create({
      mediaType, mediaUrl, postId
    })
    return media
  } catch (error) {
    throw new ErrorResponse(error.message, error.statusCode || 500)
  }
}

module.exports = { uploadMedia }