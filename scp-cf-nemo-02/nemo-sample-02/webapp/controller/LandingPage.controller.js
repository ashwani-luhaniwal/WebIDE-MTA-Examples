sap.ui.controller("scp.cf.nemo-sample-01.controller.LandingPage", {

    /**
     * Called when a controller is instantiated and its View controls (if available) are already created.
     * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
     * @memberOf views.LandingPage
     */
    onInit: function() {
        landingpagecontroller = this;
        this.getData();
    },

    /**
     * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
     * (NOT before the first rendering! onInit() is used for that one!).
     * @memberOf views.LandingPage
     */
    onBeforeRendering: function() {

    },

    /**
     * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
     * This hook is the same one that SAPUI5 controls get after being rendered.
     * @memberOf views.LandingPage
     */
    onAfterRendering: function() {

    },

    handleSearch: function(oEvent) {
        var empdata;
        var aData = jQuery.ajax({
            type: "GET",
            contentType: "application/json",
            url: "/employee/" + sap.ui.getCore().byId('ip_sEmpId').getValue(),
            dataType: "json",
            async: false,
            success: function(data, textStatus, jqXHR) {
                empdata = data;
            }
        });

        sap.ui.getCore().byId('slbl_name').setVisible(true);
        sap.ui.getCore().byId('slbl_dob').setVisible(true);
        sap.ui.getCore().byId('slbl_desig').setVisible(true);
        sap.ui.getCore().byId('slbl_gender').setVisible(true);

        
    }
})