import prisma from "@repo/db/prisma";
import { NextRequest,NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { signUpSchema,signUpType } from "@repo/zod-types/zod";

const jwtSecret = process.env.JWT_SECRET as string;

export async function POST(req:NextRequest){
    const { email, password, username }:signUpType = await req.json();

    if(!signUpSchema.safeParse({email,password,username})){
        return NextResponse.json({msg:"Invalid data input type.",success:false})
    }

    const prev_user = await prisma.user.findFirst({
        where:{
            email
        }
    })

    if(prev_user){
        return NextResponse.json({msg:"User exists already!"})
    }

    try{
        await prisma.user.create(
            {data:{
                email,password,username
            }}
        );

        const token = jwt.sign({email},jwtSecret)
        cookies().set("authToken",token);
        return NextResponse.json({msg:"User created successfully!",token,success:true})

    }catch(err:any){
        console.log(err.message);
        return NextResponse.json({msg:"Internal Server Error",success:false})
    }

}