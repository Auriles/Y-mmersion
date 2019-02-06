import React, { Component } from 'react';
import t from '../../utils/locales/Locales';
import { setLanguage } from '../../redux/actions/app';
import { connect } from 'react-redux';
import ProductComponent from '../description/ProductComponent';
import EditableTextComponent from '../commons/EditableTextComponent'

class DescriptionComponent extends Component {
    render() {
        const {texts} = this.props;
        return (
            <div className="description description-component">
                <div className="description decription-content flex-center flex-column">
                    <button className="btn btn--squared btn-description">Voici Y-mmersion</button>
                    <div className="description-title flex-column flex-center text-center">
                        <EditableTextComponent textId="descriptionTitle">
                            <p>{texts.descriptionTitle}</p>
                        </EditableTextComponent>
                    </div>
                    <div className="description description-details flex-column flex-center text-center">
                            <EditableTextComponent textId="descriptionDetails">
                                <p>{texts.descriptionDetails}</p>
                            </EditableTextComponent>
                    </div>
                    <div className="description description-products flex-center flex-row">
                        <div className=" details-group flex-row flex-center">
                            <ProductComponent
                                image={require("../../images/icon4.svg")}
                                description="Tous nos services à porté de main"
                            />
                            <ProductComponent
                                image={require("../../images/icon3.svg")}
                                description="Le suivi de vos activités en temps réel"
                            />
                        </div>
                        <div className="details-group flex-row flex-center ">
                            <ProductComponent
                                image={require("../../images/icon2.svg")}
                                description="Un service de commande par siège mis en place"
                            />
                            <ProductComponent
                                image={require("../../images/icon1.svg")}
                                description="Les stats des joueurs sur lesquels vous misez !"
                            />
                        </div>
                    </div>
                </div>




            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        lang: state.app.language,
        texts: state.texts
    }
}

export default connect(mapStateToProps, { t, setLanguage })(DescriptionComponent);

