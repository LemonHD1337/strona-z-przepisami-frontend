import React from 'react';

import '../Styles/articleComponent.css'
const ArticleComponent = props =>{

    let articleTitle

    if(Object.keys(props).length === 2){
        articleTitle = <p className="the-best-receipt-name" > {props.title}</p>
    }else if(Object.keys(props).length  === 3){
        articleTitle = <p className="the-best-receipt-name" >{props.title + " "}<span id="date">{props.date}</span></p>
    }

    return(
        <article className="container">
            {articleTitle}
            <hr className="section-decoration" />
            <div className="content">
                {props.children}
            </div>
        </article>
    );
};

export default ArticleComponent;