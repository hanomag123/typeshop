import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as UserActionCreators from './../Store/Action-creator/product'

export const useAction = () => {
    const dispatch = useDispatch()
    return bindActionCreators(UserActionCreators, dispatch)
}