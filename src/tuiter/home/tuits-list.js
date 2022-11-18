import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import TuitItem from "./tuit-item";
import {findTuitsThunk} from "../../services/tuits-thunk";


const TuitsList = () => {
    const {tuits, loading} = useSelector(state => state.tuitsData);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [dispatch])


    return (
        <div className="pb-4">
            <ul className="list-group">
                {
                    loading &&
                    <li className="list-group-item">
                        Loading...
                    </li>
                }
                {
                    tuits.map(tuit =>
                        <TuitItem
                            key={tuit._id} tuit={tuit}/>)
                }
            </ul>
        </div>

    );
}

export default TuitsList;

