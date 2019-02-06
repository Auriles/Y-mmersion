import React from "react";

const SaleInfosComponent = sale => {
    return (
        <div className="flex-column flex-center">
            <h1>Sale infos</h1>
            <div className="sale-info flex-row flex-center flex-space-between">
                <span>Nom du produit</span>
                <span>N° de facture</span>
                <span>Quantité</span>
                <span>Client</span>
                <span>Catégorie</span>
                <span>Secteur d'activité</span>
                <span>TVA</span>
                <span>Prix HT</span>
                <span>Prix TTC</span>
            </div>
            <div className="sale-info flex-row flex-center flex-space-between">
                <span>{sale.sale.name}</span>
                <span>{sale.sale.receipeNumber}</span>
                <span>{sale.sale.quantity}</span>
                <span>{sale.sale.client}</span>
                <span>{sale.sale.category}</span>
                <span>{sale.sale.activity}</span>
                <span>{sale.sale.TVA}%</span>
                <span>{sale.sale.totalHT} €</span>
                <span>{sale.sale.totalTTC} €</span>
            </div>
        </div>
    );
};

export default SaleInfosComponent;
