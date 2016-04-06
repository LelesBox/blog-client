/**
 * Created by blake on 3/28/16.
 */
import Dateformat from 'dateformat'
import co from 'co'
import Promise from 'promise'

//获取首页文章列表
exports.getArticleList = (page = 1)=> {
    var Article = AV.Object.extend("Article")
    var limit = 10
    var query = new AV.Query(Article)
    query.select('author', 'title', 'summary', 'tag', 'imageurl');
    query.limit(limit)
    query.skip((page - 1) * limit)
    return new Promise((resolve, reject)=> {
        co(function*() {
            var result = yield query.find()
            result = result.map(item => {
                return {
                    author: item.get("author"),
                    title: item.get("title"),
                    summary: item.get("summary"),
                    tag: item.get("tag"),
                    updatedAt: Dateformat(item.updatedAt, "yyyy-mm-dd HH:MM:ss"),
                    imageurl: item.get("imageurl"),
                    avatar: "https://cdn-images-1.medium.com/fit/c/36/36/1*W9JOI6bJJ2iniOxwSGC2iQ.png",
                    id: item.id
                }
            })
            resolve(result)
        }).catch(e=>reject(e))
    })
}


//根据id获取文章内容
exports.getArticleById = (id)=> {
    var Article = AV.Object.extend("Article")
    var query = new AV.Query(Article)
    return new Promise((resolve, reject)=> {
        co(function*() {
            var result = yield query.get(id)
            resolve(result.attributes)
        }).catch(e=> {
            reject(e.message)
        })
    })
}


//获取标签
exports.getTags = ()=> {
    var Tags = AV.Object.extend("Tags")
    var query = new AV.Query(Tags)
    query.select("tagName")
    return new Promise((resolve, reject)=> {
        co(function*() {
            var result = yield query.find()
            result = result.map(item=> {
                return {tag: item.get("tagName"), id: item.id}
            })
            resolve(result)
        }).catch(e=>reject(e.stack))
    })
}
