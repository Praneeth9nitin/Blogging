import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { signupInput,signinInput } from '@100xdevs/medium-common'

export const userRoute = new Hono<{
    Bindings:{
        DATABASE_URL:string
        JWT_SECRET_KEY:string
    }
}>


userRoute.post("/signup",async (c)=>{
    const body = await c.req.json()
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const check = signupInput.safeParse(body)

    if(!check){
        c.status(401)
        return c.json({msg:"input error"})
    }
    
    try{
        const res = await prisma.user.create({
            data:{
                email:body.username,
                name:body.name,
                password:body.password
            },
            select:{
                id:true
            }
        })

        const token = await sign(res,c.env.JWT_SECRET_KEY)
        return c.json({token})

    }catch (error){
        console.log(error)
        return c.status(404)
    }
})

userRoute.post("/signin",async (c)=>{
    const body = await c.req.json()
    
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const check = signupInput.safeParse(body)

    if(!check){
        c.status(401)
        return c.json({msg:"input error"})
    }

    try{
        const res = await prisma.user.findUnique({
            where:{
                email:body.username
            },
        })

        const token = await sign({id:res?.id},c.env.JWT_SECRET_KEY)
        return c.json({token})
    }catch(error){
        c.status(404)
        return c.json({msg:error})
    }
})
