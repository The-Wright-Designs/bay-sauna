import HeroComponent from "@/_components/home-page/hero/hero-component";
import MoreThanComponent from "@/_components/home-page/more-than-component";
import PageWrapper from "@/_lib/utils/page-wrapper";

export default function HomePage() {
  return (
    <div>
      <HeroComponent />
      <PageWrapper>
        <MoreThanComponent />
      </PageWrapper>
    </div>
  );
}
