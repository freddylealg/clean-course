import { HttpClient } from "./02-open-close-c";


export class TodoService { 

    constructor( private httpClient: HttpClient){}

    async getTodoItems() {
        const data = this.httpClient.get('https://jsonplaceholder.typicode.com/todos/');
        return data;
    }
}


export class PostService {

    constructor( private httpClient: HttpClient){}
    
    async getPosts() {
        const data = this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
        return data;
    }
}


export class PhotosService {

    constructor( private httpClient: HttpClient){}

    async getPhotos() {
        const data = this.httpClient.get('https://jsonplaceholder.typicode.com/photos');
        return data;
    }

}