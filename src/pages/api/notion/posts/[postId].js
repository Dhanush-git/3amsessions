import { getPost } from "@/utils/notion";

export default async function post(req, res){
    const query = req.query;
    const { postId } = query;
    const response = await getPost(postId)
    res.status(200).json({ data: response })
}