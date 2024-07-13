import { prisma } from "@/lib/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
  try {
    const purchases = await prisma.purchase.findMany();
    return NextResponse.json(purchases);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}

export async function POST(request: Request) {
  try {
    const { user, detail, amount } = await request.json();
    const newPurchase = await prisma.purchase.create({
      data: { user, detail, amount },
    });
    return NextResponse.json(newPurchase);
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return NextResponse.json({
          message: "Purchase has already been created",
          status: 404,
        });
      }
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}

export async function DELETE() {
  try {
    const deletedPurchaseInfo = await prisma.purchase.deleteMany();
    return NextResponse.json(deletedPurchaseInfo);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}
