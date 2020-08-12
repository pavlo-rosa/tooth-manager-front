import React from "react";
import { getPacient } from "../../api/pacient";

class PacientProfile extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
    const {
      match: { params },
    } = this.props;
    const response = await getPacient(params.id);
    this.setState({ data: response });
  }

  render() {
    return (
      <div>
        <h1>Pacient</h1>
        {this.state.data.id} - {this.state.data.name}
      </div>
    );
  }
}

export default PacientProfile;
