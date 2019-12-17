import React, {Component} from 'react';
import CommentList from './component/CommentList';
import BlogPost from './component/BlogPost';
import WithSubscription from './component/WithSubscription'

const CommentListWithSubscription = WithSubscription(
    CommentList,
    (DataSource) => DataSource.getComments()
);

const BlogPostWithSubscription = WithSubscription(
    BlogPost,
    (DataSource) => DataSource.getBlogPost()
);

class HocPage extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const style = {
            width: '100%',
            'text-align': 'center'
        };
        return (
            <div style={style}>
                <CommentListWithSubscription />
                <BlogPostWithSubscription />
            </div>
        )
    }
}
export default HocPage;