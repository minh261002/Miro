"use client";

import qs from "query-string";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { useDebounceValue } from "usehooks-ts";

const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [debouncedValue] = useDebounceValue(value, 500); // Sử dụng giá trị đầu tiên của mảng

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: { search: debouncedValue },
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  }, [debouncedValue, router]);

  return (
    <div className="w-full relative">
      <Search className="w-4 h-4 absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground" />
      <Input
        className="w-full max-w-[516px] pl-9"
        placeholder="Search boards"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchInput;
