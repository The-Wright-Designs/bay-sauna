import classNames from "classnames";

import ProudSupporterSlider from "@/_components/home-page/proud-supporter/proud-supporter-slider";
import data from "@/_data/general-data.json";

interface Props {
  cssClasses?: string;
}

export default function ProudSupporterComponent({ cssClasses }: Props) {
  return (
    <div
      className={classNames(
        "overflow-hidden flex flex-col gap-7 desktop:justify-center desktop:pt-10 desktop:border-t desktop:border-black/25",
        cssClasses
      )}
    >
      <h3 className="text-dark-blue uppercase tracking-[0.8px]">
        Proud Supporters
      </h3>
      <ProudSupporterSlider data={data.homePage.proudSupporter} />
    </div>
  );
}
