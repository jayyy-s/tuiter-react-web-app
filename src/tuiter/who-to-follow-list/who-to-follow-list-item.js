const WhoToFollowListItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png' }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-lg-2">
                    <img className="rounded-circle wd-img-circle"
                         src={`/images/${who.avatarIcon}`} />
                </div>
                <div className="col-lg-7">
                    <div className="fw-bold">
                        {who.userName}
                    </div>
                    <div className="wd-nudge-up">@{who.handle}</div>
                </div>
                <div className="col-lg-3 align-self-center">
                    <button className="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;