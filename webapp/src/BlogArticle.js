import React from 'react';

import './css/BlogArticle.scss';

class BlogArticle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            image: null
        };
        this.item = props.item;
        this.endpoint = props.item.featuredmedia.length > 0 ? props.item.featuredmedia[0].href : null;
    }

    componentDidMount() {
        if (this.endpoint == null)
            return ;
        fetch(this.endpoint)
        .then(res => res.json())
        .then((result) => {
            this.setState({
                isLoaded: true,
                image: {
                    id: result.id,
                    link: result.guid.rendered,
                },
                error: null
            });
        },
        (error) => {
            this.setState({
                isLoaded: true,
                error: error
            })
        })
    }

    formatDate(d) {
        d = new Date(d);
        return (
            d.getFullYear() + "/"
                + (d.getMonth() + 1).toString().padStart(2, "0") + "/"
                + d.getDate() + " "
                + d.getHours().toString().padStart(2, "0")
                + ":" + d.getMinutes().toString().padStart(2, "0")
        );
    }

    render() {
        var ctime = this.formatDate(this.item.ctime);
        var articleStyle = {
            backgroundPositionY: "center",
        };

        if (this.state.image != null)
            articleStyle.backgroundImage = 'url(' + this.state.image.link + ')';

        return (
            <article style={articleStyle}>
                <div className="content">
                    <h2><a href={this.item.link} dangerouslySetInnerHTML={{__html: this.item.title}}></a></h2>
                    <time dateTime={this.item.ctime}>📅{ctime}</time>
                    <div dangerouslySetInnerHTML={{__html: this.item.caption}}></div>
                    {/* {this.state.image != null && <img src={this.state.image.link} alt=""/>} */}
                </div>
            </article>
        );
    }
}

export default BlogArticle;