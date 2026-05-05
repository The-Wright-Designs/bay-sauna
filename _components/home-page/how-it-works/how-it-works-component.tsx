import Image from "next/image";
import HowItWorksSteps from "@/_components/home-page/how-it-works/how-it-works-steps";
import ReadyToJoin from "@/_components/home-page/how-it-works/ready-to-join";

interface Props {
  steps: string[];
}

export default function HowItWorksComponent({ steps }: Props) {
  return (
    <section
      className="grid gap-10 scroll-mt-32 desktop:scroll-mt-36 desktop:grid-cols-[430px_1fr] desktop:gap-0"
      id="how-it-works"
    >
      <div className="flex flex-col gap-10">
        <h2 className="text-dark-blue">
          <span className="font-normal text-heading text-dark-blue">
            How It{" "}
          </span>
          Works
        </h2>
        <div className="flex flex-col gap-10">
          <p className="uppercase text-[20px] font-medium">First time? Easy.</p>
          <HowItWorksSteps steps={steps} />
        </div>
        <div className="flex flex-col gap-4">
          <p>Go at your own pace.</p>
          <div>
            <p className="uppercase text-[24px] font-medium">No pressure.</p>
            <p className="uppercase text-[24px] font-medium">No performance.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 relative">
        <div className="relative h-full">
          <Image
            src="/images/BaySauna-08-LR.jpg"
            alt="People relaxing inside Bay Sauna"
            width={1280}
            height={1000}
            className="aspect-video object-cover w-full desktop:rounded-none desktop:aspect-auto desktop:h-full"
            sizes="(max-width:1279px) 100vw, 1280px"
          />
          <div
            className="absolute inset-0 desktop:block hidden"
            style={{
              background:
                "linear-gradient(90deg, #FBF5F2 1%, rgba(251, 245, 242, 0.00) 30%)",
            }}
          />
        </div>
        <ReadyToJoin cssClasses="desktop:absolute desktop:top-8 desktop:left-1/2 desktop:-translate-x-1/2 desktop:bg-white/90 desktop:p-5 desktop:rounded-md desktop:border-none desktop:h-auto desktop:w-[500px]" />
      </div>
    </section>
  );
}
