var nose_x = 0
var nose_y = 0


function preload()
{

    payaso = loadImage('https://i.postimg.cc/gj3QHNmf/580b57fbd9996e24bc43bed5.png')

}

function setup()
{
    canvas = createCanvas(500, 500)
    video = createCapture(VIDEO)
    video.hide()
    video.size(500 ,500)
    modelo = ml5.poseNet(video ,listo)
    modelo.on("pose", resultados)

}
 function draw()
 {
    image(video ,0 ,0 ,500 ,500)
    image(payaso, nose_x, nose_y, 40, 40)
    
 }
 function listo()
 {
    console.log("ya cargo la foto")
 }

 function resultados(respuesta)
 {


if(respuesta.length>0)
{
    console.log(respuesta)
 
nose_x = respuesta[0].pose.nose.x - 15
nose_y = respuesta[0].pose.nose.y - 15
}


 }

 