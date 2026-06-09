import classNames from "classnames";

interface TradingHours {
  monSat: string[];
  sun: string;
  sunNote: string;
  publicHolidays: string;
}

interface Props {
  tradingHours: TradingHours;
  cssClasses?: string;
}

const WorkingHoursComponent = ({ tradingHours, cssClasses }: Props) => {
  const { monSat, sun, sunNote, publicHolidays } = tradingHours;
  return (
    <div className={classNames("flex flex-col gap-7", cssClasses)}>
      <h3 className="uppercase">Trading hours</h3>
      <div className="flex flex-col">
        <div className="flex gap-5 items-start bg-dark-blue/10 p-3">
          <p className="flex-1">Mon – Sat:</p>
          <div className="flex flex-col gap-3">
            {monSat.map((time, index) => (
              <p key={index}>{time}</p>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 p-3">
          <div className="flex gap-5 items-center">
            <p className="flex-1">Sun:</p>
            <p>{sun}</p>
          </div>
          <p className="italic text-[11px]">{sunNote}</p>
        </div>
        <div className="flex gap-5 items-end bg-dark-blue/10 p-3">
          <p className="flex-1">Public Holidays:</p>
          <p>{publicHolidays}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkingHoursComponent;
