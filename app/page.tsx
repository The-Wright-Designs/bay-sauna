import HealthBenefitsComponent from "@/_components/home-page/heath-benefits-component";
import HeroComponent from "@/_components/home-page/hero/hero-component";
import MoreThanComponent from "@/_components/home-page/more-than-component";
import PlettAdvantageComponent from "@/_components/home-page/plett-advantage-component";
import PageWrapper from "@/_lib/utils/page-wrapper";

export default function HomePage() {
  return (
    <div>
      <HeroComponent />
      <PageWrapper cssClasses="flex flex-col gap-15 pb-15">
        <MoreThanComponent />
        <PlettAdvantageComponent />
      </PageWrapper>
      <HealthBenefitsComponent />
    </div>
  );
}
