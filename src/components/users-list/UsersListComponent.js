import React, { Component } from "react";
import { connect } from "react-redux";
import t from "../../utils/locales/Locales";
import { getUsers } from "../../redux/actions/users";
import TableOfSellsComponent from "../commons/TableOfSellsComponent";
import { deleteUser } from '../../redux/actions/users';
import Modal from '../commons/Modal';

class UsersListComponent extends Component {
    constructor(props) {
        super(props);
        this.getUsersList = this.getUsersList.bind(this);
        this.toggleConfirmDialog = this.toggleConfirmDialog.bind(this);
        this.delete = this.delete.bind(this);

        this.state = {
            users: [],
            toggleDialog: false,
            userIndex: 0
        };
    }

    componentDidMount() {
        this.getUsersList();
    }

    getUsersList() {
        getUsers().then(users => {
            this.setState({ users: users });
        });
    }

    delete(e) {
        e.preventDefault();
        let userId = this.state.users[this.state.userIndex]._id
        deleteUser(userId).then(res => {
            this.getUsersList()
            this.setState({toggleDialog:!this.state.toggleDialog})
        })
    }


    toggleConfirmDialog(index) {
        this.setState({ toggleDialog: !this.state.toggleDialog, userIndex:index })
    }

    render() {
        const {toggleDialog} = this.state
        return (
            <div className="user-list flex-column flex-center">
                {toggleDialog &&
                    <Modal title="Are you sure?" closeAction={this.toggleConfirmDialog} yes={this.delete} no={true}>
                        <p>Are you sure to delete this user?</p>
                    </Modal>
                }
                <TableOfSellsComponent
                    headerValues={["#", "Email", "Nom", "Prénom"]}
                    values={this.state.users}
                    valuesToShow={["email", "lastname", "firstname"]}
                    rowClickEvent={this.toggleConfirmDialog}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        lang: state.app.language
    };
}

export default connect(
    mapStateToProps,
    { t }
)(UsersListComponent);
