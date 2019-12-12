import React, {Component, Fragment } from 'react';
import menuTree from '../../../mock/menuTree'

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuTree: menuTree
        }
    }
    render() {
        /*导航栏渲染通过模拟后端菜单结构处理*/
        let {location} = this.props;
        return (
            <Fragment>
                <p className="sys_logo">logo</p>
                <div className="nav_bar_item">
                    {
                        this.state.menuTree.map((item, index) => {
                            return (
                                <p
                                    key={index}
                                    onClick={this.switchPage.bind(this, item)}
                                    className={`nav_item ${item.children.find((item) => item.href === location.pathname.substr(1)) ? 'active_item' : ''}`}>
                                    <i className={`iconfont icon-${item.href}`}></i>
                                </p>
                            )
                        })
                    }
                </div>
            </Fragment>
        )
    }

    /**
     * 导航菜单跳转
     * @param moudle
     */
    switchPage(moudle) {
        const children = moudle.children || [];
        if (children.length === 0) return;
        const href = children[0].href;
        this.props.history.push(`/${href}`)
    }
}

export default NavBar;