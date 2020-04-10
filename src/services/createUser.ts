// PRIMEIRA FORMA DE FAZER TIPAGEM
// export default function createUser(name = '', email: string, password: string) {
//   const user = {
//     name,
//     email,
//     password,
//   }
//   return user;
// }

// SEGUNDA FORMA DE FAZER A TIPAGEM
// interface é conjunto de tipagem de dados
// ? representa não obrigatório
// | siginifica ou
// string[] array de strings

interface TechObject {
  title: string,
  experience: number,
}

interface CreateUserData {
  name?: string,
  email: string,
  password: string,
  techs: Array<string | TechObject>,
}

export default function createUser({ name , email, password, techs }: CreateUserData) {
  const user = {
    name,
    email,
    password,
    techs,
  }

  return user;
}