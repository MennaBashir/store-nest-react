import { trans } from "@mongez/localization";
// TODO: What on earth this component is doing here?
import StyledCheckBox from "app/shop/pages/ShopPage/components/FilterSide/StyledCheckBox";
import { Product } from "app/shop/utils";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "design-system/components/ui/table";
import WishlistItem from "../WishlistItem";

export type WishlistTableProps = {
  products: Product[];
  removeProduct: (productId: number | string) => void;
};

export default function WishlistTable({
  products,
  removeProduct,
}: WishlistTableProps) {
  return (
    <div className="max-w-[1145px]">
      {/* Ensure table is scrollable on small screens */}
      <Table className="border border-solid border-[#e9ecef] table-auto w-full">
        <TableHeader className="bg-[#ececec]">
          <TableRow className="font-custom text-[17px] font-bold text-specialColor-secondary">
            <TableHead className="w-1/2 md:w-[40%] md:py-[18px]">
              <div className="flex items-center gap-2">
                <div className="cursor-pointer">
                  <StyledCheckBox checked={false} />
                </div>
                {trans("product")}
              </div>
            </TableHead>
            {/* Hide these columns on smaller screens */}
            <TableHead className="hidden md:table-cell w-[10%] md:py-[18px] text-center">
              {trans("price")}
            </TableHead>
            <TableHead className="hidden md:table-cell w-[15%] md:py-[18px] text-center">
              {trans("stockStatus")}
            </TableHead>
            <TableHead className="hidden md:table-cell w-[15%] md:py-[18px] text-center">
              {trans("action")}
            </TableHead>
            <TableHead className="hidden md:table-cell w-[10%] text-center">
              {trans("remove")}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map(product => (
            <WishlistItem
              key={product.id}
              product={product}
              removeProduct={removeProduct}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
