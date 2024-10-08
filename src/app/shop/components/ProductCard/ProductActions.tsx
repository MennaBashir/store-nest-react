import { trans } from "@mongez/localization";
import { Eye, Heart, Share } from "lucide-react";
import React from "react";
import ProductAction from "./ProductAction";

const PRODUCT_ACTIONS = [
  {
    icon: Eye,
    tooltip: "quickView",
  },
  {
    icon: Share,
    tooltip: "share",
  },

  {
    tooltip: "wishlist",
    icon: Heart,
  },
];

function _ProductActions() {
  return (
    <>
      <div className="product__actions h-fit flex justify-stretch items-center invisible opacity-0 absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-sm shadow-black group-hover/product:visible group-hover/product:opacity-100 transition-all ease-in duration-300">
        {PRODUCT_ACTIONS.map((action, index) => (
          <ProductAction
            key={index}
            tooltip={trans(action.tooltip)}
            Icon={action.icon}
          />
        ))}
      </div>
    </>
  );
}

const ProductActions = React.memo(_ProductActions);
export default ProductActions;
