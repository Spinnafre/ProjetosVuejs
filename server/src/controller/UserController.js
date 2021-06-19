const connection=require('../database/connections')

module.exports={
    async create(req,res){
        const {name,cpf,age,sex}=req.body

        await connection('user').insert({
            name,cpf,age,sex
        })

        return res.status(201).json({name,cpf,age,sex})
    },
    async index(req,res){
        const users=await connection('user').select('*')
        return res.status(200).send(users)
    },
    async show(req,res){
        const id=req.params.id
        const user=await connection('user').where('id',id).select('*')
        return res.status(200).send(user)
    }
}