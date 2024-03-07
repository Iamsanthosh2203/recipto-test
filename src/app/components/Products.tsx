import { IoIosTimer } from "react-icons/io";
import { FaEdit } from "react-icons/fa";

// Assuming you have an array of product objects
const products = [
  {
    id: 1,
    name: "Himalaya Green Tea 60s Classic",
    barcode: "alopa",
    price: 300,
    discount: 0,
    imageUrl: "https://placeholder.co/200x200",
    status: "Pending",
  },
  {
    id: 2,
    name: "Himalaya Green Tea 60s Classic",
    barcode: "alopa",
    price: 300,
    discount: 0,
    imageUrl: "https://placeholder.co/200x200",
    status: "Pending",
  },
  {
    id: 3,
    name: "Lipton Green Tea Honey Lemon 100gm",
    barcode: "pajalfa",
    price: 300,
    discount: 0,
    imageUrl: "https://placeholder.co/200x200",
    status: "Pending",
  },
  {
    id: 4,
    name: "recipto_party_popper",
    barcode: "1",
    price: 300,
    discount: 0,
    imageUrl: "https://placeholder.co/200x200",
    status: "Pending",
  },
];

export default function Products() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="p-4 flex flex-col justify-between gap-6 min-w-[200px] min-h-[200px] border border-gray-400 rounded-2xl"
        >
          <div className="flex gap-3">
            <div>
              <img src={product.imageUrl} alt="placeholder" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center">
                <div className="items-center flex gap-2 px-4 py-2 rounded-xl text-[#3f6f7a] bg-[#bcedff]">
                  <span>
                    <IoIosTimer />
                  </span>{" "}
                  {product.status}
                </div>
              </div>
              <p className="text-2xl">{product.name}</p>
              <p className="text-gray-500">Barcode ID: {product.barcode}</p>
              <p className="flex gap-2 items-center">
                <p className="flex gap-2 items-center">
                  ₹300
                  <span className="text-xs text-gray-500 line-through">
                    ₹300
                  </span>
                  <span className="text-xs px-4 py-2 font-bold rounded-2xl bg-green-200 text-green-900">
                    ₹0 Off
                  </span>
                </p>
              </p>
            </div>
          </div>

          <div className="flex justify-between">
            <button className="py-4 px-7 rounded-xl bg-gray-800 text-white">
              Promote
            </button>
            <button className="py-4 px-7 rounded-xl border border-black text-black ">
              Promote Online
            </button>
            <button className="py-4 px-7 rounded-xl border border-black text-black ">
              <FaEdit />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
