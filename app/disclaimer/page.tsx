import PageWrapper from "@/_lib/utils/page-wrapper";

export default function DisclaimerPage() {
  return (
    <PageWrapper cssClasses="py-15 flex flex-col gap-10 border-b-2 border-black/50 desktop:border-none desktop:pb-0">
      <h1>Health, Safety & Terms of Use</h1>
      <p>
        At Bay Sauna, we&apos;re all about creating a safe, calm, and
        restorative experience. By booking or using our sauna, you agree to the
        following:
      </p>

      <div className="flex flex-col gap-4">
        <h3>Your Responsibility</h3>
        <p>
          Using a sauna and the ocean involves exposure to heat, cold, and
          natural conditions. By participating, you accept full responsibility
          for your own health, safety, and wellbeing.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3>Health & Medical Conditions</h3>
        <p>
          Sauna use may not be suitable for everyone. Please consult a medical
          professional before use if you are pregnant or have any underlying
          health conditions, including heart, blood pressure, respiratory, or
          heat-related sensitivities.
        </p>
        <p>
          If at any point you feel dizzy, unwell, or uncomfortable, please exit
          the sauna immediately.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3>Ocean Use</h3>
        <p>
          The ocean is a natural, unsupervised environment. Conditions can
          change quickly. Entering the water is entirely at your own risk. Bay
          Sauna does not provide lifeguard services.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3>Personal Conduct</h3>
        <p>We ask all guests to act responsibly and respectfully:</p>
        <ul className="list-disc pl-6 flex flex-col gap-2">
          <li>
            <p>Follow all posted guidelines and staff instructions</p>
          </li>
          <li>
            <p>Maintain appropriate hygiene practices</p>
          </li>
          <li>
            <p>Be mindful of others sharing the space</p>
          </li>
        </ul>
        <p>
          We reserve the right to refuse entry or remove any guest who does not
          follow these guidelines.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3>Alcohol & Substances</h3>
        <p>
          For your safety, we strongly discourage the use of alcohol or any
          substances before or during your sauna session.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3>Personal Belongings</h3>
        <p>
          While storage is available, all belongings are left at your own risk.
          Bay Sauna is not liable for any loss, theft, or damage.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3>Limitation of Liability</h3>
        <p>
          To the fullest extent permitted by law, Bay Sauna, its owners, and
          staff shall not be held liable for any injury, loss, or damage arising
          from the use of our facilities.
        </p>
      </div>
      <hr className="border-black/25 w-full desktop:border-black/50 desktop:border-1" />

      <p className="font-semibold text-subheading">
        By making a booking or entering the sauna, you confirm that you have
        read, understood, and agreed to these terms
      </p>
    </PageWrapper>
  );
}
