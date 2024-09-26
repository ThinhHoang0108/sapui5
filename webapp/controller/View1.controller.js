sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/m/MessageBox"],
  function (Controller, MessageToast, MessageBox) {
    "use strict";

    return Controller.extend("com.example.pro2.pro2.controller.View1", {
      onInit: function () {},
      onPress: function () {
        var oTable = this.byId("table1");
        var aIndices = oTable.getSelectedIndices();
        var sMsg;
        var oModel = this.getView().getModel("sample");
        if (aIndices.length < 1) {
          MessageToast.show("no item selected");
          return;
        }
        var aSelectedProducts = aIndices.map(function (iIndex) {
          return oTable.getContextByIndex(iIndex).getObject();
        });
        var sDetails = aSelectedProducts
          .map(function (oProduct) {
            return (
              "Name: " +
              oProduct.name +
              "\nID: " +
              oProduct.id +
              "\nColor: " +
              oProduct.color +
              "\nSize: " +
              oProduct.size +
              "\nPrice: " +
              oProduct.price +
              " " +
              oProduct.currency
            );
          })
          .join("\n\n");
        MessageBox.information(sDetails, {
          title: "Selected Product Details",
        });
        // console.log(oModel);
      },
    });
  }
);
