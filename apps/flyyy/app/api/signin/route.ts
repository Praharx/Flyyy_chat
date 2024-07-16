import prisma from "@repo/db/prisma";
import { NextResponse,NextRequest } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { signInSchema,signInType } from "@repo/zod-types/zod";

const jwtSecret = process.env.JWT_SECRET as string;

export async function POST(req:NextRequest){
    const {email,password}:signInType = await req.json();

    if(!signInSchema.safeParse({email,password})){
        return NextResponse.json({msg:"Invalid data types please check.",success:false})
    }

    const prev_user = await prisma.user.findFirst({
        where:{
            email
        }
    })

    if(!prev_user){
        return NextResponse.json({msg:"Please sign-up prior to this action!!"})
    }

    try{
        if(prev_user.password != password){
            return NextResponse.json({msg:'Password is incorrect.Please try again :))',success:false})
        } else{
            const token = jwt.sign({email},jwtSecret);
            cookies().set("authToken",token);

            return NextResponse.json({msg:"User signed In successfully!",token,success:true})
        }
        
    }catch(err){
        return NextResponse.json({msg:"Internal Server Error",success:false})
    }
}