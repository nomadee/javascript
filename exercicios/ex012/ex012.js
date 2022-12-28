let now = new Date()

let hora = now.getHours()

console.log(`agora sao ${hora} horas!`)
 if (hora < 12){
    console.log(`bom dia`)
 } 
 else if (hora <= 18){
    console.log(`boa tarde`)
 }
 else if ( hora > 18){
    console.log(`boa noite`)
 }
