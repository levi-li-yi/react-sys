import React, {Component} from 'react';
import {Input, Button} from 'antd';

const {TextArea} = Input;

class BlogPost extends Component {
    render() {
        return (
            <div>
                <TextArea value={this.props.data}/>
            </div>
        )
    }
}
export default BlogPost;