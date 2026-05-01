import classNames from "classnames";

interface Props {
  steps: string[];
  cssClasses?: string;
}

const HowItWorksSteps = ({ steps, cssClasses }: Props) => {
  return (
    <div className={classNames("flex flex-col gap-5 w-full", cssClasses)}>
      {steps.map((step, index) => (
        <div
          key={index}
          className="border-dark-blue border-b border-solid flex gap-3 items-center pb-3 w-full"
        >
          <div className="bg-dark-blue flex items-center justify-center p-3 rounded-md shrink-0 size-10">
            <p className="font-bold text-[24px] text-white uppercase">
              {index + 1}.
            </p>
          </div>
          <p>{step}</p>
        </div>
      ))}
    </div>
  );
};

export default HowItWorksSteps;
