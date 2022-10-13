import { postPorvider } from "./05-dependency-c";

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    constructor( private postPorvider: postPorvider) {}

    async getPosts() {
        // old code
        // const jsonDB = new LocalDataBaseService();
        // const jsonDB = new JsonDataBaseService();

        this.posts = await this.postPorvider.getPosts();

        return this.posts;
    }
}