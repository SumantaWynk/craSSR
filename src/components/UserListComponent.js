import React, { Component } from 'react';
import { fetchUsers } from '../actions';
import { connect } from 'react-redux';

class UserListComponent extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>
        })
    }

    render() {
        return (
            <div>
                Here is a big list of Users :
                <ul>
                    {this.renderUsers()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { users: state.users }
}

function loadData(store) {
    return store.dispatch(fetchUsers())
}
export { loadData };
export default connect(mapStateToProps, { fetchUsers })(UserListComponent);