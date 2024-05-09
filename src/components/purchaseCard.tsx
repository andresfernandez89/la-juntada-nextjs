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

export function PurchaseCard() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Nueva compra</CardTitle>
        <CardDescription>
          Agrega tu nueva compra para calcular el gasto total.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">¿Quién compró?</Label>
              <Input id="name" placeholder="Nombre completo" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="detail">¿Qué comprasté?</Label>
              <Input id="detail" placeholder="Detalle de compra" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="total">Monto total de tu compra</Label>
              <Input id="total" type="number" placeholder="Ingresa el monto" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Agregar</Button>
      </CardFooter>
    </Card>
  );
}
