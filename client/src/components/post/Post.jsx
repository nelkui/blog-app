import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src="post1.png" alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">hihihih</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        deserunt laborum aspernatur sequi et suscipit, explicabo quod dolores
        illum! Quasi amet architecto nihil sit deleniti aut facere quaerat
        impedit doloribus!
      </p>
    </div>
  );
}
