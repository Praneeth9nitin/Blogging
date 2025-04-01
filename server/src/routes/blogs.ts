import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { Hono } from 'hono'
import { decode,verify } from "hono/jwt";
import { createBlogInput,updateBlogInput } from '@100xdevs/medium-common';

export const blogRoute = new Hono<{
    Bindings:{
        DATABASE_URL:string
        JWT_SECRET_KEY:string
    },
    Variables:{
        userId:any
    }
}>();

blogRoute.use(async(c,next)=>{
    const header = c.req.header('Authorization')
    
    if(!header){
        c.status(401)
        return c.json({error:"unautheroized"})
    }
    const token = header.split(" ")[1]
    
    const verified = await verify(token,c.env.JWT_SECRET_KEY)

    if(!verified){
        c.status(401)
        return c.json({error:"unauthorized"})
    }
    c.set("userId",verified.id)
    await next()
})

blogRoute.post("/",async c=>{
    const userId = await c.get("userId")

    const prisma = new PrismaClient({
            datasourceUrl:c.env.DATABASE_URL
        }).$extends(withAccelerate())

    const body = await c.req.json()
    const check = createBlogInput.safeParse(body)
    
        if(!check){
            c.status(401)
            return c.json({msg:"input error"})
        }

    try{
        const blog = await prisma.post.create({
            data:{
                title:body.title,
                content:body.content,
                published:body.published,
                authorId:userId
            }
        })
        return c.json({id:blog.id})
    }catch(error){
        console.log(error)
        c.status(401)
        return c.json({error})
    }
})

blogRoute.put("/",async c=>{
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const body = await c.req.json()
    const check = updateBlogInput.safeParse(body)
    
        if(!check){
            c.status(401)
            return c.json({msg:"input error"})
        }
    
    try{
        const blogUpdate = prisma.post.update({
            where:{
                id:body.id
            },
            data:{
                title:body.title,
                content:body.content,
            }
        })
        return c.json({id:body.id})
    }catch(error){
        console.log(body)
        return c.json({error})
    }
})

blogRoute.get("/bulk",async c=>{
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const blogs = await prisma.post.findMany({
        select:{
            id:true,
            title:true,
            content:true,
            postTime:true,
            author:{
                select:{
                    name:true
                }
            }
        }
    })

    return c.json({blogs})
})

blogRoute.get("/:id",async c=>{
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())
    const param = c.req.param('id')
    
    const blog = await prisma.post.findUnique({
        where:{
            id:param
        },
        select:{
            title:true,
            content:true,
            postTime:true,
            author:{
                select:{
                    name:true,
                    bio:true
                }
            }
        }
    })

    if(!blog){
        c.status(401)
        return c.text('invaid id')
    }
    c.status(200)
    return c.json({blog})

})