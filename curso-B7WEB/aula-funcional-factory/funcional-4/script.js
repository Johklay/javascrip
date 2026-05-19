//FUNCIONAL: HERANÇA

const defaultUser = {
    name: '',
    email: '',
    level: 1
}

const user1 = {
    ...defaultUser,
    name: 'John',
    email: 'suporte@gamail.com'
}

const adm1 = {
    ...defaultUser,
    name: 'Admin',
    email:'admin@gamil.com',
    level: 2
}

console.log(adm1);