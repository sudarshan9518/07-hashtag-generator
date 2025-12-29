// SDK initialization

const ImageKit = require("imagekit");

const imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY ,
    urlEndpoint : process.env.IMAGEKIT_URL_ENDPOINT
});

async function uploadFile (file, filename){
    const reponse = await imagekit.upload({
        file : file,  // required
        fileName : filename, // required
        folder: "hashtag_generation"
    })
    return reponse
}


module.exports = uploadFile;