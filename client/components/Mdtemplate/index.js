/**
 * Created by blake on 4/5/16.
 */
import React, {Component} from 'react'
import hyperdown from 'hyperdown'
import {getArticleById} from "../../utils/leancloud"
//import * as router from 'react-router'

var Parser = new hyperdown()
//import style from './style.scss'

class MDTpl extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: "coming....."
        }
        var self = this
        getArticleById(this.props.id).then(result=> {
            self.setState({
                content: Parser.makeHtml(result.content)
            })
            var cc = document.querySelectorAll("pre code")
            for (var i = 0; i < cc.length; i++) {
                var block = cc[i]
                hljs.highlightBlock(block);
            }
        }, err=>alert(err))
    }


    render() {
        return (
            <div
                className="markdown"
                dangerouslySetInnerHTML={{
            __html: this.state.content
          }}
            />
        )
    }
}

export default MDTpl