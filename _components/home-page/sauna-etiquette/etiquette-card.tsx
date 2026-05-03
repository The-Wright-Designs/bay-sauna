import classNames from "classnames";

interface Props {
  heading: string;
  paragraph: string;
  index: number;
  cssClasses?: string;
}

export default function EtiquetteCard({
  heading,
  paragraph,
  index,
  cssClasses,
}: Props) {
  const isEven = index % 2 === 0;

  return (
    <div
      className={classNames(
        "relative rounded-md flex flex-col gap-5 pt-15 px-5 pb-5",
        isEven ? "bg-beige" : "bg-light-blue",
        cssClasses,
      )}
    >
      <div
        className={classNames(
          "absolute -top-2 -left-2 rounded-md size-[55px] flex items-center justify-center",
          isEven ? "bg-light-blue" : "bg-beige",
        )}
      >
        <p
          className={classNames(
            "text-[32px] font-bold uppercase",
            isEven ? "text-white" : "text-black",
          )}
        >
          {index}.
        </p>
      </div>
      <h5
        className={classNames(
          "text-paragraph font-bold",
          isEven ? "text-black" : "text-white",
        )}
      >
        {heading}
      </h5>
      <p className={isEven ? "text-black" : "text-white"}>{paragraph}</p>
    </div>
  );
}
