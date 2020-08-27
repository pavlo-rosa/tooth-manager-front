import React from "react";
import { getPacient } from "../../api/pacient";
import { Card, Avatar, Row, Col, Divider } from "antd";
import "./styles.scss";
import * as moment from "moment";

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
          <div id="userData" style={{ flex: 1, display: "flex" }}>
            <div style={{ flexBasis: "50%" }}>
              <Row span={11}>
                <Col className="" span={4}>
                  <span className="labelTitle">Nombre:</span>
                </Col>
                <Col className="" span={20}>
                  <span className="">
                    {this.state.data.name} {this.state.data.surname} [Nombre de pila]
                  </span>
                </Col>
              </Row>
              <Row>
                <Col className="" span={4}>
                  <span className="labelTitle">Núm. Hist.:</span>
                </Col>
                <Col className="" span={2}>
                  <div> {this.state.data.id}</div>
                </Col>
                <Col className="" span={7}>
                  <span className="labelTitle">Mutua:&ensp;</span>
                  <span>XXXXX</span>
                </Col>
                <Col className="" span={2}>
                  <span className="labelTitle">Ref.:</span>
                </Col>
                <Col className="" span={4}>
                  <div> YYYYY</div>
                </Col>
              </Row>
              <Row>
                <Col className="" span={4}>
                  <span className="labelTitle">Edad:</span>
                </Col>
                <Col className="" span={9}>
                  <div>
                    {" "}
                    {moment
                      .duration(moment().diff(moment(this.state.data.birthday, "YYYY-MM-DD")))
                      .years()}{" "}
                    años / Hombre
                  </div>
                </Col>
                <Col className="" span={3}>
                  <span className="labelTitle">F. Nac.:</span>
                </Col>
                <Col className="" span={4}>
                  <div>{moment(this.state.data.birthday, "YYYY-MM-DD").format("DD/MM/YYYY")}</div>
                </Col>
              </Row>
              <Row>
                <Col className="" span={4}>
                  <span className="labelTitle">Telf:</span>
                </Col>
                <Col className="" span={12}>
                  <div>
                    {" "}
                    {this.state.data.phone1}{" "}
                    {this.state.data.phone2 ? "/ " + this.state.data.phone2 : ""}
                  </div>
                </Col>
              </Row>
            </div>
            <Divider type="vertical" style={{ height: "100%", marginRight: "16px" }} />
            <div style={{ flexBasis: "45%" }}>
              <Row gutter={[8]}>
                <Col span={2} className="background-red">
                  col 1
                </Col>
                <Col span={2} className="background-blue">
                  col 2
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <Divider />
      </div>
    );
  }
}

export default PacientProfile;
