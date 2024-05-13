"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePurchases } from "@/context/PurchaseContext";
import Link from "next/link";
import { useEffect } from "react";

export default function CardPurchase({
  id,
  status,
}: {
  id: string;
  status: string;
}) {
  const { createPurchase, updatePurchase, getPurchaseById, selectedPurchase } =
    usePurchases();

  useEffect(() => {
    getPurchaseById(Number(id));
  }, [id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const user = (form.elements.namedItem("user") as HTMLInputElement).value;
    const detail = (form.elements.namedItem("detail") as HTMLInputElement)
      .value;
    const amount = parseFloat(
      (form.elements.namedItem("amount") as HTMLInputElement).value,
    );
    status === "create"
      ? createPurchase({ user, detail, amount })
      : updatePurchase(Number(id), { user, detail, amount });
  };
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Nueva compra</CardTitle>
        <CardDescription>
          Agrega tu nueva compra para calcular el gasto total.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="user">¿Quién compró?</Label>
              <Input
                id="user"
                name="user"
                placeholder={
                  status === "create" ? "Nombre completo" : undefined
                }
                defaultValue={
                  status === "edit" ? selectedPurchase?.user : undefined
                }
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="detail">¿Qué comprasté?</Label>
              <Input
                id="detail"
                name="detail"
                placeholder={
                  status === "create" ? "Detalle de compra" : undefined
                }
                defaultValue={
                  status === "edit" ? selectedPurchase?.detail : undefined
                }
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="amount">Monto total de tu compra</Label>
              <Input
                id="amount"
                name="amount"
                type="number"
                placeholder={
                  status === "create" ? "Ingresa el monto" : undefined
                }
                defaultValue={
                  status === "edit" ? selectedPurchase?.amount : undefined
                }
                required
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" asChild>
            <Link href="/">Volver</Link>
          </Button>
          <Button type="submit">
            {status == "create" ? "Agregar" : "Editar"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
