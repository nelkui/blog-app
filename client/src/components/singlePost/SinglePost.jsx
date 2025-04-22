import "./singlePost.css";

export default function SinglePost() {
  return (
    <div>
      <div className="singlePost">
        <div className="singlePostWrapper">
          <img className="singlePostImg" src="kay.png" alt="" />
          <h1 className="singlePostImg">
            Lorem ipsum dolor sit amet
            <div className="singlePostEdit">
              <i className="singlePostIcon fas fa-trash-alt"></i>
              <i className="singlePostIcon fas fa-edit"></i>
            </div>
          </h1>
          <div className="singlePostInfo">
            <span className="singlePostAuthor">
              Author: <b> Waithera</b>
            </span>
            <span className="singlePostDate">
              Date: <b> 1 hour ago</b>
            </span>
          </div>
          <p className="singlePostDesc">
            Volleyball: where parents' adrenaline rush meets their bank
            account's worst nightmare. It's a thrilling adventure of cheering,
            traveling, and mastering the art of speed sleeping in overpriced
            hotels. Entry fees, parking spots, and endless miles – it's a
            journey of love, sweat, and tears. But hey, seeing your kid's face
            light up with joy is worth all the chaos and financial sacrifices.
            So, buckle up, folks, and enjoy the wild ride of volleyball
            parenting – where the only thing more exhausting than the
            tournaments is trying to keep up with your kid's energy levels.
            #volleyball
          </p>
        </div>
      </div>
    </div>
  );
}
