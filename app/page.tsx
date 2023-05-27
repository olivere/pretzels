import { sql } from "@vercel/postgres";

export default async function Home() {
  const { rows: products } = await sql`SELECT * FROM products`;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Products</h1>
        {products.length === 0 ? (
          <span className="text-gray-500">No products found</span>
        ) : (
          <>
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
