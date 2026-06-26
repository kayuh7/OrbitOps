import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request){
    const body = await request.json();

    const newProject = await prisma.project.create({
        data: {
            projectName: body.projectName,
            status: body.status,
            dockerImage: body.dockerImage
        }
    });

    return NextResponse.json(newProject);
}

export async function GET(){
    const projects = await prisma.project.findMany();
    return NextResponse.json(projects);
}