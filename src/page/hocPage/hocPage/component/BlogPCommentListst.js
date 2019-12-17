import React, {Component} from 'react';

class BlogPCommentListst extends Component {
    render() {
        return (
            <div>
                {
                    this.props.data.map((item, index) => {
                       return <div comment={value} key={index}>{item}</div>
                    })
                }
            </div>
        )
    }
}
export default BlogPCommentListst;