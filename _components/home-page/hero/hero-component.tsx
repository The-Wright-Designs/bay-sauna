import ButtonLink from "@/_components/ui/buttons/button-link";
import VideoComponent from "./video-component";

export default function HeroComponent() {
  return (
    <section className="max-w-[1280px] mx-auto tablet:grid grid-cols-2 desktop:grid-cols-[830px_1fr]">
      <VideoComponent />
      <div className="flex flex-col gap-7 bg-light-blue px-7 py-10 desktop:px-10 desktop:py-15 desktop:gap-10">
        <div className="flex flex-col gap-4 text-center desktop:gap-7">
          <h2 className="text-white text-paragraph normal-case tablet:text-[40px] tablet:uppercase tablet:font-normal min-[1000px]:text-heading desktop:text-left">
            <span className="text-paragraph text-white font-bold normal-case tablet:text-[40px] tablet:uppercase min-[1000px]:text-heading">
              Wood-fired beach sauna
            </span>{" "}
            on the pristine beaches of Plettenberg Bay.
          </h2>
          <h3 className="text-white text-paragraph desktop:text-left">
            Move between deep heat and the Indian Ocean in one unforgettable
            ritual.
          </h3>
        </div>
        <ButtonLink
          href="https://www.fresha.com/book-now/bay-sauna-co-y3zc73oz/all-offer?share=true&pId=2995120"
          ariaLabel="Book your session"
          cssClasses="tablet:self-center desktop:self-start"
          target="_blank"
        >
          Book Online
        </ButtonLink>
      </div>
    </section>
  );
}
