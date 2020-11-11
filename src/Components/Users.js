import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component {
  state = {
    users: [],
  };

  componentDidMount = async () => {
    const result = await axios.get(
      `https://serverless-backend-ky9b8rmuq.now.sh/api/users`
    );
    this.setState({ users: result.data });
    console.log(result);
  };

  render() {
    return (
      <div>
        {this.state.users.map((element) => {
          return (
            <div key={element._id}>
              <h3>{element.name.first}</h3>
              <p>{element.name.last}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Users;
