import Image from "next/image";

export default function PlettLocalsComponent() {
  return (
    <section
      id="founders"
      className="grid gap-10 scroll-mt-16 py-15 min-[1000px]:flex flex-row-reverse min-[1000px]:items-center desktop:scroll-mt-20"
    >
      <div className="flex flex-col gap-10">
        <h2 className="text-dark-blue font-normal">
          <span className="text-dark-blue text-heading">
            For Plett Locals,{" "}
          </span>
          By Plett Locals
        </h2>
        <div className="flex flex-col gap-4">
          <p className="uppercase text-[20px] font-medium">
            Why We Started Bay Sauna
          </p>
          <div className="flex flex-col gap-4">
            <p>Bay Sauna is run by husband-and-wife team Stu and Steph.</p>
            <p>
              After experiencing the benefits of sauna and cold water firsthand
              — relief from pain, more energy, better mood — they knew Plett
              needed this.
            </p>
            <p>
              Now they&apos;re sharing the ritual with the community they love.
            </p>
          </div>
        </div>
      </div>
      <Image
        src="/images/home-page/9ede78acb1157c03d603cbd955934528cb8261a3.jpg"
        alt="Stu and Steph, founders of Bay Sauna"
        width={427}
        height={427}
        className="aspect-square object-cover w-[427px] h-auto"
        sizes="427px"
      />
    </section>
  );
}
