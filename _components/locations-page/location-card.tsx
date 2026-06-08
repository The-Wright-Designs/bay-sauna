import Image from "next/image";
import ButtonLink from "@/_components/ui/buttons/button-link";

interface Props {
  heading: string;
  image: string;
  paragraph: string;
  button: string;
}

const LocationCard = ({ heading, image, paragraph, button }: Props) => {
  return (
    <div className="flex flex-col gap-7 items-start w-full tablet:bg-light-blue tablet:p-10 tablet:rounded-md tablet:h-full tablet:justify-between">
      <div className="flex flex-col gap-7">
        <h3 className="text-white uppercase w-full">{heading}</h3>
        <div className="relative w-full aspect-[4/3]">
          <Image src={image} alt={heading} fill className="object-cover" />
        </div>
        <p className="text-white w-full">{paragraph}</p>
      </div>
      <ButtonLink
        href={button}
        colorDarkBlue
        cssClasses="w-full justify-center"
      >
        Book Now
      </ButtonLink>
    </div>
  );
};

export default LocationCard;
