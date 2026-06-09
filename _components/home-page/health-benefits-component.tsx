import Image from "next/image";
import Accordion from "@/_components/ui/accordian";
import ButtonLink from "@/_components/ui/buttons/button-link";

export default function HealthBenefitsComponent() {
  return (
    <section
      className="bg-light-blue scroll-mt-16 desktop:scroll-mt-20"
      id="health-benefits"
    >
      <div className="max-w-[1280px] mx-auto grid gap-10 py-15 px-7 tablet:px-10 desktop:grid-cols-[1fr_320px] desktop:h-[1292px] min-[1360px]:px-0">
        <h2 className="text-white desktop:hidden">Health Benefits</h2>
        <div className="flex flex-col gap-10 tablet:flex-row desktop:flex-col">
          <div className="relative aspect-video w-full desktop:aspect-auto desktop:h-full">
            <Image
              src="/images/AdobeStock_313785803.jpeg"
              alt="People enjoying the sauna"
              fill
              className="object-cover"
              sizes="(max-width: 1279px) 100vw, 900px"
            />
          </div>
          <div className="hidden tablet:block relative w-full h-full">
            <Image
              src="/images/AdobeStock_966050142.jpeg"
              alt="Woman enjoying the sauna"
              fill
              className="object-cover scale-x-[-1]"
              sizes="850px"
            />
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <h2 className="hidden text-white desktop:block">Health Benefits</h2>
          <Accordion />
          <ButtonLink
            href="/locations/plettenberg-bay"
            ariaLabel="View our locations"
            cssClasses="tablet:self-start"
          >
            View Our Locations
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
