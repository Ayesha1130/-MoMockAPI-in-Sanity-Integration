"use client";

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { useState, useEffect } from "react";
import imageUrlBuilder from "@sanity/image-url"; // Correct import
import Loader from "@/components/Loader";

// Image URL Builder setup
const builder = imageUrlBuilder(client);

interface Product {
  _id: string;
  name: string;
  price: number;
  discountPercentage: number;
  image: {
    asset: {
      _id: string;
      url: string;
    };
  };
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]); // Specify type for products
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const query = await client.fetch(
          `*[_type == "product"] {
            _id,
            name,
            price,
            discountPercentage,
            image { asset -> { _id, url } }
          }`
        );
        setProducts(query);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading)
    return (
      <p>
        <Loader />
      </p>
    );

  return (
    <div className="bg-black p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-20">
        {products.map((product) => (
          <div
            key={product._id}
            className="border border-yellow-400 p-4 space-y-2 bg-white"
          >
            {product.image?.asset ? (
              <Image
                src={builder.image(product.image).width(200).height(200).url()!}
                alt={product.name}
                width={400}
                height={400}
                className="rounded w-full h-auto bg-cover"
              />
            ) : (
              <p>No image available</p>
            )}
            <h2 className="text-xl font-serif">{product.name}</h2>
            <p className="text-sm font-serif">
              Price: ${product.price} ({product.discountPercentage}% off)
            </p>
            <p className="text-sm font-serif">
              Price without discount: $
              {product.price -
                (product.price * product.discountPercentage) / 100}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
