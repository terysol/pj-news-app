import { Component } from 'react'
import NewsItem from './NewsItem'
// 스타일 추가
import '../style.css'
import '../NewsApp.css'

class NewsApp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            articles: []            // 네트워크 요청을 해서 리스트를 채울 것이다.
        }
    }

    // 크롭에서 잘 보여주기 위해서는 json formatter 확장 프로그램 깔기
    componentDidMount() {       // 초기 데이트 가져오기.
        const apiKey = '630bb3bf74c842db83b3e8e4d111ef07'

        // fetch 하기에 좋은 메소드
        fetch(`http://newsapi.org/v2/top-headlines?country=kr&apiKey=${apiKey}`)
            .then(res => res.json())        // promise 객체 변경
            .then(data => {
                console.log(data.articles)
                this.setState({
                    articles: data.articles
                })
            })
    }

    render() {
        return (
            <div id="news-app">
                {
                    this.state.articles.length === 0
                        ? <h1>표시할 뉴스가 없습니다.</h1>
                        :
                        <ul>
                            {
                                this.state.articles.map((article, idx) => {   { /* map() -> 변환*/ }
                                    return (<li key={idx}>
                                        <NewsItem article={article} />
                                    </li>)
                                })
                            }

                        </ul>
                }

            </div>
        );
    }
}

export default NewsApp