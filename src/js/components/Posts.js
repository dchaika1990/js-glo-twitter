import Post from "./Post";

class Posts {
	constructor({posts = []} = {}) {
		this.posts = posts;
	}

	addPost(tweet){
		const post = new Post(tweet);
		this.posts.push(post)
	}
	deletePost(tweet){

	}
	likePost(id){

	}
}

export default Posts;