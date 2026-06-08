import Image from "next/image";

export default function HeroComponent() {
  return (
    <section className="max-w-[1280px] mx-auto min-[1000px]:h-[475px] min-[1000px]:grid grid-cols-2 desktop:grid-cols-[830px_1fr] desktop:h-[570px]">
      <div className="relative aspect-[4/3] min-[1000px]:aspect-auto">
        <Image
          src="/images/AdobeStock_131691008.jpeg"
          alt="Plettenberg Bay"
          fill
          className="rounded-none object-cover"
        />
      </div>
      <div className="flex flex-col gap-7 px-7 py-10 min-[1000px]:bg-dark-blue min-[1000px]:px-10 min-[1000px]:py-15 min-[1000px]:gap-10">
        <div className="flex flex-col gap-10">
          <h2 className="text-dark-blue text-[32px] min-[1000px]:text-white min-[1000px]:text-heading">
            Plettenberg Bay
          </h2>
          <h3 className="text-paragraph min-[1000px]:text-white min-[1000px]:text-subheading min-[1000px]:uppercase">
            Some catchy text about the fact that you have 2 sites in Plett.
            <br />
            <br />
            Two paragraphs with some nice keywords (eg: sauna, Plettenberg Bay,
            beach, etc.) would be great.
          </h3>
        </div>
      </div>
    </section>
  );
}
