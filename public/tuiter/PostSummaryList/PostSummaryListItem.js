const PostSummaryListItem = (post) => {
    return (`
        <li class="list-group-item">
            <div class="row">
                <div class="col-md-9 col-xl-10">
                    <div class="text-secondary">${post.topic}</div>
                    <div class="row">
                        <div class="fw-bold">${post.userName}
                            <span class="fa-stack wd-check-resize mb-1 mb-1">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fas fa-check fa-stack-1x fa-inverse"></i>
                            </span>
                            <span class="fw-light text-secondary">- ${post.time}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="fw-bold">
                            ${post.title}
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-xl-2">
                    <img class="img-fluid rounded-3" src="../../images/${post.image}">
                </div>
            </div>
        </li>
    `);
}

export default PostSummaryListItem;