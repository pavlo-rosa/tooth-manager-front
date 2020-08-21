import React from "react";
import { getPacient } from "../../api/pacient";
import { Card, Avatar, Row, Col, Divider} from "antd";
import "./styles.less";

const { Meta } = Card;

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
        <div style={{ display: "flex", flex: 1 }}>
          <Meta
            avatar={
              <Avatar
                shape="square"
                size={128}
                src="https://prv-projects.s3-eu-west-1.amazonaws.com/th-manager/Khal-Drogo.jpg"
              />
            }
          />
          <div id="userData" style={{ flex: 1 }}>
            <Row gutter={8}>
              <Col className="background-red " span={4}>
                <span className="labelTitle">Nombre:</span>
              </Col>
              <Col className="" span={12}>
                <p className="">
                  {this.state.data.name} {this.state.data.surname} [Nombre de pila]
                </p>
              </Col>
            </Row>
            <Row>
              <Col className="" span={4}>
                <span className="labelTitle">Núm. Historial:</span>
              </Col>
              <Col className="" span={12}>
                <div> {this.state.data.id}</div>
              </Col>
            </Row>
          </div>
        </div>
        <Divider />
      </div>
    );
  }
}

export default PacientProfile;
