import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as NaviBarActions from '../../actions/navigationBarAction'
import * as ArticleActions from '../../actions/articleAction'
import * as TagActions from '../../actions/tagAction'
import NavigationBar from '../../components/NavigationBar'
import ContentView from '../../components/ContentView'
import TagView from '../../components/TagView'
import style from './style.scss'
import {getArticleList,getTags} from '../../utils/leancloud'

class ArticleListView extends Component {
    constructor(props) {
        super(props)
        const {articleActions,tagActions} = this.props
        getArticleList().then(function (result) {
            articleActions.renderList(result)
        }, function (err) {
            alert(err)
        })

        getTags().then(result=> {
            tagActions.renderTag(result)
        }, err=>alert(err))
    }

    render() {
        const {article, tag} = this.props
        return (
            <div>
                <div className={style.contenView}>
                    <ContentView ContentItems={article}></ContentView>
                </div>
                <div className={style.tagView}>
                    <TagView tags={tag}></TagView>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {navi: state.navi, article: state.article, tag: state.tag}
}

function mapDispatchToProps(dispatch) {
    return {
        naviActions: bindActionCreators(NaviBarActions, dispatch),
        articleActions: bindActionCreators(ArticleActions, dispatch),
        tagActions: bindActionCreators(TagActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListView)
