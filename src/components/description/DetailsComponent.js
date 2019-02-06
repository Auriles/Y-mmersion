import React, { Component } from 'react';
import t from '../../utils/locales/Locales';
import { setLanguage } from '../../redux/actions/app';
import { connect } from 'react-redux';


class DetailsComponent extends Component {
    render() {
        return (
            <div className="details-component flex-row flex-center">
                <div className="details-content flex-row flex-center flex-space-between">
                    <div className="left-content flex-center">
                        <div className="details-title">
                            <p>comment ça marche ?</p>
                        </div>
                        <div className="details-sub-title">
                            <p>Toutes vos envies <br/> réunies en une seule application <br/> | Y-mmersion | </p>
                        </div>
                        <div className="details-description">
                            <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmud tempor incididunt <br /> ut labore et dolore magna aliqua</p>
                        </div>
                    </div>
                    <div className="right-content flex-column flex-center">
                        <div className="badges-details">
                            <div className="badges">
                                <div className="badges-number">
                                    <p>1</p>
                                </div>
                                <div className="badges-description">
                                    <div className="badges-title">
                                        <p>Installez notre application Y-mmersion</p>
                                    </div>
                                    <div className="badges-paragraph">
                                        <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmud tempor incididunt <br /> ut labore et dolore magna aliqua</p>
                                    </div>
                                </div>
                            </div>
                            <div className="badges">
                                <div className="badges-number">
                                    <p>2</p>
                                </div>
                                <div className="badges-description">
                                    <div className="badges-title">
                                        <p>Intuitif n'est-ce pas ? </p>
                                    </div>
                                    <div className="badges-paragraph">
                                        <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmud tempor incididunt <br /> ut labore et dolore magna aliqua</p>
                                    </div>
                                </div>
                            </div>
                            <div className="badges">
                                <div className="badges-number">
                                    <p>3</p>
                                </div>
                                <div className="badges-description">
                                    <div className="badges-title">
                                        <p>Alors... amusez-vous !!!</p>
                                    </div>
                                    <div className="badges-paragraph">
                                        <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmud tempor incididunt <br /> ut labore et dolore magna aliqua</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        lang: state.app.language
    }
}

export default connect(mapStateToProps, { t, setLanguage })(DetailsComponent);

