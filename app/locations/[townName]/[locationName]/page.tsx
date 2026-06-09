import { notFound } from "next/navigation";
import generalData from "@/_data/general-data.json";
import HeroComponent from "@/_components/location-page/hero-component";
import WorkingHoursComponent from "@/_components/location-page/working-hours-component";
import ContactInfo from "@/_components/contact-info";
import ContactForm from "@/_components/contact-form";
import PageWrapper from "@/_lib/utils/page-wrapper";
import Image from "next/image";

interface Props {
  params: Promise<{ townName: string; locationName: string }>;
}

const towns = generalData.locations;

const toSlug = (str: string) => str.toLowerCase().replace(/\s+/g, "-");

export async function generateStaticParams() {
  return Object.values(towns).flatMap((town) =>
    town.beaches.map((location) => ({
      townName: toSlug(town.meta.displayName),
      locationName: toSlug(location.heading),
    })),
  );
}

const LocationPage = async ({ params }: Props) => {
  const { townName, locationName } = await params;
  const town = Object.values(towns).find(
    (t) => toSlug(t.meta.displayName) === townName,
  );

  if (!town) notFound();

  const location = town.beaches.find(
    (loc) => loc.heading.toLowerCase().replace(/\s+/g, "-") === locationName,
  );

  if (!location) notFound();

  return (
    <div className="max-w-[1280px] mx-auto">
      <HeroComponent
        location={location.locationPage}
        buttonLink={location.locationPage.button}
      />
      <PageWrapper cssClasses="pt-15 flex flex-col gap-15">
        <WorkingHoursComponent
          tradingHours={location.locationPage.tradingHours}
          cssClasses="tablet:hidden"
        />
        <div className="tablet:grid gap-10 grid-cols-2">
          <div className="flex flex-col gap-10">
            <h2 className="text-dark-blue">Get in touch</h2>
            <ContactInfo />
          </div>
          <WorkingHoursComponent
            tradingHours={location.locationPage.tradingHours}
            cssClasses="hidden tablet:flex"
          />
        </div>
        <div className="desktop:grid grid-cols-2 gap-10">
          <ContactForm
            location={{ area: town.meta.displayName, heading: location.heading }}
          />
          <div className="hidden desktop:block relative w-full h-full">
            <Image
              src={location.locationPage.contactImage}
              alt={location.locationPage.heading}
              fill
              className="object-cover"
              sizes="75vw"
            />
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default LocationPage;
