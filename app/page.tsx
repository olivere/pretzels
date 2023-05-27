import { sql } from "@vercel/postgres";

export default async function Home() {
  const { rows: products } = await sql`SELECT * FROM products`;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hooray. You&apos;ve been hacked! Just kidding.
      <div className="flex flex-col items-center justify-center">
        {products.length === 0 ? (
          <h1 className="text-4xl font-bold">No products found</h1>
        ) : (
          <>
            <h1 className="text-4xl font-bold">Products</h1>
            <ul className="mt-8">
              {products.map((product) => (
                <li key={product.id}>{product.name}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </main>
  );
}
