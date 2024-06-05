import { useFormProvider } from "@/providers/FormProvider";

const ProductPreview = () => {
  const { product } = useFormProvider();
  return (
    <>
      <a
        className="relative mx-3 mt-3 flex h-90 overflow-hidden rounded-xl"
        href="#"
      >
        <img
          className="object-cover"
          src={product?.image}
          alt="product image"
        />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          39% OFF
        </span>
      </a>
      <div className="mt-4 px-5 pb-5">
        <p className="text-xl tracking-tight text-slate-900">{product?.name}</p>
        <p className="text-md tracking-tight text-slate-900 mt-5 mb-5">
          {product?.description}
        </p>
        <p className="text-3xl font-bold text-slate-900">{`$${product?.price}`}</p>
      </div>
    </>
  );
};

export default ProductPreview;
