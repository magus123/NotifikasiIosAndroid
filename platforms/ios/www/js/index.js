var $output, FirebasePlugin;

// Fake authentication code as defined in the Firebase Console: see https://firebase.google.com/docs/auth/android/phone-auth#integration-testing
var FAKE_SMS_VERIFICATION_CODE = '123456';

// UI logging
function prependLogMessage(message){
    $output.prepend('<span class="'+(message.logLevel ? message.logLevel : '')+'">' +message.msg + '</span>' + (message.nobreak ? "<br/>" : "<br/><br/>" ));
}

function log(msg, opts){
    opts = opts || {};

    opts.logLevel = opts.logLevel || "log";
    console[opts.logLevel](msg);

    opts.msg = msg;
    prependLogMessage(opts);
}

function logError(msg, error){
    if(typeof error === 'object'){
        msg += ': ' + JSON.stringify(error);
    }else if(typeof error === 'string'){
        msg += ': ' + error;
    }
    log(msg, {
        logLevel: "error"
    });
}

function clearLog(){
    $output.empty();
}

function promptUserForInput(title, msg, cb) {
    navigator.notification.prompt(
        msg,
        function(result){
            var input = result.input1 || '';
            cb(input.trim());
        },
        title,
        ['Ok']
    );
}

// Init
function onDeviceReady(){
    alert("masuk");
    FirebasePlugin = window.FirebasePlugin;
    $output = $('#log-output');
    log("deviceready");
    checkNotificationPermission(false);
}

$(document).on('deviceready', onDeviceReady);
// Notifications
var checkNotificationPermission = function(requested){
    FirebasePlugin.hasPermission(function(hasPermission){
        if(hasPermission){
            log("Remote notifications permission granted");
            // Granted
            getToken();
        }else if(!requested){
            // Request permission
            log("Requesting remote notifications permission");
            FirebasePlugin.grantPermission(checkNotificationPermission.bind(this, true));
        }else{
            // Denied
            logError("Notifications won't be shown as permission is denied");
        }
    });
};
