myApp.controller('UploadController',['DataFactory', '$scope','$uibModalInstance', function(DataFactory, $scope, $uibModalInstance) {

console.log('Upload controller running');

var self = this;
self.testMessage = 'This is the Upload test message';

var appId = '147910642417941';
var roleArn = 'arn:aws:iam::455790677231:role/JS-SDK-IAM-ROLE';
var bucketName = 'sofa-apple-tree';
AWS.config.region = 'us-east-2';
var fbUserId = DataFactory.currentUser.details;
var bucket = new AWS.S3({
    params: {
        Bucket: bucketName
    }
});
var fileChooser = document.getElementById('file-chooser');
var button = document.getElementById('upload-button');
var results = document.getElementById('results');


// button.addEventListener('click', function () {
//   console.log('upload button clicked');
//   console.log('FileChooser.files is: ', fileChooser.files);
//     var file = fileChooser.files[0];
//     if (file) {
//         results.innerHTML = '';
//
//         //Object key will be facebook-USERID#/FILE_NAME
//
//         var objKey = 'facebook-' + fbUserId + '/' + file.name;
//         var params = {
//             Key: objKey,
//             ContentType: file.type,
//             Body: file,
//             ACL: 'public-read'
//         };
//
//         bucket.putObject(params, function (err, data) {
//             if (err) {
//                 results.innerHTML = 'ERROR: ' + err;
//             } else {
//                 listObjs();
//             }
//         });
//     } else {
//         results.innerHTML = 'Nothing to upload.';
//     }
// }, false);
//
// function listObjs() {
//     var prefix = 'facebook-' + fbUserId;
//     bucket.listObjects({
//         Prefix: prefix
//     }, function (err, data) {
//         if (err) {
//             results.innerHTML = 'ERROR: ' + err;
//         } else {
//             var objKeys = "";
//             data.Contents.forEach(function (obj) {
//                 objKeys += obj.Key + "<br>";
//             });
//             results.innerHTML = objKeys;
//         }
//     });
// }

self.upload = function(){
    console.log('upload button clicked');
    var file = fileChooser.files[0];
    if (file) {
        console.log('file is:',file);
        results.innerHTML = '';
        //Object key will be facebook-USERID#/FILE_NAME
        var objKey = 'facebook-' + fbUserId + '/' + file.name;
        var params = {
            Key: objKey,
            ContentType: file.type,
            Body: file,
            ACL: 'public-read'
        };
        bucket.putObject(params, function (err, data) {
            if (err) {
                results.innerHTML = 'ERROR: ' + err;
            } else {
                listObjs();
            }
        });
    } else {
        results.innerHTML = 'Nothing to upload.';
    }
}

self.cancel = function(){
  $uibModalInstance.dismiss('cancel');
}


}]);
