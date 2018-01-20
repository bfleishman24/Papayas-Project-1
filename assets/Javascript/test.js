$.ajax({
    type: 'POST',
    url: 'http://www.yoururl.com/',
    crossDomain: true,
    data: 'param1=value1&param2=value2',
    success: function(data) {
        // do something with server response data
    },
    error: function(err) {
        // handle your error logic here
    },
});