function NasaService(ready) {
    
        console.log("2")
    
        
        var baseUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=`
        var key = '&api_key=SC1FowWfen947ejy2wEIwzPBO0SeUPspVgIWy2m0'
        var photos = []
    
    
        //getPhotos
    
    
        //filter by cam
    
        this.getPhotos = function getPhotos(solQuery, cb) {
            $.get(baseUrl + solQuery + key)
                .then((res) => {     
                    photos = res.photos
                    cb(photos)
                    ready()
                })
    
        }
        this.camFilter = function camFilter(camName){
            // check photos.camera.name vs camName
            return photos.filter(function(photo){
                if(photo.camera.name == camName){
                    return true;
                }
            })
        }
        console.log('4')
    }