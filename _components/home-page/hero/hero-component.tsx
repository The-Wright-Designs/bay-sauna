import HeroSlider from "./hero-slider";
import ButtonLink from "@/_components/ui/buttons/button-link";
import sliderData from "@/_data/general-data.json";

const {
  homePage: { heroSlider },
} = sliderData;

export default function HeroComponent() {
  return (
    <section className="max-w-[1280px] mx-auto desktop:grid grid-cols-[830px_1fr]">
      <div>
        <HeroSlider
          data={heroSlider}
          cssClasses="h-[450px] tablet:h-[600px] desktop:h-[660px]"
        />
      </div>
      <div className="flex flex-col gap-7 bg-light-blue px-7 py-10 desktop:px-10 desktop:py-15 desktop:gap-10">
        <div className="flex flex-col gap-4 text-center desktop:gap-7">
          <h2 className="text-white text-paragraph normal-case tablet:text-heading tablet:uppercase tablet:font-normal desktop:text-left">
            <span className="text-paragraph text-white font-bold normal-case tablet:text-heading tablet:uppercase">
              Wood-fired beach sauna
            </span>{" "}
            on Central Beach, Plettenberg Bay.
          </h2>
          <h3 className="text-white text-paragraph desktop:text-left">
            Move between deep heat and the Indian Ocean in one unforgettable
            ritual.
          </h3>
        </div>
        <ButtonLink
          href="#contact"
          ariaLabel="Book your session"
          cssClasses="tablet:self-center desktop:self-start"
        >
          Book Your Session
        </ButtonLink>
      </div>
    </section>
  );
}
