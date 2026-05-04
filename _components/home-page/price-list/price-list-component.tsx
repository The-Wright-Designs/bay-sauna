import Image from "next/image";
import ButtonLink from "@/_components/ui/buttons/button-link";
import EventsComponent from "@/_components/home-page/price-list/events-component";

export default function PriceListComponent() {
  return (
    <section
      className="bg-black scroll-mt-16 desktop:scroll-mt-20"
      id="pricing"
    >
      <div className="max-w-[1280px] mx-auto grid gap-10 py-15 px-7 tablet:px-10 desktop:grid-cols-3 min-[1360px]:px-0">
        <div className="flex flex-col gap-10 desktop:gap-7">
          <div className="flex flex-col gap-10">
            <h2 className="text-beige">Price List:</h2>
            <div className="flex flex-col gap-10 desktop:gap-7">
              <div className="flex flex-col gap-3 desktop:gap-0">
                <p className="text-subheading text-beige uppercase">Sessions</p>
                <div className="flex flex-col">
                  <div className="flex gap-5 py-3 border-b border-white/50">
                    <p className="w-[180px] shrink-0 text-beige">15 min</p>
                    <p className="text-beige">R90</p>
                  </div>
                  <div className="flex gap-5 py-3 border-b border-white/50">
                    <p className="w-[180px] shrink-0 text-beige">30 min</p>
                    <p className="text-beige">R120</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 desktop:gap-0">
                <p className="text-subheading text-beige uppercase">Packages</p>
                <div className="flex flex-col">
                  <div className="flex gap-5 py-3 border-b border-white/50">
                    <p className="w-[180px] shrink-0 text-beige">
                      5 x 30 min sessions
                    </p>
                    <p className="text-beige">R500</p>
                  </div>
                  <div className="flex flex-col gap-3 py-3 border-b border-white/50 desktop:gap-2">
                    <div className="flex gap-5">
                      <p className="w-[180px] shrink-0 text-beige">
                        Unlimited*
                      </p>
                      <p className="text-beige">R950</p>
                    </div>
                    <p className="italic text-[12px] text-beige">
                      (*Valid for 30 days; non-transferrable from person to
                      person)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ButtonLink
            href="/#contact"
            ariaLabel="Book your session"
            colorBeige
            cssClasses="tablet:self-start"
          >
            Book Your Session
          </ButtonLink>
        </div>
        <EventsComponent cssClasses="desktop:order-last" />
        <div className="relative aspect-video rounded-md overflow-hidden desktop:aspect-auto desktop:h-full desktop:w-auto">
          <Image
            src="/images/home-page/c9e5db2771a8d3b95bafb5b0ad982cc24a5d2601.jpg"
            alt="People enjoying Bay Sauna"
            fill
            className="object-cover rounded-none"
            sizes="(max-width: 1279px) 100vw, 800px"
          />
        </div>
      </div>
    </section>
  );
}
