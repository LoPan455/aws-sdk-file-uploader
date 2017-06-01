var button = document.getElementById('upload-button');


window.fbAsyncInit = function () {
    FB.init({
        appId: appId
    });
    FB.login(function (response) {
        bucket.config.credentials = new AWS.WebIdentityCredentials({
            ProviderId: 'graph.facebook.com',
            RoleArn: roleArn,
            WebIdentityToken: response.authResponse.accessToken
        });
        fbUserId = response.authResponse.userID;
        button.style.display = 'block'; // this will finally light up the button when you're logged in
    });
};
 // Load the Facebook SDK asynchronously
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/all.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
