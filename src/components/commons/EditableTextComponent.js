import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import TextAreaComponent from './TextAreaComponent';
class EditableTextComponent extends Component {
    constructor(props){
        super(props);
        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.state = {
            onEdit:false,
        }
    }
    toggleEditMode(e){
        this.setState({onEdit: !this.state.onEdit});
    }


    render() {
        const {onEdit} = this.state;
        if(!onEdit){
            return (
                <div className={"editable-text flex-row flex-center " + this.props.class}>
                    {this.props.children}
                    {this.props.user.access ==="admin" && <i className="fas fa-edit" onClick={this.toggleEditMode}></i>}
                </div>
            );
        }else{
            return(
                <TextAreaComponent textId={this.props.textId} rows={this.props.rows}
                 class={this.props.class} toggleAction = {this.toggleEditMode} />
            )
        }
    }
}

EditableTextComponent.propTypes = {
    textId: PropTypes.string.isRequired,
    rows: PropTypes.number.isRequired,
    class: PropTypes.string
};

EditableTextComponent.defaultProps= {
    rows: 1,
    class: ""
}

function mapStateToProps(state){
    return{
        user: state.auth.user
    }
}

export default connect(mapStateToProps)(EditableTextComponent);