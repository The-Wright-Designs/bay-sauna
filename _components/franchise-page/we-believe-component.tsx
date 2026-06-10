import Image from "next/image";
import PageWrapper from "@/_lib/utils/page-wrapper";

const WeBelieveComponent = () => {
  return (
    <PageWrapper cssClasses="grid gap-10 tablet:grid-cols-2 desktop:grid-cols-1">
      <main className="flex flex-col gap-10">
        <h3>We Believe</h3>
        <div className="flex flex-col gap-5">
          <p>
            For generations, people have travelled to the coast to feel better.
          </p>
          <p>
            Long before wellness became an industry, doctors prescribed time by
            the sea. Fresh air. Salt water. Sunshine. Rest.
          </p>
          <p>
            People instinctively understood something we still know to be true
            today:
          </p>
          <p>The ocean has a remarkable way of restoring us.</p>
          <p>
            At Bay Sauna, we have built our brand around that simple belief. We
            believe people feel better when they spend time outdoors. We believe
            beautiful places matter.
          </p>
          <p>
            We believe the combination of heat, cold water, fresh air and human
            connection is profoundly restorative.
          </p>
          <p>
            And we believe that in a world that feels increasingly busy and
            disconnected, people are craving experiences that help them slow
            down and reconnect with what matters.
          </p>
        </div>
      </main>
      <div className="relative aspect-square tablet:aspect-auto tablet:h-full desktop:hidden">
        <Image
          src="/images/franchise-page/8039837e8cdf33a7d5c1e9de1b9e4dd433de84c8.jpg"
          alt="Bay Sauna - Franchise opportunities"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </PageWrapper>
  );
};

export default WeBelieveComponent;
