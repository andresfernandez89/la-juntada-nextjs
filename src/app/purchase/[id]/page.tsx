import CardPurchase from "@/components/cardPurchase";

export default function page({ params }: { params: { id: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center pt-[40px]">
      <CardPurchase id={params.id} status="edit" />
    </main>
  );
}
