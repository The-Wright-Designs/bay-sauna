import Image from "next/image";

interface Props {
  displayName: string;
}

export default function HeroComponent({ displayName }: Props) {
  return (
    <section className="max-w-[1280px] mx-auto overflow-hidden min-[1000px]:h-[475px] min-[1000px]:grid grid-cols-2 desktop:grid-cols-[830px_1fr] desktop:h-[570px]">
      <div className="relative aspect-[4/3] min-[1000px]:aspect-auto">
        <Image
          src="/images/locations/plett/WZ5H7857-Edit.jpg"
          alt={displayName}
          fill
          className="rounded-none object-cover"
          sizes="(max-width: 1280px) 50vw, 900px"
        />
      </div>
      <div className="flex flex-col gap-7 px-7 py-10 min-[1000px]:bg-dark-blue min-[1000px]:px-10 min-[1000px]:py-15 min-[1000px]:gap-10">
        <div className="flex flex-col gap-10">
          <h2 className="text-dark-blue text-[32px] min-[1000px]:text-white min-[1000px]:text-heading">
            {displayName}
          </h2>
          <h3 className="text-paragraph min-[1000px]:text-white min-[1000px]:text-subheading min-[1000px]:uppercase">
            Plettenberg Bay — where the mountains meet the sea. Step into our
            wood-fired sauna, then plunge into the crystal-clear Indian Ocean.
            <br />
            <br />
            Two locations on Plett&apos;s iconic beaches, bringing the ancient
            tradition of bathing to one of South Africa&apos;s most breathtaking
            coastlines.
          </h3>
        </div>
      </div>
    </section>
  );
}
