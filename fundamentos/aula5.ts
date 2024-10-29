const num: number = 15

if(num > 15){
    console.log("Numero maior que 15")

} else if (num == 15){ 
    console.log("Numero é igual a 15")

} else { 
    console.log("Numero menor que 15")
}


const typeUser = {
    admin: 'Seja bem-vindo admin',
    student: 'Você é um estudante',
    viewer: 'Você pode visualizar'
};


function validateUser(user: string) {
    console.log(typeUser[user as keyof typeof typeUser]);
}

const usuario = 'admin';
 
validateUser(usuario);
