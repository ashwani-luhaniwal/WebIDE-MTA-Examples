sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"scp/cf/nemo-sample-02/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("scp.cf.nemo-sample-02.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		},

		createContent: function() {
			var appView = new sap.ui.view('idappView', {
				id: 'idappView',
				viewName: 'scp.cf.nemo-sample-02.view.App',
				type: sap.ui.core.mvc.ViewType.JS
			});

			return appView;
		}
	});
});