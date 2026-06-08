import HeroComponent from "@/_components/locations-page/hero-component";
import LocationCard from "@/_components/locations-page/location-card";
import generalData from "@/_data/general-data.json";
import PageWrapper from "@/_lib/utils/page-wrapper";

const PlettPage = () => {
  const locations = generalData.homePage.locations;

  return (
    <div>
      <HeroComponent />
      <PageWrapper cssClasses="bg-light-blue px-7 py-15 grid gap-10 tablet:grid-cols-2 tablet:bg-transparent desktop:pb-0">
        {locations.map((location, index) => (
          <div key={location.heading}>
            <LocationCard
              heading={location.heading}
              image={location.image}
              paragraph={location.paragraph}
              button={location.button}
            />
            {index < locations.length - 1 && (
              <hr className="border-white/25 mt-10 tablet:hidden" />
            )}
          </div>
        ))}
      </PageWrapper>
    </div>
  );
};

export default PlettPage;
