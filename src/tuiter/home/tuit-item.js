import React from "react";
import "./index.css";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../tuits/tuits-reducer";

const TuitItem = ({
                      tuit = {
                          "topic": "Space",
                          "userName": "SpaceX",
                          "handle": "spacex",
                          "time": "2h",
                          "image": "tesla.png",
                          "liked": false,
                          "replies": 0,
                          "retuits": 0,
                          "likes": 0,
                          "tuit": "You want to wake up in the morning and think the future is going to be great - " +
                              "and that's what being a spacefaring civilization is all about. It's about believing " +
                              "in the future and thinking that the future will be better than the past. And I can't " +
                              "think if anything more exciting than going out there and being among the stars"
                      }
                  }) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return (
        <div className="list-group-item">
            <div className="container">
                <div className="row">
                    <div className="col-1">
                        <img className="wd-profile-picture"
                             src={`/images/${tuit.image}`}
                             alt={`/images/java_logo.png`}/>
                    </div>
                    <div className="col-11">
                        <div className="wd-bookmark-main-content col-12">
                            <div className="wd-author-header">
                                <h2 className="wd-name">{tuit.userName} </h2>
                                <div className="wd-handle-and-date">@{tuit.handle} ⋅ {tuit.time}</div>
                                <i className="bi bi-x-lg float-end"
                                   onClick={() => deleteTuitHandler(tuit._id)}></i>
                            </div>
                            <p>{tuit.tuit}</p>
                            <ul className="wd-action-items row">
                                <li className="wd-action-item col-3">
                                    <svg viewBox="0 0 24 24" aria-hidden="true" fill="rgb(88,94,100)"
                                         className="wd-action-icon me-1">
                                        <g>
                                            <path
                                                d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                                        </g>
                                    </svg>
                                    <div className="d-inline">{tuit.replies}</div>
                                </li>
                                <li className="wd-action-item col-3">
                                    <div className="wd-icon-container">
                                        <svg viewBox="0 0 24 24" aria-hidden="true" fill="rgb(88,94,100)"
                                             className="wd-action-icon mb-2 me-1">
                                            <g>
                                                <path
                                                    d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="d-inline">{tuit.retuits}</div>
                                </li>
                                <li className="wd-action-item col-3">
                                    {tuit.liked &&
                                        <svg viewBox="0 0 24 24" aria-hidden="true" fill="rgb(224,37,94)"
                                             className="wd-action-icon mb-1 me-1">
                                            <g>
                                                <path
                                                    d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"></path>
                                            </g>
                                        </svg>
                                    }
                                    {!tuit.liked &&
                                        <svg viewBox="0 0 24 24" aria-hidden="true"
                                             className="wd-action-icon mb-1 me-1">
                                            <g>
                                                <path
                                                    d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                                            </g>
                                        </svg>
                                    }
                                    <div className="d-inline">{tuit.likes}</div>
                                </li>
                                <li className="wd-action-item col-3">
                                    <svg viewBox="0 0 24 24" aria-hidden="true" fill="rgb(88,94,100)"
                                         className="wd-action-icon">
                                        <g>
                                            <path
                                                d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path>
                                            <path
                                                d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path>
                                        </g>
                                    </svg>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TuitItem;