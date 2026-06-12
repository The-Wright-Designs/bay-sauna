import Image from "next/image";

const HeroComponent = () => {
  return (
    <div className="max-w-[1280px] mx-auto tablet:grid tablet:grid-cols-2 desktop:grid-cols-[830px_1fr]">
      <div className="relative h-[500px] min-[600px]:h-[600px] tablet:h-auto">
        <Image
          src="/images/franchise-page/BaySauna-11-LR.jpg"
          alt="Bay Sauna franchise opportunity"
          fill
          className="object-cover rounded-none tablet:block"
          sizes="100vw"
        />
        <Image
          src="/images/franchise-page/franchise-bongi.png"
          alt="Bay Sauna franchise opportunity"
          fill
          className="hidden tablet:block rounded-none object-cover"
          sizes="830px"
        />
      </div>
      <div className="bg-light-blue flex flex-col gap-10 items-center justify-center px-7 py-15 tablet:px-10">
        <div className="flex flex-col gap-2 border-b-4 border-white pb-2 w-full desktop:gap-1 desktop:pb-2">
          <h3 className="text-white font-normal">Franchise Opportunity</h3>
          <h2 className="text-white tablet:text-[68px]">
            Bring Bay Sauna To Your Bay
          </h2>
        </div>
        <p className="text-white uppercase w-full text-subheading font-normal">
          South Africa&apos;s Coastal Wellness Brand
        </p>
      </div>
    </div>
  );
};

export default HeroComponent;
