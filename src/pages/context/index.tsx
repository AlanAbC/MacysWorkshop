import CheckoutButton from "@/components/CheckoutButton";
import FormFields from "@/components/FormFields";
import ProductPreview from "@/components/ProductPreview";
import { FormProvider } from "@/providers/FormProvider";
import { useState } from "react";

const product = {
  price: 299.99,
  name: "Nintendo Switch",
  image:
    "https://www.nintendo.com/eu/media/images/08_content_images/systems_5/nintendo_switch_3/nintendo_switch_oled/CI_NSwitch_main.jpg",
  description:
    "The Nintendo Switch is a hybrid video game console, consisting of a console unit, a dock, and two Joy-Con controllers. Although it is a hybrid console, Nintendo classifies it as a home console that you can take with you on the go.",
};

const ContextExample = () => {
  const userId = "12345";
  const [isDisabled, setIsDisabled] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const save = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
    }, 3000);
  };

  return (
    <FormProvider
      save={save}
      setIsDisabled={setIsDisabled}
      isDisabled={isDisabled}
      isSaving={isSaving}
      userId={userId}
      product={product}
    >
      <div className="relative m-10 flex w-full max-w-lg flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
        <ProductPreview />
        <FormFields />
        <CheckoutButton />
      </div>
    </FormProvider>
  );
};

export default ContextExample;
