import Image from "next/image";
import ButtonLink from "@/_components/ui/buttons/button-link";

export default function PlettAdvantageComponent() {
  return (
    <main className="grid gap-10 desktop:grid-cols-2">
      <div className="flex flex-col gap-10 desktop:order-last">
        <h2 className="text-dark-blue font-normal">
          <span className="text-dark-blue text-heading">The Plett </span>
          Advantage
        </h2>
        <div className="flex flex-col gap-4 leading-[1.25]">
          <p>
            <strong>Set on Central Beach in Plettenberg Bay,</strong> our sauna
            sits where the land meets the sea.
          </p>
          <div className="flex flex-col gap-1">
            <p>Watch sunrise over the bay.</p>
            <p>Hear waves between rounds.</p>
            <p>Step from fire into sea.</p>
            <p>This isn&apos;t wellness in a white room.</p>
          </div>
          <p>
            <strong>This is nature doing the work.</strong>
          </p>
        </div>
        <ButtonLink
          href="#founders"
          ariaLabel="Meet our founders"
          colorLightBlue
          cssClasses="tablet:self-start"
        >
          Meet Our Founders
        </ButtonLink>
      </div>
      <Image
        src="/images/BaySauna-03-LR.jpeg"
        alt="Bay Sauna on Central Beach, Plettenberg Bay"
        width={1280}
        height={800}
        className="aspect-video object-cover desktop:h-full desktop:aspect-auto desktop:w-auto"
        sizes="(max-width: 1279px), 100vw, 620px"
      />
    </main>
  );
}
