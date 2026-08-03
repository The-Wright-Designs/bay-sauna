import { Suspense } from "react";

import BayConditionsComponent from "@/_components/home-page/beach-conditions/bay-conditions-component";
import BayConditionsSkeleton from "@/_components/home-page/beach-conditions/bay-conditions-skeleton";
import HealthBenefitsComponent from "@/_components/home-page/health-benefits-component";
import HeroComponent from "@/_components/home-page/hero/hero-component";
import HowItWorksComponent from "@/_components/home-page/how-it-works/how-it-works-component";
import MoreThanComponent from "@/_components/home-page/more-than-component";
import PlettAdvantageComponent from "@/_components/home-page/plett-advantage-component";
import PlettLocalsComponent from "@/_components/home-page/plett-locals";
import PageWrapper from "@/_lib/utils/page-wrapper";

import generalData from "@/_data/general-data.json";
import PriceListComponent from "@/_components/home-page/price-list/price-list-component";
import SaunaEtiquetteComponent from "@/_components/home-page/sauna-etiquette/sauna-etiquette-component";
import ContactComponent from "@/_components/home-page/contact-component";

const {
  homePage: { howItWorks },
} = generalData;

export default function HomePage() {
  return (
    <div>
      <PageWrapper cssClasses="desktop:hidden">
        <Suspense fallback={<BayConditionsSkeleton />}>
          <BayConditionsComponent />
        </Suspense>
      </PageWrapper>
      <HeroComponent />
      <PageWrapper cssClasses="flex flex-col gap-15 pb-15">
        <MoreThanComponent />
        <PlettAdvantageComponent />
      </PageWrapper>
      <HealthBenefitsComponent />
      <PageWrapper cssClasses="py-15">
        <HowItWorksComponent steps={howItWorks} />
      </PageWrapper>
      <PriceListComponent />
      <SaunaEtiquetteComponent />
      <PageWrapper>
        <PlettLocalsComponent />
        <ContactComponent />
      </PageWrapper>
    </div>
  );
}
