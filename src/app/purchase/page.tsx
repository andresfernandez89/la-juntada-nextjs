import CardPurchase from "@/components/cardPurchase";

export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-[40px]">
      <CardPurchase status="create" />
    </main>
  );
}
