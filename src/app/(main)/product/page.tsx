"use client";
import React, { useEffect } from "react";
import AllProduct from "../../../components/ui_component/common/AllProduct/AllProduct";

import { useAllProduct } from "@/hooks/product.hook";
import { useAllCategory } from "@/hooks/category.hook";
import { useFilterSortSearch } from "@/lib/utils/hook/useFilterSortSearch";
import SearchSortFilter from "@/components/ui_component/common/searchSortFilter/SearchSortFilter";
import { useSearchParams } from "next/navigation";

const Products = () => {
  const {
    searchTerm,
    setSearchTerm,
    sortCriteria,
    setSortCriteria,
    categoryId,
    setCategoryId,
    debouncedSearchTerm,
  } = useFilterSortSearch();

  const { data: { data: category } = {} } = useAllCategory();
  const { data } = useAllProduct(debouncedSearchTerm, categoryId, sortCriteria);

  const searchParams = useSearchParams(); // Access query parameters
  const initialCategoryId = searchParams.get("categoryId");

  useEffect(() => {
    if (initialCategoryId) {
      setCategoryId(initialCategoryId);
    }
  }, [initialCategoryId, setCategoryId]);
  return (
    <div>
      <div className="sm:mt-0 px-2">
        <SearchSortFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          sortCriteria={sortCriteria}
          onSortChange={setSortCriteria}
          categoryId={categoryId}
          onCategoryChange={setCategoryId}
          categoryOptions={category || []}
        />
      </div>
      {data?.data && <AllProduct data={data.data} />}
    </div>
  );
};

export default Products;
