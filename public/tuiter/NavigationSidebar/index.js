const NavigationSidebar = () => {
    return (`
        <div class="list-group">
            <a href="index.html" class="list-group-item">
                <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="list-group-item">
                <i class="fa fa-home"></i>
                <span class="d-none d-xl-inline">Home</span>
            </a>
            <a href="index.html" class="list-group-item active">
                <i class="fa fa-hashtag"></i>
                <span class="d-none d-xl-inline">Explore</span>
        
            </a>
            <a href="index.html" class="list-group-item">
                <i class="fa fa-bell"></i>
                <span class="d-none d-xl-inline">Notifications</span>
            </a>
            <a href="index.html" class="list-group-item">
                <i class="fa fa-envelope"></i>
                <span class="d-none d-xl-inline">Messages</span>
            </a>
            <a href="index.html" class="list-group-item">
                <i class="fa fa-bookmark"></i>
                <span class="d-none d-xl-inline">Bookmarks</span>
            </a>
            <a href="index.html" class="list-group-item">
                <i class="fa fa-list"></i>
                <span class="d-none d-xl-inline">Lists</span>
            </a>
            <a href="index.html" class="list-group-item">
                <i class="fa fa-user"></i>
                <span class="d-none d-xl-inline">Profile</span>
            </a>
            <a href="index.html" class="list-group-item">
                            <span class="fa-stack wd-icon-resize">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>
                            </span>
                <span class="d-none d-xl-inline">More</span>
            </a>
        </div>
        <button class="btn btn-primary rounded-pill w-100 mt-2">Tuit</button>
    `);
}

export default NavigationSidebar;