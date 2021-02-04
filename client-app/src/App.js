import "./App.css";
import { Component, React } from "react";
import axios from "axios";
import { Header, Icon, List, ListItem } from "semantic-ui-react";

class App extends Component {
  state = {
    val: [],
  };

  componentDidMount() {
    axios.get("http://localhost:5000/api/values").then((response) => {
      this.setState({
        val: response.data,
      });
    });
  }

  render() {
    return (
      <div>
        <Header as="h2">
          <Icon name="users" />
          <Header.Content>Reactivity</Header.Content>
        </Header>
        <List>
          {this.state.val.map((value) => (
            <List.Item key={value.id}> {value.name}</List.Item>
          ))}
        </List>
      </div>
    );
  }
}
export default App;
