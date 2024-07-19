let url = "https://api.quotable.io/random"

const getdata = async()=>{
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
    return data;
}

showQoute = async()=>{
    let qoute = await getdata();

    let qouteText = $('#qoute-text') 
    let qouteAuthor = $('#qoute-author')

    qouteText.html(`${qoute.content}`);
    qouteAuthor.html(`${qoute.author}`);
}

$('#generateButton').click(() => {
    showQoute();
})


const copyFun = ()=>{
    var copyText = $('#qoute-text');
    copyText = copyText.text();
    console.log(copyText);
    navigator.clipboard.writeText(copyText);
    showNotification("copied to clipboard!");
}


function showNotification(message) {
    var notification = $('#notification');
    notification.text(message);
    notification.addClass('show');

    setTimeout(function() {
        notification.removeClass('show');
    }, 2000); 
}


