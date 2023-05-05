// write your code here

//Get all images from the server
fetch('http://localhost:3000/ramens')
.then(res => res.json())
.then(ramens => ramens.forEach(ramen => uploadRamenImages(ramen)))

document.querySelector('#new-ramen').addEventListener('submit', event => {
    
    event.preventDefault()
    let newRamen = {
        name: event.target.name.value,
        restaurant: event.target.restaurant.value,
        image: event.target.image.value,
        rating: event.target.rating.value,
        comment: event.target.comment.value
    }
    //console.log(newRamen)
    uploadRamenImages(newRamen)
})

//Update Reman's rating and comment
document.querySelector('#edit-ramen').addEventListener('submit', event => {
    event.preventDefault()
    document.querySelector('#rating-display').textContent = event.target.rating.value
    document.querySelector('#comment-display').innerHTML = event.target.comment.value

})




function uploadRamenImages(ramen){
    let image = document.createElement('img')
    image.src = ramen.image
    document.querySelector('#ramen-menu').appendChild(image)

    image.addEventListener('click', event => {
        document.querySelector('.detail-image').src = ramen.image
        document.querySelector('.name').textContent = ramen.name
        document.querySelector('.restaurant').textContent = ramen.restaurant
        document.querySelector('#rating-display').textContent = ramen.rating
        document.querySelector('#comment-display').textContent = ramen.comment
    })

}

//testing commit 1
//testing commit 2