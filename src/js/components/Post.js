class Post {
	constructor({id, userName, nickName, postDate, text, img, likes}) {
		this.id = id;
		this.userName = userName;
		this.nickName = nickName;
		this.postDate = postDate;
		this.text = text;
		this.img = img;
		this.likes = likes;
		this.liked = false;
	}

	changeLike() {
		this.liked = !this.liked;
		this.liked ? this.likes++ : this.likes--;
	}
}

export default Post;