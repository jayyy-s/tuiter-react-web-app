import React from "react";
import PostSummaryItem from "./post-summary-item";
import posts from "../tuits/tuits.json";


const PostSummaryList = () => {
    const postsArray = posts; //useSelector(state => state.tuits);
    return (
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <PostSummaryItem
                        key={post._id} post={post}/>)
            }
        </ul>
    );
};
export default PostSummaryList;