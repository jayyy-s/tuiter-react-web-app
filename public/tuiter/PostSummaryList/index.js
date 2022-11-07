import posts from "./posts.js"
import PostSummaryListItem from "./PostSummaryListItem.js";

const Index = () => {
    return (`
        <ul class="list-group">
            ${posts.map((p) => 
                `${PostSummaryListItem(p)}`).join('')}
        </ul>
    `);
}

export default Index;
