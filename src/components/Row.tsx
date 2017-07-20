
import * as React from "react";
import Square from "./Square";
import * as _ from "lodash";

import { createStore } from 'redux';
import { counterReducer } from "../reducers";
import { Provider } from 'react-redux'


interface RowProps {
    size: number;
}

class Row extends React.Component<RowProps, {}> {
    render() {
        return <div>
            { _.range(this.props.size).map( (x: number) => {
                return <Provider store={ createStore(counterReducer) }>
                            <Square value = { x } />
                        </Provider>

                })
            }
        </div>;
    }
}

export default Row;