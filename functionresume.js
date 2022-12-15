function nave(velocity, printer) {

    let slowspeed = 20

    while(velocity > 0) {
        printer(velocity)
        velocity -= slowspeed
    }
       

    alert("Nave parada. As comportas podem ser abertas.")
}

let space = 150

nave(space, function(velocity)
{

    console.log("Velocidade atual: " + velocity)
})