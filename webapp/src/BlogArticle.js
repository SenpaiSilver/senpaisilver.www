import React from 'react';

class BlogArticle extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.item = props.item;
    // }

    render() {
        return (
            <article>
                <h2><a href={this.props.link} dangerouslySetInnerHTML={{__html: this.props.title}}></a></h2>
                {/* <div dangerouslySetInnerHTML={{__html: this.props.caption}}></div> */}
            </article>
        );
    }
}

export default BlogArticle;