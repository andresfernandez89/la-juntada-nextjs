"use client";
import TablePurchases from "@/components/tablePurchases";
import { Button } from "@/components/ui/button";
import { usePurchases } from "@/context/PurchaseContext";
import Link from "next/link";

export default function Home() {
  const { deleteAllPurchases } = usePurchases();
  return (
    <main className="m-auto flex min-h-screen max-w-6xl flex-col items-center p-[30px] max-lg:px-3">
      <div className="mb-4 flex content-end items-end gap-x-1 self-end">
        <Button asChild>
          <Link href="/purchase">Agregar compra</Link>
        </Button>
        <Button
          onClick={async () => {
            if (confirm("¿Seguro qué deseas eliminar todo?"))
              deleteAllPurchases();
          }}
          variant="destructive"
        >
          Limpiar lista
        </Button>
      </div>
      <TablePurchases />
    </main>
  );
}
