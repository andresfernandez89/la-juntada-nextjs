import TablePurchases from "@/components/tablePurchases";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="m-auto flex min-h-screen max-w-6xl flex-col items-center p-[30px] max-lg:px-3">
      <div className="mb-4 flex content-end items-end gap-x-1 self-end">
        <Button asChild>
          <Link href="/purchase">Agregar compra</Link>
        </Button>
        <Button variant="destructive">Limpiar lista</Button>
      </div>
      <TablePurchases />
    </main>
  );
}
