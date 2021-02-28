import React from 'react';

import BlogArticle from './BlogArticle';

import './css/App.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
        this.endpoint = 'https://blog.senpaisilver.com/wp-json/wp/v2/posts';
    }

    componentDidMount() {
        fetch(this.endpoint)
        .then(res => res.json())
        .then((result) => {
            this.setState({
                isLoaded: true,
                items: result.map((item) => {
                    return ({
                        id: item.id,
                        type: item.type,
                        title: item.title.rendered,
                        link: item.link,
                        caption: item.excerpt.rendered,
                        featuredmedia: item._links["wp:featuredmedia"],
                        ctime: item.date_gmt,
                        mtime: item.modified_gmt,
                    });
                }),
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

    render() {
        return (
            <div className='App'>
                {this.state.error == null && this.state.items.map((item) => (
                    <BlogArticle key={item.id} item={item} />
                ))}
            </div>
        );
    }
}

export default App;