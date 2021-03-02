import React from 'react';

import BlogArticle from './BlogArticle';

import './css/App.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            next: "https://blog.senpaisilver.com/wp-json/wp/v2/posts?per_page=16&page=1",
            infiniteScroll: false,
            error: null,
            isLoaded: false,
            items: [],
            prevY: 0,
            observing: false,
        };
    }

    getArticles(endpoint) {
        fetch(endpoint)
        .then((res) => {
            for (var pair of res.headers.entries()) {
                if (pair[0] === "link") {
                    let next = pair[1].split(",").reverse()[0].split(";")[0].replace(/[<>]/g, "");
                    this.setState({
                        next: pair[1].indexOf('rel="next"') !== -1 ? next : null,
                        infiniteScroll: pair[1].indexOf('rel="next"') !== -1
                    });
                }
            }
            return (res);
        })
        .then(res => res.json())
        .then((result) => {
            var items = [];

            items = [].concat(...this.state.items, ...result.map((item) => {
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
            }));


            this.setState({
                isLoaded: true,
                items: items,
                error: null
            });

            // To enabled infinite scrolling
            // if (this.state.observing === false) {
            //     this.observer.observe(document.querySelector('#NextItems'));
            //     this.setState({observing: true});
            // }
        },
        (error) => {
            this.setState({
                isLoaded: true,
                error: error
            })
        });
    }

    handleObserver(entities, observer) {
        const y = entities[0].boundingClientRect.y;

        if (this.state.prevY > y && this.state.infiniteScroll) {
            this.setState({infiniteScroll: false});
            this.getArticles(this.state.next);
        }
        this.setState({ prevY: y});
    }

    componentDidMount() {
        this.getArticles(this.state.next);

        // To enabled infinite scrolling
        // this.observer = new IntersectionObserver(this.handleObserver.bind(this), {
        //     root: document.querySelector("#NextItems"),
        //     rootMargin: '0px',
        //     threshold: 0.1,
        // });
    }

    render() {
        return (
            <div>
                <div className='App'>
                    {this.state.error == null && this.state.items.map((item) => (
                        <BlogArticle key={item.id} item={item} />
                    ))}
                    {!this.state.isLoaded && <div className="loading">
                        Loading...
                    </div>}
                </div>
                {/* {this.state.isLoaded && <div id="NextItems" ref={loadingRef => (this.loadingRef = loadingRef)}></div>} */}
            </div>
        );
    }
}

export default App;