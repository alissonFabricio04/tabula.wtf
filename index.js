const EASTER_EGG_PHRASE = 'egg'

document.keysPressed = ''

document.onkeydown = ({ key }) => {
  if (key) document.keysPressed += key

  console.log(document.keysPressed)

  if (document.keysPressed === EASTER_EGG_PHRASE) {
    const iframe = `
      <iframe
        style="display: none;"
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/br0qgE6GjjU?autoplay=1&start=10807" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen
      ></iframe>
    `
    document.getElementById('div-nada-suspeita').innerHTML = iframe
  }
}

