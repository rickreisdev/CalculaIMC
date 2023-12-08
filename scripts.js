const form = document.getElementById('form')

form.addEventListener('submit', function(event){
    event.preventDefault()

    const peso = document.getElementById('weight').value
    const altura = document.getElementById('height').value

    const imc = (peso / (altura * altura)).toFixed(2)

    const value = document.getElementById('value')
    const desc = document.getElementById('description')
    let description = '';

    value.classList.add('attention')
    desc.classList.add('attention')

    document.getElementById('infos').classList.remove('hidden')

    if(imc < 18.5){
        description = "Cuidado! Você pode estar abaixo do peso!"
    }else if(imc >= 18.5 && imc <= 25){
        description = "Você está no peso ideal!"
        value.classList.remove('attention')
        value.classList.add('normal')
        desc.classList.remove('attention')
        desc.classList.add('normal')
    }else if(imc >= 25 && imc <= 30){
        description = "Cuidado! Você pode estar com sobrepeso!"
    }else if(imc >= 30 && imc <= 35){
        description = "Cuidado! Você pode estar com obesidade moderada!"
    }else if(imc >= 35 && imc <= 40){
        description = "Cuidado! Você pode estar com obesidade severa!"
    }else{
        description = "Cuidado! Você pode estar com obesidade mórbida!"
    }
    
    value.textContent = imc.replace('.', ',')
    document.getElementById('description').textContent = description
})