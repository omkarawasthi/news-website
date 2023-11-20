import React from 'react'

function NewsItem(props){
    //let { title, description, imageUrl, newsUrl , date, publish} = props; //destructuring. you can do this also and by write onley variable name. 
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={!props.imageUrl ? "https://images.hindustantimes.com/tech/img/2023/10/14/1600x900/bg_1680331096842_1697257053751.jpeg" : props.imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}..</p>
            <p className="card-text"><small class="text-body-secondary">{new Date(props.date).toGMTString()}</small></p>
            <p className="card-text"><small class="text-body-secondary"> <strong>By :</strong> {!props.publish?"Unknown":props.publish}</small></p>
            <a href={props.newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div> 
    )
}


export default NewsItem;