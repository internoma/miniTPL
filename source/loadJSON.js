/**
 * Helper function loadJSON(datafile, callback)
 * @author [29-03-2014 11:38 Alfredo Gonzalez P. <alfredo@internoma.com>]
 * @param  {String} datafile (url/ruta del archivo json)
 * @param  {String} función callback
 * @example:
 *     loadJSON('data/data.json', function(jsonObj) {
 *        window.console.log(jsonObj.clave);
 *        window.console.log(jsonObj.otraclave);
 *     });
 */
function loadJSON(datafile, callback) {
    var data_file = datafile;
    var http_request = new window.XMLHttpRequest();
    try {
        // Opera 8.0+, Firefox, Chrome, Safari
        http_request = new window.XMLHttpRequest();
    } catch (error) {
        // Internet Explorer
        try {
            http_request = new window.ActiveXObject("Msxml2.XMLHTTP");
        } catch (error1) {
            try {
                http_request = new window.ActiveXObject("Microsoft.XMLHTTP");
            } catch (error2) {
                // Algo salió mal
                window.alert("Su navegador ha fallado!");
                return false;
            }
        }
    }
    http_request.onreadystatechange = function() {
        if (http_request.readyState === 4 && http_request.status === 200) {
            // Javascript function JSON.parse para parsear los datos JSON
            var result = JSON.parse(http_request.responseText);
            if (callback && typeof(callback) === "function") {
                callback(result);
            }
        }
    };
    http_request.open("GET", data_file, true);
    http_request.send();
} // end loadJSON