const {getUserByEmail, createUser, checkPassword, getUserById} = require("../services/users")
const {createToken, getToken} = require("../services/tokens")
const express = require("express")
const app = express()
const PORT = 3030

app.use(express.json())

// POST /api/auth/signup
    // BODY = {
    //     "email": "teste@teste.com",
    //     "password": "A1b2C3d$",
    //     "passwordConfirmation": "A1b2C3d$"
    // }
// POST /api/auth/login
// BODY = {
//     "email": "COISAS",
//     "password": "COISAS"
// }
// GET /api/user
// GET /api/user/:id

app.post("/api/auth/singup", async (req, res) => {
    const {email, password, passwordConfirmation} = req.body

    //FALSE = NÃO TEM EMAIL | TRUE = TEM EMAIL
    const verificacao = await getUserByEmail(email)

    if (password !== passwordConfirmation || verificacao){
        return res.status(400).json({
            message: "Os dados introduzidos não são válidos.",
            errors: {
                email: verificacao === true ? "O endereço introduzido já está registado." : undefined,
                passwordConfirmation: password !== passwordConfirmation ? "As passwords não coincidem." : undefined,
            }
        })
    }

    const id = await createUser({email, password, passwordConfirmation})

    res.status(200).json({message: "Utilizador Criado com Sucesso!", _id: id})


})

app.post("/api/auth/login", async (req, res) => {
    const {email, password} = req.body

    //FALSE = NÃO TEM EMAIL | TRUE = TEM EMAIL
    const verificacao = await getUserByEmail(email)

    if(!verificacao){
        return res.status(404).json({message: "O utilizador não foi encontrado!"})
    }
    const passwordCheck = await checkPassword(email, password)

    if(!passwordCheck){
        return res.status(401).json({message: "A password introduzida é inválida!"})
    }   

    //CRIAR TOKEN
    const token = await createToken(email)

    res.status(200).json({token: token})


})

app.get("/api/user", async (req, res) => {
    //VAMOS BUSCAR O HEADER E COLOCALO NUMA VARIAVEL
    const token = req.header("authorization")
    //VERIFICAMOS SE O HEADER EXISTE
    if(!token){
        return res.status(401).json({message: "Não foi enviado o token de autenticação!"})
    }
    //VAMOS BUSCAR BUSCAR O ID DO USER ASSOCIADO A ESTE TOKEN
    const userId = await getToken(token)

    //VERIFICAMOS SE O TOKEN EXISTEM NA BD
    if(!userId){
        return res.status(403).json({message: "Não existe nenhuma sessão com o token indicado!"})
    }

    //VAMOS BUCAR O USER USANDO O SEU ID
    const user = await getUserById(userId)

    //RETORNAMOS AS INFORMAÇÕES NECESSARIAS
    res.status(200).json({_id: userId, email: user.email})
})

app.get("/api/user/:id", async (req, res) => {
    const {id} = req.params
    //VAMOS BUSCAR O HEADER E COLOCALO NUMA VARIAVEL
    const token = req.header("authorization")
    //VERIFICAMOS SE O HEADER EXISTE
    if(!token){
        return res.status(401).json({message: "Não foi enviado o token de autenticação!"})
    }
    //VAMOS BUSCAR BUSCAR O ID DO USER ASSOCIADO A ESTE TOKEN
    const userId = await getToken(token)

    //VERIFICAMOS SE O TOKEN EXISTEM NA BD
    if(!userId){
        return res.status(403).json({message: "Não existe nenhuma sessão com o token indicado!"})
    }
    //VERIFICAMOS SE O UTILIZADOR É O MESMO QUE ESTAMOS A PROCURA
    return res.status(200).json({sameUser: userId == id ? true : false})

})

app.listen(PORT, () => {console.log("liguei")})
