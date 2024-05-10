import { prisma } from "@/lib/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { NextResponse } from "next/server";

interface Params {
  params: {
    id: string;
  };
}

export async function GET(request: Request, { params }: Params) {
  try {
    const purchase = await prisma.purchase.findFirst({
      where: { id: Number(params.id) },
    });
    if (!purchase) {
      return NextResponse.json({ message: "Purchase not found", status: 404 });
    }
    return NextResponse.json(purchase);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}

export async function DELETE(request: Request, { params }: Params) {
  try {
    const deletePurchase = await prisma.purchase.delete({
      where: { id: Number(params.id) },
    });
    if (!deletePurchase) {
      return NextResponse.json(
        { message: "Purchase not found" },
        { status: 404 },
      );
    }
    return NextResponse.json(deletePurchase);
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json({
          message: "Purchase not found",
          status: 404,
        });
      }
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}

export async function PUT(request: Request, { params }: Params) {
  try {
    const { detail } = await request.json();
    const updatedPurchase = await prisma.purchase.update({
      where: { id: Number(params.id) },
      data: { detail },
    });

    return NextResponse.json(updatedPurchase);
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json({
          message: "Purchase not found",
          status: 404,
        });
      }
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}
