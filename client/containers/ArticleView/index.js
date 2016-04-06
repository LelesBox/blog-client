/**文章正文内容
 * Created by blake on 4/2/16.
 */

import React,{Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import style from './style.scss'

import MDTpl from '../../components/Mdtemplate'

class ArticleView extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <MDTpl id={this.props.params.id}></MDTpl>
        )
    }
}

//function mapStateToProps(state) {
//    return {navi: state.navi, article: state.article, tag: state.tag}
//}
//
//function mapDispatchToProps(dispatch) {
//    return {
//        naviActions: bindActionCreators(NaviBarActions, dispatch),
//        articleActions: bindActionCreators(ArticleActions, dispatch),
//        tagActions: bindActionCreators(TagActions, dispatch)
//    }
//}
//
//export default connect(mapStateToProps, mapDispatchToProps)(ArticleListView)
export default ArticleView