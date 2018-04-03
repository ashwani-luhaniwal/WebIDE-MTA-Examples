sap.ui.jsview("jsview.view.View1", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf controller.View1
	 */
	getControllerName: function() {
		return "jsview.controller.View1";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf controller.View1
	 */
	createContent: function(oController) {

		var oButton = new sap.m.Button(this.createId("helloButton"), {
	        text : "Expand First Level",
	        press: [oController.onSpecificRowExpansion, oController]
	    });
	    var ganttChartWithTable = new sap.gantt.GanttChartWithTable({
	    	id: "ganttView",
	    	shapeDragEnd: "handleShapeDragEnd",
	    	columns: [
	    		new sap.ui.table.Column({
	    			id: "nameColumn",
	    			label: "Name", 
	    			width: "220px",
	    			template: [
	    				new sap.m.Label({
	    					text: "{test>explanation}"
	    				})
	    			]
	    		})
	    		/*new sap.ui.table.Column({
	    			id: "startDateColumn",
	    			label: "Start Date", 
	    			width: "160px",
	    			template: [
	    				new sap.m.DatePicker({
	    					placeholder: "",
	    					value: "{test>order/0/startTime}",
	    					valueFormat: "yyyyMMddHHmmss",
	    					change: "handleDateChange"
	    				})
	    			]
	    		}),
	    		new sap.ui.table.Column({
	    			id: "endDateColumn",
	    			label: "End Date", 
	    			width: "160px",
	    			template: [
	    				new sap.m.DatePicker({
	    					placeholder: "",
	    					value: "{test>order/0/endTime}",
	    					valueFormat: "yyyyMMddHHmmss",
	    					change: "handleDateChange"
	    				})
	    			]
	    		})*/
	    	]
	    });

		var ganttChartContainer = new sap.gantt.GanttChartContainer(this.createId("GanttChartContainer"), {
			ganttCharts: [
				ganttChartWithTable
			]
		});
		
		var oPage = new sap.m.Page({
			title: "{i18n>title}",
			content: [
				oButton,
				ganttChartContainer
			]
		});

		var app = new sap.m.App("myApp", {
			initialPage: "oPage"
		});
		app.addPage(oPage);
		return app;
	}

});