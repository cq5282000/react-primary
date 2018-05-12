/**
 * Created by chenqu on 2017/9/29.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/listAction';
import WrappedDynamicFieldSet from '../components/DynamicFieldSet';

@connect((state) => ({
    data: state.list.data,
}), {
    fetchData: actions.fetchData,
})

export default class ListContainer extends Component {

    constructor(props) {
        super(props);
        this.getData = ::this.getData;
    }

    getData = () => {
        const { fetchData } = this.props;
        fetchData();
    }

    render() {
        const { data } = this.props;
        return (
            <div>
                <button onClick={this.getData}>发起请求</button>
                <div>{JSON.stringify(data)}</div>
                <div>
                    <WrappedDynamicFieldSet />
                </div>
            </div>
        );
    }
}

