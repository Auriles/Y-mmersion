import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {updateText} from '../../redux/actions/texts';

class TextAreaComponent extends Component {
    constructor(props){
        super(props)
        this.onChange = this.onChange.bind(this);
        this.edit = this.edit.bind(this);
        this.state = {
            text: this.props.texts[this.props.textId]
        }
    }

    edit(e){
        e.preventDefault()
        this.props.updateText(this.props.textId, this.state.text).then(res =>{
            this.props.toggleAction(e)
        })
    }

    onChange(e){
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const {text} = this.state;
        return (
            <div className={"editable-text flex-row flex-center " + this.props.class}>
                <textarea className="" rows={this.props.rows} name="text" value={text} onChange={this.onChange}></textarea>
                <i className="fas fa-check-circle" onClick={this.edit}></i>
            </div>
        );
    }
}

TextAreaComponent.propTypes = {
    textId:PropTypes.string.isRequired,
    rows:PropTypes.number.isRequired,
    toggleAction: PropTypes.func.isRequired,
    class: PropTypes.string
};

TextAreaComponent.defaultProps ={
    rows: 5
}

function mapStateToProps(state){
    return{
        texts:state.texts
    }
}
export default connect(mapStateToProps, {updateText})(TextAreaComponent);