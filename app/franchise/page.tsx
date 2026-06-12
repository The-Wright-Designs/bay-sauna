import HeroComponent from "@/_components/franchise-page/hero-component";
import WeBelieveComponent from "@/_components/franchise-page/we-believe-component";
import ExpressInterestComponent from "@/_components/franchise-page/express-interest-component";
import InfoAccordionComponent from "@/_components/franchise-page/info-accordion-component";
import Image from "next/image";
import ContactForm from "@/_components/contact-form";
import ContactInfo from "@/_components/contact-info";

const FranchisePage = () => {
  return (
    <div className="flex flex-col gap-15">
      <HeroComponent />
      <WeBelieveComponent />
      <div className="desktop:grid gap-10 max-w-[1280px] mx-auto grid-cols-2">
        <InfoAccordionComponent />
        <div className="hidden desktop:grid gap-10">
          <div className="relative">
            <Image
              src="/images/franchise-page/e294c2415d944b95b2a48f5065b07c6291fc5442.jpg"
              alt="Bay Sauna - Franchise opportunities"
              fill
              className="object-cover"
              sizes="600px"
            />
          </div>
          <div className="relative">
            <Image
              src="/images/franchise-page/cef1b559516de1409407ac0b6365d16d35425e8e.jpg"
              alt="Bay Sauna - Express your interest"
              fill
              className="object-cover"
              sizes="600px"
            />
          </div>
        </div>
      </div>
      <ExpressInterestComponent />
      <div
        className="max-w-[1280px] px-7 w-full mx-auto flex flex-col gap-15 scroll-mt-28 tablet:px-10 desktop:px-0 desktop:scroll-mt-32"
        id="contact"
      >
        <div className="flex flex-col gap-10">
          <h2 className="text-dark-blue">Get in touch</h2>
          <ContactInfo />
        </div>
        <div className="desktop:grid grid-cols-2 gap-10">
          <ContactForm franchise />
          <div className="hidden desktop:block relative w-full h-full">
            <Image
              src="/images/franchise-page/7bb1ff4a2b3abfcfd70f706a2fba067cbd5cdf44.jpg"
              alt="Bay Sauna - Franchise opportunities"
              fill
              className="object-cover"
              sizes="75vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FranchisePage;
