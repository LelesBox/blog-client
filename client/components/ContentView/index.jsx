import React, {Component} from 'react'
import style from './style.scss'
import {browserHistory} from 'react-router'

class ContentListView extends Component {

    openArticle(id) {
        return ()=> {
            browserHistory.push('/article/' + id)
        }
    }

    render() {
        var Items = this.props.ContentItems.map((item) => {
            return (
                <div className={style.container} key={item.id}>
                    <div className={style.profile}>
                        <img className={style.avatar} src={item.avatar}></img>
                        <div className={style.author}>
                            <div className={style.name}>
                                <span className={style.authorname}>
                                    {item.author}
                                </span>
                                <span className={style.shu}>&nbsp;丨&nbsp;</span>
                                <span className={style.time}>{item.updatedAt}</span>
                            </div>
                        </div>
                    </div>
                    <div className={style.imgContainer}>
                        <img className={style.image} src={item.imageurl}></img>
                    </div>
                    <div  onClick={this.openArticle(item.id)}>
                        <div className={style.title}>
                            {item.title}
                        </div>
                        <div className={style.summary}>
                            {item.summary}
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div>
                {Items}
            </div>
        )
    }
}

export default ContentListView
