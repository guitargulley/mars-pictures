
function NasaController(){
    console.log('1')
    var nasaService = new NasaService(ready)

    function ready(){
        console.log('add buttons')
    }
    //PRIVATE
    function draw(photoArr){
        var photoElem = document.getElementById('gallery')
        var template = ''
        for (var i = 0; i < photoArr.length; i++) {
            var photo = photoArr[i];
            template +=
            `<div class="col-sm-6 col-md-4">
            <div class="thumbnail">
              <img class=""src="${photo.img_src}">
              <div class="caption">
                <h3>${photo.camera.full_name}</h3>
                <p>${photo.rover.name}</p>
                <p>${photo.earth_date}</p>
              </div>
            </div>
          </div>`
        }
        
        photoElem.innerHTML = template

    }
    
    
    
    //PUBLIC
    
    this.newSol= function newSol(e){
        e.preventDefault()
        var sol = e.target.sol.value
        nasaService.getPhotos(sol, draw)
    }
    
    this.camFilter = function camFilter(e){
        e.preventDefault()
        var camName = e.target.camera.value
        var filtered = nasaService.camFilter(camName)
        draw(filtered)
    }
    console.log('6')
    nasaService.getPhotos(100,draw)

}