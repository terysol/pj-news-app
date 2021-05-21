import { Component } from 'react'
import style from '../NewsItem.module.css'       // style 객체
import styled from 'styled-components'


const CircledImage = styled.img`     // styled 만 적용된  컴포넌트
    border: 2px solid red;
    border-radius: 50%;
    width: 100px;
    height: 100px;
`

class NewsItem extends Component {
    render() {
        const { title, description, url, urlToImage } = this.props.article

        return (
            <div>
                <h1 className={style.title}><a className={style.titleLink} href={url} target='_blank'>{title}</a></h1>
                <CircledImage src={urlToImage} />
                <p>{description}</p>
            </div>
        )
    }
}

export default NewsItem