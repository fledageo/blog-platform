import Post from "../models/Post.js"
class PostController {
    async addPost(req, res) {
        const postData = req.body

        try {
            if (postData) {
                const post = new Post(postData)
                post.save()
                res.send({ status: "ok", message: "Post shared" })
            }
        } catch (error) {
            console.log(error)
        }
    }
    async getAllPosts(req,res){
        const posts = await Post.find().populate("author","name surname email")
        res.send({status:"ok",payload:posts})
    }
}

export default new PostController()