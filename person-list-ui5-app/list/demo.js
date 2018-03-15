var settings = {
    "async": true,
    "crossDomain": true,
    "url": "/sap/opu/odata/SAP/Z_ASSET_MANAGEMENT_SRV/orderSet",
    "method": "GET",
    /*"headers": {
      "authorization": "Basic U0xJX0RFVl9VU0VSOldlbGNvbWUx",
      "cache-control": "no-cache",
     
    }*/
  }
  
  $.ajax(settings).done(function (response) {
      alert("sucess")
    console.log(response);
  });