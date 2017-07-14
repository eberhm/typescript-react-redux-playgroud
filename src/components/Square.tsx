
import * as React from "react";

interface SquareProps {
    value: number;
}

class Square extends React.Component<SquareProps, SquareProps> {

    constructor(props: SquareProps, context: any) {
        super(props, context);
        this.state = this.props;

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((prevState) => {
            prevState.value ++;

            return prevState;
        });
    }

    render() {
        return <div className="square" onClick = { this.handleClick }>{this.state.value}</div>;
    }
}

export default Square;