import { Input } from "@/components/ui/input";
import { useAllProductNavsearch } from "@/hooks/product.hook";
import useDebounce from "@/lib/utils/useDebounce";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
interface NavSearchProps {
  toggleSearchBar: () => void;
}
const NavSearch: React.FC<NavSearchProps> = ({ toggleSearchBar }) => {
  const [searchText, setSearchText] = useState("");
  const debounce = useDebounce(searchText, 500);

  const { data } = useAllProductNavsearch(debounce || "");

  const products = data?.data || [];

  return (
    <div>
      <div className="flex p-3 pt-1 items-center ">
        <Input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="bg-white"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="p-1 space-y-1 ">
        {products.map((product) => (
          <Link
            onClick={toggleSearchBar}
            href={`/product/${product.productId}`}
            key={product.productId}
          >
            <div className="border flex items-center justify-between text-white rounded-md p-3 shadow-md hover:shadow-lg">
              <Image
                width={100}
                height={100}
                src={product.images[0]}
                alt={product.name}
                className="w-10 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold ">{product.name}</h3>
              <p className="text-sm text-gray-500 mt-1.5">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavSearch;
