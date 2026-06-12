import Image from "next/image";
import PageWrapper from "@/_lib/utils/page-wrapper";
import ButtonLink from "@/_components/ui/buttons/button-link";

const ExpressInterestComponent = () => {
  return (
    <PageWrapper cssClasses="grid gap-10 tablet:grid-cols-2 desktop:grid-cols-1">
      <section className="flex flex-col gap-10">
        <h3 className="uppercase">Express Your Interest</h3>
        <div className="flex flex-col gap-5">
          <p>
            If you&apos;ve read this far, you probably already have a bay in
            mind.
          </p>
          <p>
            Before we share the details of the partnership model, we&apos;d love
            to learn a little more about you.
          </p>
          <p>
            We&apos;re not running an open application process. We&apos;re
            having conversations with the right people about the right places —
            and deciding together whether there&apos;s a fit worth pursuing.
          </p>
          <p>To start that conversation, tell us:</p>
          <ul className="list-disc flex flex-col gap-2 pl-6">
            <li>
              <p>
                <strong>Who you are</strong> — your background, what you do, and
                what draws you to Bay Sauna
              </p>
            </li>
            <li>
              <p>
                <strong>Where you are</strong> — the bay or coastal location you
                have in mind
              </p>
            </li>
            <li>
              <p>
                <strong>Why you believe it would work</strong> — what makes your
                location special, who your community is, and why you think the
                Bay Sauna experience belongs there
              </p>
            </li>
          </ul>
          <p>
            There are no right or wrong answers. We&apos;re simply looking for
            people who see what we see — and who care as much as we do about
            doing it properly.
          </p>
        </div>
        <ButtonLink
          href="/franchise#contact"
          colorLightBlue
          cssClasses="tablet:self-start"
        >
          Contact Us
        </ButtonLink>
      </section>
      <div className="relative aspect-square tablet:aspect-auto tablet:h-full desktop:hidden">
        <Image
          src="/images/franchise-page/cef1b559516de1409407ac0b6365d16d35425e8e.jpg"
          alt="Bay Sauna - Express your interest"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </PageWrapper>
  );
};

export default ExpressInterestComponent;
