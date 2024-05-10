"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { usePurchases } from "@/context/PurchaseContext";
import { totalAmount } from "@/lib/utils";
import { useEffect } from "react";

export default function TablePurchases() {
  const { purchases, getAllPurchases } = usePurchases();

  useEffect(() => {
    getAllPurchases();
  }, []);
  return (
    <>
      <Table>
        <TableCaption>Una lista con todas las compras.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Comprador</TableHead>
            <TableHead colSpan={2}>Detalle</TableHead>
            <TableHead className="text-right">Monto</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {purchases.map((purchase) => (
            <TableRow key={purchase.id}>
              <TableCell className="font-medium">{purchase.user}</TableCell>
              <TableCell className="text-left" colSpan={2}>
                {purchase.detail}
              </TableCell>

              <TableCell className="text-right">{purchase.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4} className="w-full text-right">
              <span className="text-lg">Total </span> {totalAmount(purchases)}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
}
