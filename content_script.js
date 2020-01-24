// Remove all of twitter's "Trends for you" bullshit

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function removeTwitterTag() {
    await sleep(3000);
    var element = document.querySelector('div.css-1dbjc4n.r-1uaug3w.r-1uhd6vh.r-t23y2h.r-1phboty.r-rs99b7.r-ku1wi2.r-1udh08x');
    element.parentElement.removeChild(element);
}

removeTwitterTag();
