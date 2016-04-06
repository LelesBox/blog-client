/**
 * Created by blake on 3/29/16.
 */
import {
    handleActions
} from 'redux-actions'


const initialState = [{
    tag: "",
    id: "0"
}]

export default handleActions({
    'render tag' (state, action) {
        return action.payload
    }
}, initialState)
