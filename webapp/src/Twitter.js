import React from 'react';

class Twitter extends React.Component {
    constructor(props) {
        super(props);
        this.height = 1050;
    }

    render() {
        return (
            <section className='Twitter'>
                <a class="twitter-timeline" data-height={this.height} data-theme="dark" data-link-color="#2B7BB9" style="display: none" href="https://twitter.com/SenpaiSilver?ref_src=twsrc%5Etfw">Tweets by SenpaiSilver</a>
                <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </section>
        );
    }
}

export default Twitter;