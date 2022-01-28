function carregar () {
    var msg = window.document.getElementById ('msg')
    var img = window.document.getElementById ('imagem')
    
    var data = new Date()
    var hora = data.getHours ()

    

    msg.innerHTML = `Agora são ${hora} horas.` 
    
    console.log(hora)
   
    
    if (hora >= 0 && hora < 12) {
        
    console.log('a')
        //BOM DIA
    
    img.src = 'amanhecer2.png'
    document.body.style.background = "#cd7859"
    
    
    } else if (hora >= 12 && hora < 18) {

        console.log('b')

        //BOA TARDE
        img.src = 'tarde3.png'
        document.body.style.background =  "#fed0a3"


    } else  {
        //BOA NOITE

       img.src = 'noite.png'
       document.body.style.background = "#584945"
        
    
    
    }
    
    }