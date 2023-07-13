import { useSelector, useDispatch } from "react-redux";
import { update } from "./redux/colicksSlice";

export const AppR = () => {
    const dispatch = useDispatch();
    const numberOfClick = useSelector(state => state.clicks.value);

    return (
        <div>
            <button type="button" onClick={() => dispatch(update())}>
                Number of clicks: {numberOfClick}
            </button>
        </div>
    );
}