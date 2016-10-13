//--Twitter API Stuffs--//

<!-- Adjust to point at the copy of the Temboo JavaScript SDK on your server -->
<script src="js/temboo.js"></script>

<script>
// Instantiate the client proxy
// You may need to adjust the path to reflect the URI of your server proxy
var temboo = new TembooProxy('/proxy-server');

// Add the listFollowers Choreo
var listFollowersChoreo = temboo.addChoreo('jsListFollowers');

// Add inputs
listFollowersChoreo.setInput('ConsumerKey', 'jYE7G5a7k6NdGwXpc5nDSCi89');
listFollowersChoreo.setInput('UserID', '1877489628');
listFollowersChoreo.setInput('AccessToken', '1877489628-9R5bFVGquAQH5S1wMIXeSSKcAOIlYgySvNRRiKc');
listFollowersChoreo.setInput('ConsumerSecret', '6UjkF5WsFeF18964OdVH10ecDJREPVfJQpKhaNMQVQdeffhoCs');
listFollowersChoreo.setInput('AccessTokenSecret', 'RRzLWcsapFTrdatzozqCgkZhbsqXm8FjO4PNICA1XJaiw');

// Success callback
var showResult = function(outputs, outputFilters) {
    // Display outputs
    if(outputFilters) {
    	// Display named output filters
        for(var name in outputFilters) {
            console.log(name + ':');
            for(var item in outputs[name]) {
                console.log('    ' + outputs[name][item]);
            }
        }
    } else {
    	// Display raw outputs
        for(var name in outputs) {
            console.log(name + ': ' + outputs[name]);
        }
    }
};

// Error callback
var showError = function(error) {
    if(error.type === 'DisallowedInput') {
        console.log(error.type + ' error: ' + error.inputName);
    } else {
        console.log(error.type + ' error: ' + error.message);
    }
};

// Run the Choreo, specifying success and error callback handlers
listFollowersChoreo.execute(showResult, showError);
</script>
