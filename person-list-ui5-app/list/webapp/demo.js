const serviceURL = 'https://sapassetmanagement.cfapps.eu10.hana.ondemand.com';

var settings = {
    "async": true,
    "crossDomain": true,
    "url": serviceURL + "/sap/opu/odata/SAP/Z_ASSET_MANAGEMENT_SRV/orderSet",
    "method": "GET",
    "headers": {
      'Authorization': 'Basic TFVIQU5JV0FMOmUyZGhzZWFzaHVAQUtMJA==',
                'Content-Type': 'application/json',
                'x-csrf-token': 'Fetch'
    }
  }
  
  $.ajax(settings).done(function (response) {
      alert("sucess")
    console.log(response);
  });