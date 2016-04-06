/**
 * Created by blake on 4/2/16.
 */

var hyperdown = require("hyperdown")
var fs = require('fs')
var Parser = new hyperdown()


var result = fs.readFileSync('test.md', 'utf-8')

var html = Parser.makeHtml(result)

//找出标题
var titleRegx = /<h1>(.*?)<\/h1>/
//模板占位符
var title = titleRegx.exec(html)[1]

//套模板
fs.readFile("template.html", 'utf8', (err, data)=> {
    data = data.replace("<%title%>", title)
    data = data.replace("<%content%>", html)
    fs.writeFileSync('test.html', data)
    console.log("完成")
})


