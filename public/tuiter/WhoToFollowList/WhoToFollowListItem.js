const WhoToFollowListItem = (who) => {
    return (`
        <li class="list-group-item">
            <div class="row">
                <div class="col-lg-2">
                    <img class="rounded-circle wd-img-circle"
                         src="../../images/${who.avatarIcon}">
                </div>
                <div class="col-lg-7">
                    <div class="fw-bold">
                        ${who.userName}
                        <span class="fa-stack align-middle wd-check-resize mb-1">
                            <i class="fas fa-circle fa-stack-2x"></i>
                            <i class="fas fa-check fa-stack-1x fa-inverse"></i>
                        </span>
                    </div>
                    <div class="wd-nudge-up">@${who.tuiterHandle}</div>
                </div>
                <div class="col-lg-3 align-self-center">
                    <button class="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </li>
    `);
}

export default WhoToFollowListItem;