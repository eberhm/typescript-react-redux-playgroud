
import * as React from "react";
import { connect } from 'react-redux';
import {Store} from "../store/index";
import { incrementCounter } from "../actions";
import {EventHandler} from "react";

interface SquareProps {
    value?: number;
    handleClick?: EventHandler<any>;
}


function mapStateToProps(state: Store.Counter):SquareProps {
    return {
        value: state.value
    }
}

function mapDispatchToProps(dispatch:Function):SquareProps {
    return {
        handleClick: () => dispatch(incrementCounter(1))
    }
}


class Square extends React.Component<SquareProps, any> {
    render() {
        return <div className="square" onClick = { this.props.handleClick }>{this.props.value}</div>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Square);