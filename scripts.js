const form = document.getElementById('form')

form.addEventListener('submit', function (event) {
    event.preventDefault()

    const peso = document.getElementById('weight').value
    const altura = document.getElementById('height').value

    const imc = (peso / (altura * altura)).toFixed(2)

    const value = document.getElementById('value')
    const desc = document.getElementById('description')
    const ilus = document.getElementById('ilus')
    const ilus2 = document.getElementById('ilus2')
    const ilus3 = document.getElementById('ilus3')
    let description = '';

    ilus.classList.remove('hidden')
    value.classList.add('attention')
    desc.classList.add('attention')

    document.getElementById('infos').classList.remove('hidden')

    if (imc < 18.5) {
        description = "Cuidado! Você pode estar abaixo do peso!"
        ilus.classList.add('hidden')
        ilus3.classList.add('hidden')
        ilus2.classList.remove('hidden')

    } else if (imc >= 18.5 && imc <= 25) {
        description = "Você está no peso ideal!"
        ilus.classList.remove('hidden')
        ilus2.classList.add('hidden')
        ilus3.classList.add('hidden')

        value.classList.remove('attention')
        value.classList.add('normal')

        desc.classList.remove('attention')
        desc.classList.add('normal')

    } else if (imc >= 25 && imc <= 30) {
        description = "Cuidado! Você pode estar com sobrepeso!"
        ilus.classList.remove('hidden')
        ilus2.classList.add('hidden')
        ilus3.classList.add('hidden')

    } else if (imc >= 30 && imc <= 35) {
        description = "Cuidado! Você pode estar com obesidade moderada!"
        ilus.classList.add('hidden')
        ilus3.classList.add('hidden')
        ilus2.classList.remove('hidden')

    } else if (imc >= 35 && imc <= 40) {
        description = "Cuidado! Você pode estar com obesidade severa!"
        ilus.classList.add('hidden')
        ilus3.classList.add('hidden')
        ilus2.classList.remove('hidden')

    } else {
        description = "Cuidado! Você pode estar com obesidade mórbida!"
        ilus.classList.add('hidden')
        ilus2.classList.add('hidden')
        ilus3.classList.remove('hidden')
    }

    value.textContent = imc.replace('.', ',')
    document.getElementById('description').textContent = description
})