import Image from "next/image";
import Accordion from "@/_components/ui/accordian";
import ButtonLink from "@/_components/ui/buttons/button-link";

export default function HealthBenefitsComponent() {
  return (
    <section className="bg-light-blue">
      <div className="max-w-[1280px] mx-auto grid gap-10 py-15 px-7 tablet:px-10 desktop:grid-cols-[1fr_320px] desktop:h-[1252px]">
        <h2 className="text-white desktop:hidden">Health Benefits</h2>
        <div className="flex flex-col gap-10 tablet:flex-row desktop:flex-col">
          <div className="relative aspect-video w-full desktop:aspect-auto desktop:h-full">
            <Image
              src="/images/home-page/ccd86e57181b8253ed3a837d38d15325ca52422f.jpg"
              alt="People enjoying the sauna"
              fill
              className="object-cover"
            />
          </div>
          <div className="hidden tablet:block relative w-full h-full">
            <Image
              src="/images/home-page/d2c3e329ad42bf538b76d09ecaeb042e4f8c3e9c.jpg"
              alt="Woman enjoying the sauna"
              fill
              className="object-cover scale-x-[-1]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <h2 className="hidden text-white desktop:block">Health Benefits</h2>
          <Accordion />
          <ButtonLink
            href="/book"
            ariaLabel="Book your session"
            cssClasses="tablet:self-start"
          >
            Book Your Session
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
