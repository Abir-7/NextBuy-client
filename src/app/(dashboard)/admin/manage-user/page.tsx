"use client";
import { useGetAllUser } from "@/hooks/user.hook";
import React, { useState } from "react";
import UserTable from "./UserTable";
import SearchInput from "@/components/ui_component/common/searchSortFilter/SearchInput";
import useDebounce from "@/lib/utils/useDebounce";
import FilterSortSelect from "@/components/ui_component/common/searchSortFilter/FilterSortSelect";

const ManageUser = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isBlocked, setIsblock] = useState("");

  const searchTermText = useDebounce(searchTerm, 500);

  const { data } = useGetAllUser(searchTermText, isBlocked);

  return (
    <div>
      <div className="flex justify-between">
        <SearchInput
          placeholder="Search by Email"
          value={searchTerm}
          onChange={setSearchTerm}
        ></SearchInput>
        <div className="flex items-center gap-2">
          <p>Filter By Status</p>
          <FilterSortSelect
            onChange={setIsblock}
            value={isBlocked}
            options={[
              { label: "Blocked User", value: "true" },
              { label: "Active User", value: "false" },
            ]}
          ></FilterSortSelect>
        </div>
      </div>
      {data?.data && <UserTable users={data?.data}></UserTable>}
    </div>
  );
};

export default ManageUser;
