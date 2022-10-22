function verificar() {
    var data = new Date()

    var ano = data.getFullYear()

    var fano = document.getElementById('txtano')

    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {

        window.alert('[ERRO] Verifique os dados e tente novamente!')
    
    } else {
        var fsex = document.getElementsByName('radsex')
        
        var idade = ano - Number(fano.value)

        var genero = ''

        var img = document.createElement('img')
        img.setAttribute9('id', 'foto')

        if (fsex[0].checked){
            genero = 'homem'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'foto-Kid.png')
            }
            else if(idade < 21){//jovem
            }
            else if (idade < 50) {//adulto

            } else {//idoso

            }


        }else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'foto-Kid.png')
            }
            else if(idade < 21){//jovem
            }
            else if (idade < 50) {//adulto

            } else {//idoso

            }
        }

        res.innerHTML = `detectamos ${genero} com ${idade} anos. `
        res.appendChild(img)

       
      
        }
    }

   
        
    

