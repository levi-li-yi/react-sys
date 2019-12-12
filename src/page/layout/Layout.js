import React, {Component} from 'react';
import { Route } from "react-router-dom";
import './Layout.css';
import SideBar from './component/SideBar';
import NavBar from './component/NavBar';
import menuTree from '../../mock/menuTree'

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuTree: menuTree
        }
    }
    render() {
        let {routes} = this.props;
        let links  = this.getSiderbarList();
        return (
            <div className="sys_layout">
                <div className="nav_bar_panel">
                    <NavBar {...this.props}/>
                </div>
                <div className="content_panel">
                    <div className="left_content_panel">
                        <SideBar links={links} {...this.props}/>
                    </div>
                    {/*路由注册按照router目录下的路由配置参数进行注册*/}
                    <div className="right_content_panel">
                        {
                            routes.map((route, key) => {
                                if (route.exact) {
                                    return <Route exact key={key} path={route.path} component={route.components}/>
                                }
                                return <Route key={key} path={route.path} component={route.components}/>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        // console.log(this.props);
        setTimeout(() => {
            //this.props.history.push('/systemManage')
        }, 2000)
    }
    // 获取当前一级菜单下的二级菜单，用来渲染侧边栏
    getSiderbarList() {
        let {location} = this.props;
        const pathname = location.pathname || '';
        const model = this.state.menuTree.find((item) => {
            return item.children.find((value) => value.href === pathname.substr(1))
        })
        const list = model ? model.children : [];
        if (list.length === 0) {
            return this.state.menuTree[0].children
        }
        return list || []
    }
}

export default Layout;