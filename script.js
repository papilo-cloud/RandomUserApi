
var icon = document.getElementsByClassName('icon')
var demo = document.getElementById('demo')
var result = document.getElementById('result')
var text = document.getElementById('text')

// an Array for holding the text messages.
var msg = ['Hi, My name is','My birthday is','My address is','My phone number is','My password is']

//Animation for the preloading part.
var progress = document.getElementById('progress')

document.addEventListener('readystatechange', function(){
  if(document.readyState === 'complete'){
     progress.style.visibility = 'hidden'
     document.querySelector('body').style.visibility = 'visible'
   }
})		


// I tried to solve this but, could'nt find a better way.. So I resolve to repeating myself.
getUser('https://randomuser.me/api?results=1')
var data;
async function getUser(file) {
    var prmp = await fetch(file)
    var {results} = await prmp.json()

    var str = results[0].dob.date
    var dem = str.substr(0, 10).split('-').reverse()
    var sss = dem.toString().replace(/,/g,'/')
     
    // console.log(results[0].picture.large)
    
		var imgs = document.getElementById('imgs')
		
			imgs.src = `${results[0].picture.large}`
		
   

// }

text.innerHTML = `${results[0].name.first} ${results[0].name.last}`

demo.innerHTML = msg[0]
// text.innerHTML = `${results[0].name.first} ${results[0].name.last}`
// result.innerHTML = ''


icon[0].onclick = function(){
    demo.innerHTML = msg[0]
    var current = document.getElementsByClassName('active')[0]
        current.className = current.className.replace('active')
    this.className += ' active'
    text.innerHTML = `${results[0].name.first} ${results[0].name.last}`
}
icon[1].onclick = function(){
    demo.innerHTML = msg[1]
    var current = document.getElementsByClassName('active')[0]
        current.className = current.className.replace('active')
    this.className += ' active'
    text.innerHTML = `${sss}`
}
icon[2].onclick = function(){
    demo.innerHTML = msg[2]
    var current = document.getElementsByClassName('active')[0]
        current.className = current.className.replace('active')
    this.className += ' active'
    text.innerHTML = `hello`
    text.innerHTML = `${results[0].location.street.number} ${results[0].location.street.name}`
}

//For Phone
icon[3].onclick = function(){
    demo.innerHTML = msg[3]
    var current = document.getElementsByClassName('active')[0]
    current.className = current.className.replace('active')
    this.className += ' active'
    text.innerHTML = `${results[0].phone}`
}
icon[4].onclick = function(){
    demo.innerHTML = msg[4]
    var current = document.getElementsByClassName('active')[0]
        current.className = current.className.replace('active')
    this.className += ' active'
    text.innerHTML = `${results[0].login.password}`
}

// For 




}
