
import * as React from "react";
import Square from "./Square";
import * as _ from "lodash";

interface RowProps {
    size: number;
}

class Row extends React.Component<RowProps, {}> {
    render() {
        return <div>
            { _.range(this.props.size).map( (x: number) => <Square value = { x } /> ) }
        </div>;
    }
}

export default Row;