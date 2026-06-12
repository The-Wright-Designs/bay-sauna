import Image from "next/image";
import EtiquetteSlider from "@/_components/home-page/sauna-etiquette/etiquette-slider";
import data from "@/_data/general-data.json";

export default function SaunaEtiquetteComponent() {
  return (
    <section className="bg-dark-blue">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10 py-15 px-7 tablet:px-10 min-[1360px]:px-0">
        <h2 className="text-white">Sauna Etiquette</h2>
        <div className="flex flex-col gap-5">
          <p className="text-subheading text-white uppercase">
            Keep it hot, kind, and comfortable for everyone
          </p>
          <p className="text-white">
            A great sauna experience is shared. These simple guidelines help
            keep things clean, respectful, and enjoyable for all.
          </p>
        </div>
        <EtiquetteSlider data={data.homePage.saunaEtiquette} />
        <div className="relative aspect-video w-full rounded-md overflow-hidden desktop:hidden">
          <Image
            src="/images/home-page/fa31d81853ab4b8fa501f444dd44a7a1212c72b5.jpg"
            alt="Person relaxing in the sauna"
            fill
            className="object-cover rounded-none"
            sizes="(max-width: 1279px) 100vw, 1280px"
          />
        </div>
      </div>
    </section>
  );
}
