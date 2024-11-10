import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";
import { useTranslations } from "next-intl";

const Brands = () => {

  const t = useTranslations("brandSection"); //

  return (
    <section className="pt-1">
      <div className="container">
      <h2 className="text-center text-2xl font-bold mb-6">
          {t("title")}
        </h2>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center gap-6 rounded-sm bg-gray-light px-8 py-8 dark:bg-gray-dark sm:px-10 md:px-[20px] md:py-[20px] xl:p-[20px] 2xl:px-[30px] 2xl:py-[30px]">
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div className="flex w-full items-center justify-center px-6 py-6 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image src={imageLight} alt={name} fill className="hidden dark:block" />
        <Image src={image} alt={name} fill className="block dark:hidden" />
      </a>
    </div>
  );
};
