/* class Base Component.

import React, { Component } from 'react'
import NewsItem from './NewsItem';
import PropTypes from 'prop-types'

export class News extends Component {
  articles = []

  static defaultProps = {
    country: 'in',
    category: 'general'
  }

  static propsTypes = {
    country: PropTypes.string,
    category: PropTypes.string
  }
  constructor() {
    super();
    state = {
      articles: articles,
      loading: false,
      page: 1
    }
  }
  async UpdateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=81d14e746d884baaaff7aa7691741a35&page=${state.page}`;
    let data = await fetch(url);
    let parseddata = await data.json();

    setState({ articles: parseddata.articles })
  }


  async componentDidMount() {
    UpdateNews();
  }

  handleNextClick = async () => {
    //let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=81d14e746d884baaaff7aa7691741a35&page=${state.page + 1}`;
    //let data = await fetch(url);
    //let parseddata = await data.json();

    //setState({
    //articles: parseddata.articles,
    //page: state.page + 1
    //})
    setState({ page: state.page + 1 });
    UpdateNews();
  }

  handlePrevClick = async () => {

    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=81d14e746d884baaaff7aa7691741a35&page=${state.page - 1}`;
    let data = await fetch(url);
    let parseddata = await data.json();
    
    setState({
      articles: parseddata.articles,
      page: state.page - 1
    })
    setState({ page: state.page - 1 });
    UpdateNews();
  }

  render() {
    return (
      <div className='container my-3'>
        <div className='row'>
          <h2 className="text-center">Top Headlines</h2>
          {
            state.articles.map((element) => {
              return <div className='col-md-3 my-3' key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 45) : ""} imageUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} publish={element.author} />
              </div>
            })
          }
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={state.page <= 1} type="button" className="btn btn-dark " onClick={handlePrevClick}> &larr; Previous</button>
          <button type="button" className="btn btn-dark " onClick={handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News; 
*/



// Function Based Component
import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

function News(props) {
  const [articles, setArticals] = useState([])
  const [page, setPage] = useState(1)

  const UpdateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=81d14e746d884baaaff7aa7691741a35&page=${page}`;
    let data = await fetch(url);
    let parseddata = await data.json();

    setArticals(parseddata.articles)
  }

  useEffect(() => {
    UpdateNews();
  }, [])


  const handleNextClick = async () => {
    setPage(page + 1);
    UpdateNews();
  }

  const handlePrevClick = async () => {
    setPage(page - 1);
    UpdateNews();
  }

  return (
    <div className='container my-3'>
      <div className='row'>
        <h2 className="text-center">Top Headlines</h2>
        {
          articles.map((element) => {
            return <div className='col-md-3 my-3' key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 45) : ""} imageUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} publish={element.author} />
            </div>
          })
        }
      </div>
      <div className="container d-flex justify-content-between">
        <button disabled={page <= 1} type="button" className="btn btn-dark " onClick={handlePrevClick}> &larr; Previous</button>
        <button type="button" className="btn btn-dark " onClick={handleNextClick}>Next &rarr;</button>
      </div>
    </div>
  )
}


export default News;