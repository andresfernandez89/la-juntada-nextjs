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
import { FaRegTrashAlt } from "react-icons/fa";
import { RiEditFill } from "react-icons/ri";
import { Button } from "./ui/button";

export default function TablePurchases() {
  const { purchases, getAllPurchases, deletePurchase } = usePurchases();

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
              <TableCell className="text-left font-medium">
                {purchase.user}
              </TableCell>
              <TableCell className="text-left" colSpan={2}>
                {purchase.detail}
              </TableCell>

              <TableCell className="text-right">{purchase.amount}</TableCell>
              <TableCell className="flex items-center gap-x-2 py-2">
                <Button className="bg-slate-300 hover:bg-slate-100">
                  <RiEditFill />
                </Button>
                <Button
                  onClick={async () => {
                    deletePurchase(purchase.id);
                  }}
                  variant="destructive"
                >
                  <FaRegTrashAlt />
                </Button>
              </TableCell>
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
