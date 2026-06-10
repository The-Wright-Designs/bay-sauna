import Accordion from "@/_components/ui/accordion";
import data from "@/_data/general-data.json";
import PageWrapper from "@/_lib/utils/page-wrapper";

const { franchisePage } = data;

export default function InfoAccordionComponent() {
  return (
    <PageWrapper cssClasses="-mx-7 tablet:-mx-10 desktop:mx-0">
      <section className="bg-dark-blue px-7 py-15 tablet:px-10 desktop:rounded-md">
        <Accordion items={franchisePage} />
      </section>
    </PageWrapper>
  );
}
