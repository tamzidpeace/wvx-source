const scan = () => {
    console.log('Hello');
}


function onPageFinishedFromFlutter(data) {
    console.log(data);
    return data;
}

function responseForFlutterRequest(data) {
    console.log(data);
    document.getElementById("result").innerHTML = data;
    return;
}