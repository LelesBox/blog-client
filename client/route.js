import {
    App,
    ArticleList,
    Daily,
    ArticleView
} from './containers'

const config = [{
    path: '/',
    component: App,
    indexRoute: {
        component: ArticleList
    },
    childRoutes: [{
        path: 'articlelist',
        component: ArticleList
    }, {
        path: 'daily',
        component: Daily
    }, {
        path: 'article/:id',
        component: ArticleView
    }]
}]

export default config
