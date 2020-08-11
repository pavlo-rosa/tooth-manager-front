import React from 'react';
import {getPacients} from "../../api/pacient";

class PacientProfile extends React.Component {
    constructor() {
        super();
        this.state = {data: []};
    }

    async componentDidMount() {
        const response = await getPacients()
        this.setState({data: response});
    }

    render() {
        return (
            <div>
                <h1>TEST</h1>
                {this.state.data.map(pacient => {
                    return (
                        <p key={pacient.id}>{pacient.name}</p>
                    )
                })}
            </div>
        );
    }
}

export default PacientProfile
