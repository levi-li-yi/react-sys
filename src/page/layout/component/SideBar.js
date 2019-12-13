import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        /*侧边栏渲染通过模拟后端菜单结构处理*/
        let {links, location} = this.props;
        return (
            links.map(({href, name}, index) => {
                return (
                    <p className={`side_bar_item ${location.pathname.substr(1) === href ? 'active_link' : null}`} key={index}>
                        <i className={`iconfont icon-${String(href)}`}></i>
                        <Link to={`/${href}`}>{name}</Link>
                    </p>
                )
            })
        )
    }
    componentDidMount() {
        this.getCurLocation()
    }
    getCurLocation() {
       // console.log(this.props);
    }
}

export default SideBar;