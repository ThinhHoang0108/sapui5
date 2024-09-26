sap.ui.define(
  ["sap/ui/model/json/JSONModel", "sap/ui/Device"],
  function (JSONModel, Device) {
    "use strict";

    return {
      /**
       * Provides runtime info for the device the UI5 app is running on as JSONModel
       */
      createDeviceModel: function () {
        var oModel = new JSONModel(Device);
        oModel.setDefaultBindingMode("OneWay");
        return oModel;
      },
      creatSampleData: function () {
        var jsonData = [
          {
            name: "John",
            id: "123",
            quantity: "2",
            status: "Available",
            price: 100,
            currency: "EUR",
            color: "red",
            size: "large",
          },
          {
            name: "Mary",
            id: "456",
            quantity: "3",
            status: "Available",
            price: 200,
            currency: "EUR",
            color: "green",
            size: "minium",
          },
          {
            name: "Mike",
            id: "789",
            quantity: "1",
            status: "Available",
            price: 300,
            currency: "EUR",
            color: "yellow",
            size: "extra large",
          },
        ];
        var oModel = new JSONModel(jsonData);
        oModel.setDefaultBindingMode("TwoWay");
        return oModel;
      },
    };
  }
);
