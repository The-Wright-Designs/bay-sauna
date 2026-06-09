import ButtonLink from "@/_components/ui/buttons/button-link";
import classNames from "classnames";
import SliderComponent from "../slider-component";

interface LocationData {
  heading: string;
  subheading: string;
  paragraphs: string[];
  heroSlider: string[];
}

interface Props {
  location: LocationData;
  buttonLink: string;
  cssClasses?: string;
}

const HeroComponent = ({ location, buttonLink, cssClasses }: Props) => {
  const { heading, subheading, paragraphs, heroSlider } = location;
  return (
    <div className="desktop:grid grid-cols-[830px_1fr]">
      <SliderComponent
        cssClasses="w-full h-[500px] tablet:h-[650px] desktop:h-[825px]"
        data={heroSlider}
      />
      <div
        className={classNames(
          "bg-light-blue flex flex-col gap-10 items-center justify-center px-7 py-15 tablet:px-10",
          cssClasses,
        )}
      >
        <div className="flex flex-col gap-5 border-b-4 border-white pb-5 w-full">
          <h2 className="text-white w-full">{heading}</h2>
          <h3 className="text-white uppercase w-full">{subheading}</h3>
        </div>
        <div className="flex flex-col gap-4 w-full">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-white">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="flex flex-col gap-5 w-full">
          <ButtonLink
            href={buttonLink}
            colorDarkBlue
            cssClasses="w-full justify-center"
          >
            Book Online
          </ButtonLink>
          <p className="text-white italic text-[14px]">
            Please note that packages &amp; vouchers must be purchased from a
            Bay Sauna staff member at one of our saunas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
