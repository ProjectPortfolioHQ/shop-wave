import { useEffect, useState } from "react";
import CheckboxGroupField, { IItemValue } from "./CheckboxGroupField";
import Divider from "./Divider";
import PriceRangeField, { ValueRange } from "./PriceRangeField";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const serviceList: IItem[] = [
  {
    id: "isPromotion",
    label: "Discount",
  },
  {
    id: "isFreeShip",
    label: "Free Shipping",
  },
] as const;

const sortList: IItem[] = [
  {
    id: "salePrice:DESC",
    label: "High price",
  },
  {
    id: "salePrice:ASC",
    label: "Low price",
  },
] as const;

export interface IItem {
  id: string;
  label: string;
}

const FilterProduct = () => {
  const searchParams = useSearchParams()!;
  const pathname = usePathname();
  const router = useRouter();

  const newParams = new URLSearchParams(searchParams);
  const valueSort = searchParams.get("_sort") ?? "";
  const isPromotion =
    searchParams.get("isPromotion") === "true" ? ["isPromotion"] : [];
  const isFreeShip =
    searchParams.get("isFreeShip") === "true" ? ["isFreeShip"] : [];
  const valueService = [...isPromotion, ...isFreeShip];
  const fromPrice = searchParams.get("salePrice_gte") ?? 0;
  const toPrice = searchParams.get("salePrice_lte") ?? 0;

  const handelPushSearch = () => {
    newParams.set("_start", "10");
    router.push(`${pathname}?${newParams.toString()}`);
  };

  const handleChangeValueService = (item: IItemValue) => {
    if (valueService.includes(item.id)) {
      newParams.delete(item.id);
    } else {
      newParams.append(item.id, "true");
    }
    handelPushSearch();
  };

  const handleChangeValueSort = (item: IItemValue) => {
    if (item.id !== searchParams.get("_sort")) {
      newParams.set("_sort", item.id);
    } else {
      newParams.delete("_sort");
    }

    handelPushSearch();
  };

  const handleRange = (value: any) => {
    newParams.set("salePrice_gte", value.from);
    newParams.set("salePrice_lte", value.to);

    handelPushSearch();
  };

  return (
    <div className="w-full p-2 bg-white border-solid border border-gray-200 rounded-md">
      <PriceRangeField
        value={{ from: Number(fromPrice), to: Number(toPrice) }}
        onChange={handleRange}
      />
      <Divider />

      <CheckboxGroupField
        title="Service"
        items={serviceList}
        onCheckedChange={handleChangeValueService}
        value={valueService}
      />
      <Divider />

      <CheckboxGroupField
        title="Sort"
        items={sortList}
        onCheckedChange={handleChangeValueSort}
        value={[valueSort]}
      />
    </div>
  );
};

export default FilterProduct;
