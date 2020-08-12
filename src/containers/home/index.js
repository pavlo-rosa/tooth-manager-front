import React from "react";
import logo from "../../logo.svg";
import { Input, Divider, Table } from "antd";
import "antd/dist/antd.css";
import { getPacientsByNameSurName } from "../../api/pacient";

const { Search } = Input;

function ConditionalDivider(props) {
  const dataArray = props.dataArray;
  if (dataArray.length > 0) {
    return <Divider style={{ backgroundColor: "white" }} />;
  } else {
    return <div></div>;
  }
}

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text, row) => <a href={`/pacient/${row.key}`}>{text}</a>,
  },
  {
    title: "Surname",
    dataIndex: "surname",
    key: "surname",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
];

class Home extends React.Component {
  constructor() {
    super();
    this.state = { pacients: [] };
  }

  async loadPacientsBySearch(text) {
    const response = await getPacientsByNameSurName(text);
    console.log(response);
    this.setState({ pacients: response });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" style={{ width: 300 }} />
          <Search
            placeholder="Patient..."
            enterButton="Search"
            onSearch={(value) => this.loadPacientsBySearch(value)}
            style={{ width: 400 }}
          />
          <ConditionalDivider dataArray={this.state.pacients}></ConditionalDivider>

          {this.state.pacients.length > 0 ? (
            <Table
              rowKey="email"
              columns={columns}
              dataSource={this.state.pacients.map((item) => {
                return {
                  key: item.id,
                  name: item.name,
                  surname: item.surname,
                  phone: item.phone1,
                  email: item.email,
                };
              })}
            />
          ) : (
            <div></div>
          )}
        </header>
      </div>
    );
  }
}

export default Home;
