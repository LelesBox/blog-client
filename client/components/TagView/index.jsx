import React, {Component} from 'react'
import style from './style.scss'

class TagView extends Component {
  render() {
    // var tag = this.props.tags

    const tagItems = this.props.tags.map((item) => {
      return (
        <div className={style.tag} key={item.id}>
          <span>{item.tag}</span>
        </div>
      )
    })
    return (
      <div className={style.container}>
        <span>标签</span>
        <div className={style.line}></div>
        {tagItems}
      </div>
    )
  }
}

export default TagView
