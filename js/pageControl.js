console.clear();

$('.register').hide();
$('.backend').hide();
$('.help').hide();
$('.SecurityAlert').hide();

$('#loginSubmit').on('click', function (e) {

    $('.warning').html('');
    $url = 'http://davidliou.net/agile/php/login.php?username='+$('#username').val()+'&password='+$('#password').val();
    console.log($url);
    $.get($url, function(data){
        console.log(data);
        if(data==='0'){
            $('.warning').html('Username or password wrong');
        }else{
            $('.register').hide();
            $('.myForm').hide();
            $('.backend').show();
            $('.phName').html($('#username').val());

            var secLeft = 5;
            $('.secondsLeft').html(secLeft);

            var myInt = setInterval(function () {
                if (secLeft===1){
                    clearInterval(myInt);
                }
                secLeft--;
                $('.secondsLeft').html(secLeft);

            }, 1000);

            $('#cancelButton').on('click', function () {
                clearInterval(myInt);
            });

        }
    });
    e.preventDefault();



});

$('#registerButton').on('click', function () {
    $('.myForm').hide();
    $('.register').show();
});

$('#registerSubmit').on('click', function (e) {
    $('.warning').html('');
    $url = 'http://davidliou.net/agile/php/auth.php?username='+$('#regUsername').val()+'&password='+$('#regPassword').val();
    console.log($url);
    $.get($url, function(data){
        console.log(data);
        if(data==='0'){
            $('.warning').html('Username already exists');
        }else{
            $('.myForm').show();
            $('.register').hide();
        }
    });
    e.preventDefault();
});

//when click on logout button exits to the Login Page
$('#logoutButton').on('click', function () {
    $('.myForm').show();
    $('.backend').hide();
});

//jumps to help page
$('#helpButton').on('click', function () {
    $('.help').show();
    $('.backend').hide();
});

$('#homeButton').on('click', function () {
    $('.help').hide();
    $('.backend').show();
});

var x = true;

$('#cancelButton').on('click', function () {
    x = false;
    $('.SecurityAlert').hide();
    timerCancelled = true;
    /*
     $.get( "ajax/test.html", function( data ) {
     $( ".result" ).html( data );
     alert( "Load was performed." );
     });
     //update server false
     */
});

function securityAlert(x) {
    if (x === true) {
        $('.SecurityAlert').show();
    }
}

securityAlert(x);

$('#electricChart').highcharts({
    title: {
        text: 'Monthly Electricity Usage',
        x: -20 //center
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        title: {
            text: 'KW used'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        valueSuffix: 'kW'
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
    },
    series: [{
        name: 'Electricity Used',
        data: [30, 32, 35, 20, 23, 43, 21, 28, 69, 28, 26, 32]
    }]
});


$('#waterChart').highcharts({
    title: {
        text: 'Monthly Water Usage',
        x: -20 //center
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        title: {
            text: 'Gallons used'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        valueSuffix: 'Gallons'
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
    },
    series: [{
        name: 'Water Used',
        data: [72, 24, 38, 35, 78, 45, 23, 45, 77, 78, 89, 50]
    }]
});

$('#tempChart').highcharts({
    title: {
        text: 'Daily Temperature',
        x: -20 //center
    },
    xAxis: {
        categories: ['12:00', '1:00', '2:00', '3:00', '4:00', '5:00',
            '6:00', '7:00', '8:00', '9:00', '10:00', '11:00']
    },
    yAxis: {
        title: {
            text: 'Tempature (°F)'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        valueSuffix: '°F'
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
    },
    series: [{
        name: 'Temperature',
        data: [72, 24, 38, 35, 78, 45, 23, 45, 77, 78, 89, 50]
    }]
});



/*
 Resources
 High Charts
 http://www.highcharts.com/demo/line-basic
 Bootstrap API
 http://getbootstrap.com/css/#overview
 */