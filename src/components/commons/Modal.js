import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
    render() {
        const {closeAction, yes, no, ok} = this.props;
        return (
            <main>
                <div className="modal-background" onClick={closeAction}></div>
                <div className="modal flex-column">
                    <div className="modal-header flex-row flex-space-between">
                        <span className="grow">{this.props.title}</span>
                        <i className="fas fa-times" onClick={closeAction}></i>                       
                    </div>
                    <div className="modal-content">
                        {this.props.children}
                    </div>
                    <div className="modal-footer flex-row flex-space-between">
                        {yes && <button onClick={yes}>Yes</button>}
                        {no && <button onClick={closeAction}>No</button>}
                        {ok && <button onClick={ok}>OK</button>}
                    </div>
                </div>
            </main>
                
        );
    }
}

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    closeAction: PropTypes.func.isRequired,
    yes: PropTypes.func,
    no: PropTypes.bool,
    ok:PropTypes.func
};

export default Modal;