import { notFound } from "next/navigation";
import HeroComponent from "@/_components/locations-page/hero-component";
import LocationCard from "@/_components/locations-page/location-card";
import generalData from "@/_data/general-data.json";
import PageWrapper from "@/_lib/utils/page-wrapper";

interface Props {
  params: Promise<{ townName: string }>;
}

const towns = generalData.locations;

const toSlug = (str: string) => str.toLowerCase().replace(/\s+/g, "-");

export async function generateStaticParams() {
  return Object.values(towns).map((town) => ({
    townName: toSlug(town.meta.displayName),
  }));
}

const TownPage = async ({ params }: Props) => {
  const { townName } = await params;
  const town = Object.values(towns).find(
    (t) => toSlug(t.meta.displayName) === townName,
  );

  if (!town) notFound();

  const locations = town.beaches;
  const displayName = town.meta.displayName;

  return (
    <div>
      <HeroComponent displayName={displayName} />
      <PageWrapper cssClasses="bg-light-blue px-7 py-15 grid gap-10 tablet:grid-cols-2 tablet:bg-transparent desktop:pb-0">
        {locations.map((location, index) => (
          <main key={location.heading}>
            <LocationCard
              heading={location.heading}
              image={location.image}
              paragraph={location.paragraph}
              button={`/locations/${townName}/${toSlug(location.heading)}`}
            />
            {index < locations.length - 1 && (
              <hr className="border-white/25 mt-10 tablet:hidden" />
            )}
          </main>
        ))}
      </PageWrapper>
    </div>
  );
};

export default TownPage;
