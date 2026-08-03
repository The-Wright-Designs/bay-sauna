import classNames from "classnames";

interface Props {
  cssClasses?: string;
}

const BeachConditionsSkeleton = ({ cssClasses }: Props) => {
  return (
    <article
      className={classNames(
        "flex flex-wrap gap-5 py-7 items-center justify-between desktop:bg-white/85 desktop:px-7 desktop:py-3",
        cssClasses,
      )}
    >
      <div className="flex border-b border-dark-blue/75 pb-[6px] self-start min-[925px]:border-b-0 min-[925px]:pb-0 min-[925px]:self-auto">
        <h2 className="text-black text-[16px] font-semibold tracking-[1.6px] desktop:whitespace-nowrap desktop:flex flex-col desktop:text-[14px]">
          Today&rsquo;s{" "}
          <span className="text-black text-[16px] font-semibold tracking-[1.6px] desktop:whitespace-nowrap desktop:text-[14px]">
            Bay Conditions
          </span>
        </h2>
      </div>
      <div className="flex flex-col gap-1.5 desktop:gap-1">
        <div className="flex flex-wrap gap-x-5 gap-y-[6px] w-full desktop:flex-row">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="bg-dark-blue/10 h-4 w-[90px] rounded-md animate-pulse"
            />
          ))}
        </div>
        <div className="bg-dark-blue/10 h-[10px] w-[180px] rounded-md animate-pulse" />
      </div>
    </article>
  );
};

export default BeachConditionsSkeleton;
