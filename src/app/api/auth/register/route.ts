import { connectToDatabase } from "@/helpers/server-helper";
import { NextResponse } from "next/server";
import prisma from "../../../../../prisma";
import bcrypt from 'bcrypt';
export const POST = async (req: Request) => {
    try{
        const { name , email, password } = await req.json();
        if(!name || !email || !password) 
            return NextResponse.json({message: "Invalid Data"}, {status: 422 });
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("Oka2")

        await connectToDatabase();
        const user = prisma.user.create({data:{email,name, hashedPassword}})
        console.log("Oka2")
        return NextResponse.json({user}, {status:201});
    } catch (error) {
        return NextResponse.json({message: "Server Error"}, {status:500});
    } finally {
         await prisma.$disconnect();
    }
}