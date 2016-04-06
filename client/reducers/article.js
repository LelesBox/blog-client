import {
    handleActions
} from 'redux-actions'


const initialState = [{
    author: "LeeBox",
    title: "未知标题",
    summary: "等待加载",
    tag: "",
    updatedAt: "未知时间",
    imageurl: "",
    avatar: "https://cdn-images-1.medium.com/fit/c/36/36/1*W9JOI6bJJ2iniOxwSGC2iQ.png",
    id: "0"
}]

export default handleActions({
    'render list' (state, action) {
        return action.payload
    }
}, initialState)
