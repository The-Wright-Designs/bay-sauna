import Image from "next/image";
import ButtonLink from "@/_components/ui/buttons/button-link";

export default function MoreThanComponent() {
  return (
    <section
      className="grid gap-10 pt-15 scroll-mt-16 desktop:scroll-mt-20 desktop:grid-cols-2"
      id="about"
    >
      <div className="flex flex-col gap-10">
        <h2 className="text-dark-blue">
          <span className="font-normal text-heading text-dark-blue">
            More Than Just{" "}
          </span>
          A Sauna
        </h2>
        <div className="flex flex-col gap-4">
          <p>
            This is not a spa treatment. It&apos;s a return to something
            simpler.
          </p>
          <p>Heat. Cold water. Fresh air. Presence.</p>
          <p>
            Bay Sauna combines the deep warmth of a traditional wood-fired sauna
            with the invigorating rush of ocean immersion.
          </p>
        </div>
      </div>
      <Image
        src="/images/IMG_4733.jpeg"
        alt="Bay Sauna on Central Beach in Plettenberg Bay, South Africa"
        width={1280}
        height={800}
        className="aspect-video object-cover desktop:col-start-2 desktop:row-span-2 desktop:aspect-[16/11] desktop:h-full desktop:w-auto"
        sizes="(max-width: 1279px), 100vw, 620px"
      />
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <h3 className="uppercase">The Result?</h3>
          <p>
            A clearer head. A calmer nervous system. A body that feels alive
            again.
          </p>
        </div>
        <ButtonLink
          href="#how-it-works"
          ariaLabel="How it works"
          colorLightBlue
          cssClasses="tablet:self-start"
        >
          How It Works
        </ButtonLink>
      </div>
    </section>
  );
}
