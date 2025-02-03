import Loader from "@/app/components/Loader";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from 'react'


interface ProductPageProps {
  // Updated to align with Next.js 15
  params: Promise<{ slug: string }>;
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "jewelry" && slug.current == $slug][0] {
       id,
      name,
     
      _type,
      description,
      price,
      image,
    }`,
    { slug }
  );
}

// Component to load Product content
function ProductContent({ product }: { product: Product }) {
  const whatsappNumber = "923212558027";
  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">
      <div className="max-w-4xl w-full bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-96 md:h-auto">
            {product.image && (
              <Image
                src={urlFor(product.image).url()}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg md:rounded-none"
              />
            )}
          </div>
          <div className="p-6 flex flex-col justify-between">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-400 mb-6">{product.description}</p>
            <p className="text-2xl font-semibold text-emerald-400 mb-6">
              {product.price.toFixed(2)}
            </p>

            <div className="flex flex-col items-center space-y-4">
                                           <Link
                                             href={`https://wa.me/${whatsappNumber}?text=Hello,%20I%20am%20interested%20in%20the%20product%20${encodeURIComponent( product.name)}`}
                                             target="_blank"
                                             rel="noopener noreferrer"
                                             className="bg-white rounded-full p-2 shadow-lg hover:scale-110 transition-transform"
                                           >
                                             <Image
                                               src="/whatsapp.jpg"
                                               alt="WhatsApp"
                                               width={30}
                                               height={30}
                                             />
                                           </Link>
                                           <button
                                             className="w-full py-2 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg font-medium transition-transform hover:scale-105"
                                           >
                                             Add to Cart
                                           </button>
                                           <Link
                  href={`/ContactUs?product=${encodeURIComponent(product.name)}&id=${product.id} &price=${product.price}`}
                >
                  <button className="w-full py-2 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg font-medium shadow-lg hover:shadow-2xl hover:scale-105 transition-transform">
                    Buy Now
                  </button>
                </Link>
                                         </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { slug } = await params; // Await destructuring of slug directly
  const product = await getProduct(slug);

  return (
    <Suspense fallback={<Loader />}>
      <ProductContent product={product} />
    </Suspense>
  );
};

export default ProductPage;
