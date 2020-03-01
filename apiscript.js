var request = new XMLHttpRequest();

request.open('GET', 'https://api.jikan.moe/v3/anime/1/pictures');

request.onload = function(){
    var response = request.response;
    var parsedData = JSON.parse(response);
    console.log(parsedData);
    
    
    /*var pictures = parsedData.pictures[0].small;
    console.log(pictures);
    var images = document.createElement('li');
    images.innerHTML = pictures;
    document.body.appendChild(images); */
    
    /* var img = document.createElement("img")
    var pictures = parsedData.pictures[0].small;
    img.src = pictures
    document.body.appendChild(img); */
    
    for(item in parsedData) {
   
        for(var i=0; i<=12; i++) {
            var pictures = parsedData.pictures[i].small;
            var img = document.createElement("img")
            img.src = pictures
            document.body.appendChild(img)
        }
        
        
    }
    
    
    
}

request.send();