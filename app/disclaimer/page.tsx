import PageWrapper from "@/_lib/utils/page-wrapper";

export default function DisclaimerPage() {
  return (
    <PageWrapper cssClasses="py-15 flex flex-col gap-10 border-b-2 border-black/50 desktop:border-none desktop:pb-0">
      <h1>Health & Liability Disclaimer</h1>
      <p>
        At Bay Sauna, your safety and wellbeing are our top priority. By using
        our facilities, you acknowledge and agree to the following:
      </p>

      <div className="flex flex-col gap-4">
        <h3>Use at Your Own Risk</h3>
        <p>
          Sauna bathing and ocean swimming involve exposure to high heat, cold
          water, and changing environmental conditions. Participation is
          entirely at your own risk. Bay Sauna, its owners, and staff accept no
          liability for any injury, illness, loss, or damage sustained while
          using our facilities.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3>Health Considerations</h3>
        <p>
          Sauna use may not be suitable for everyone. You should consult your
          healthcare provider before use if you:
        </p>
        <ul className="list-disc pl-6 flex flex-col gap-2">
          <li>
            <p>Are pregnant</p>
          </li>
          <li>
            <p>
              Have cardiovascular conditions (including high or low blood
              pressure)
            </p>
          </li>
          <li>
            <p>Have respiratory conditions</p>
          </li>
          <li>
            <p>Are prone to dizziness, fainting, or heat sensitivity</p>
          </li>
          <li>
            <p>
              Are taking medication that affects heart rate, blood pressure, or
              temperature regulation
            </p>
          </li>
        </ul>
        <p>If you feel unwell at any time, exit the sauna immediately.</p>
      </div>

      <div className="flex flex-col gap-4">
        <h3>Alcohol & Substance Use</h3>
        <p>
          For your safety, the use of alcohol or recreational substances before
          or during your session is strongly discouraged.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3>Hydration & Personal Responsibility</h3>
        <p>
          Guests are responsible for maintaining adequate hydration and for
          listening to their bodies at all times. Please take breaks as needed
          and avoid prolonged exposure to heat.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3>Ocean Swimming</h3>
        <p>
          The ocean is a natural environment with inherent risks, including
          waves, currents, and varying water conditions. Entry into the ocean is
          at your own discretion and risk. Bay Sauna does not provide lifeguard
          services.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3>Hygiene & Etiquette</h3>
        <p>
          Guests are required to follow all hygiene and safety guidelines,
          including:
        </p>
        <ul className="list-disc pl-6 flex flex-col gap-2">
          <li>
            <p>Rinsing feet before entering the sauna</p>
          </li>
          <li>
            <p>Sitting on a towel at all times</p>
          </li>
          <li>
            <p>Wearing appropriate swimwear</p>
          </li>
        </ul>
        <p>Failure to comply may result in removal from the facility.</p>
      </div>

      <div className="flex flex-col gap-4">
        <h3>Personal Belongings</h3>
        <p>
          While storage is provided, all personal belongings are brought and
          stored at your own risk. Bay Sauna is not responsible for any loss,
          theft, or damage.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3>Right of Refusal</h3>
        <p>
          Bay Sauna reserves the right to refuse entry or remove any guest who
          does not comply with safety guidelines or whose behaviour may pose a
          risk to themselves or others.
        </p>
      </div>
      <hr className="border-black/25 w-full desktop:border-black/50 desktop:border-1" />

      <p className="font-semibold text-subheading">
        By booking or using Bay Sauna, you confirm that you have read,
        understood, and agree to this disclaimer.
      </p>
    </PageWrapper>
  );
}
