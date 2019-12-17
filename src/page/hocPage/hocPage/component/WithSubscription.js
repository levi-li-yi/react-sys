import React, {Component} from 'react';
import DataSource from './DataSource';

let withSubscription = (WrappedComponent, selectData) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                data: selectData(DataSource, props)
            }
        }
        componentDidMount() {
            DataSource.addChangeListener(this.handleChange)
        }
        componentWillMount() {
            DataSource.removeListener(this.handleChange)
        }
        handleChange() {
            this.setState({
                data: selectData(DataSource, this.props)
            })
        }
        render() {
            const style = {
                'marginBottom': '20px'
            }
            return (
                <div style={style}>
                    <div>This is a HOC Component</div>
                    <WrappedComponent data={this.state.data} {...this.props}/>
                </div>
            )
        }
    }
};
export default withSubscription;