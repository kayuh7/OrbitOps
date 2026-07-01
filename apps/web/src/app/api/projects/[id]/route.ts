import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function PUT(request: Request, { params }: { params: Promise<{ id: string }>; }) {
    const body = await request.json();
    const { id } = await params;
    
    const updatedProject = await prisma.project.update({
        where: {
            id
        },
        data: {
            projectName: body.projectName,
            status: body.status,
            dockerImage: body.dockerImage
        }
    });
    return NextResponse.json(updatedProject);
}

export async function GET(request: Request, { params }: { params: Promise<{ id: string }>; }) {
    const { id } = await params;
    const project = await prisma.project.findUnique({
        where: {
            id
        }
    });
    return NextResponse.json(project);
}