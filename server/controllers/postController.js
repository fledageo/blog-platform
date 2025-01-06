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

    async getAllPosts(req, res) {
        const posts = await Post.find().populate("author", "name surname email")
        res.send({ status: "ok", payload: posts })
    }

    async getPostById(req, res) {
        try {
            const id = req.params.id
            const post = await Post.findById(id).populate("author", "name surname email")
            res.send({ status: "ok", payload: post })
        } catch (error) {
            console.log(error)
        }
    }

    async deletePostById(req, res) {
        const id = req.params.id
        const deleted = await Post.findByIdAndDelete(id)
        if(deleted){
            res.send({status:"ok",message:"successfuly"})
        }else{
            res.send({status:"error",message:"error"})
        }
    }
    async updateById(req, res) {
        const id = req.params.id
        const {title,content} = req.body
        
        const updated = await Post.findByIdAndUpdate(id, {title,content},{ new: true })
                                    .populate("author", "name surname email")
        if(updated){
            res.send({status:"ok",payload:updated})
        }else{
            res.send({status:"error"})
        }
    }
}

export default new PostController()