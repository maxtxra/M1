// criação de promessa

const myPromise = new ((resolve, reject) =>{
    const nome = "Max"

    if (nome === "Max"){
        resolve('Usuário Max encontrado!')
    } else {
        reject('Usuário não encontrado.')
        
    }


})

myPromise.then(data) => {
    console.log(data)
}