import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <div class="row">
            <div class="col-11">
                <input class="ps-5 form-control rounded-pill" type="text" placeholder="Search Tuiter">
                <i class="fa fa-search position-relative bottom-50 ps-3"></i>
            </div>
            <div class="col-1">
                <a href="explore-settings.html">
                    <i class="fa fa-2x fa-cog mt-1"></i>
                </a>
            </div>
        </div>
        <ul class="nav mb-2 nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" href="for-you.html">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="trending.html">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="news.html">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="sports.html">Sports</a>
            </li>
            <li class="nav-item d-none d-md-block">
                <a class="nav-link" href="entertainment.html">Entertainment</a>
            </li>
        </ul>
        <div class="position-relative row">
            <img class="mt-2 img-fluid" src="../../images/starship_hangar.jpg">
            <h2 class="position-absolute start-0 bottom-0 text-white mx-2 fw-bold">SpaceX's Starship</h2>
        </div>
        ${PostSummaryList()}
    `);
}
export default ExploreComponent;
