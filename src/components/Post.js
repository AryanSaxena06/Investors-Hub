import classnames from "classnames";
import React from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
import {
  Article,
  Description,
  SharedActor,
  SharedImage,
  SocialActions,
  SocialCounts,
} from "./Main";

const Post = ({ article, myName, identity }) => {
  const [liked, setLiked] = useState(false);
  const [showTextBox, setShowTextBox] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [text, setText] = useState("");

  const handleCommentClick = () => {
    setShowTextBox(true);
    setText("");
  };

  const handlePost = () => {
    setShowTextBox(false);
    setShowComment(true);
  };

  return (
    <Article>
      <SharedActor>
        <a>
          <img src={article.actor.image} alt="" />
          <div>
            <span>{article.actor.title}</span>
            <span>{article.actor.description}</span>
            <span>{article.actor.date.toDate().toLocaleDateString()}</span>
          </div>
        </a>

        <button>
          <img src="images/ellipsis.png" alt="" />
        </button>
      </SharedActor>

      <Description>{article.description}</Description>

      <SharedImage>
        <a>
          {!article.sharedImg && article.video ? (
            <ReactPlayer width={"100%"} url={article.video} />
          ) : (
            article.sharedImg && <img src={article.sharedImg} />
          )}
        </a>
      </SharedImage>

      <SocialCounts>
        <li>
          <button>
            <img src="images/like-icon.png" alt="" />
            <img src="images/clap-icon.png" alt="" />
            <span></span>
          </button>
        </li>
        <li>
          <a>{`${article.comments + liked}`} </a>
        </li>
      </SocialCounts>

      <SocialActions>
        <button
          className={classnames({
            notLiked: !liked,
            liked: liked,
          })}
          onClick={() => setLiked(!liked)}
        >
          <i class="far fa-thumbs-up"></i>
          <span>{!liked ? "Like" : "Dislike"}</span>
        </button>
        <button onClick={handleCommentClick}>
          <i class="far fa-comment"></i>
          <span>Comment</span>
        </button>
        {/* <button>
          <i class="fas fa-share"></i>
          <span>Share</span>
        </button> */}
      </SocialActions>
      {showTextBox && (
        <div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={handlePost}>Post</button>
        </div>
      )}
      {showComment && (
        <div className="commentDiv">
          <div className="commentProfile">{myName}</div>
          <div className="commentText">{text}</div>
        </div>
      )}
    </Article>
  );
};

export default Post;
