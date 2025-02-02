"use client";
import OrderTable from "@/components/ui_component/common/Order/OrderTable";
import { DynamicPagination } from "@/components/ui_component/common/Pagination/DynamicPagination";
import { usePendingOrder } from "@/hooks/order.hook";
import React, { useState } from "react";

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = usePendingOrder(currentPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <div>
        <div className="min-h-[85vh]">
          {isLoading ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-solid border-gray-900"></div>
            </div>
          ) : (
            <>
              {" "}
              {data?.data && (
                <OrderTable action={true} orderData={data.data}></OrderTable>
              )}
            </>
          )}
        </div>{" "}
        <div className="flex justify-center mt-5">
          {data?.meta && data && (
            <DynamicPagination
              meta={data.meta}
              onPageChange={handlePageChange}
            ></DynamicPagination>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
