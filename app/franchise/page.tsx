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
              src="/images/franchise-page/8039837e8cdf33a7d5c1e9de1b9e4dd433de84c8.jpg"
              alt="Bay Sauna - Franchise opportunities"
              fill
              className="object-cover"
              sizes="600px"
            />
          </div>
          <div className="relative">
            <Image
              src="/images/BaySauna-01-LR.jpg"
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
              src="/images/franchise-page/c054ca407b395284ac769df3c63b3d53c680fb99.jpg"
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
