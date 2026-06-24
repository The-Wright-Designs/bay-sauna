import classNames from "classnames";
import ButtonLink from "@/_components/ui/buttons/button-link";

interface Props {
  cssClasses?: string;
}

const ReadyToJoin = ({ cssClasses }: Props) => {
  return (
    <div
      className={classNames(
        "border-dark-blue border-y-3 border-solid flex flex-col gap-10 py-10 w-full",
        cssClasses,
      )}
    >
      <div className="flex flex-col gap-10 tablet:items-start desktop:items-center desktop:gap-2">
        <h2 className="text-light-blue desktop:text-center desktop:text-[40px]">
          Ready to join us?
        </h2>
        <p className="desktop:text-center">
          Book your session and experience the rhythm of{" "}
          <strong>Sweat. Swim. Repeat.</strong>
        </p>
        <ButtonLink
          href="https://www.fresha.com/book-now/bay-sauna-co-y3zc73oz/all-offer?share=true&pId=2995120"
          colorDarkBlue
          cssClasses="w-full tablet:w-auto desktop:mt-2"
          target="_blank"
        >
          Book Your Session
        </ButtonLink>
      </div>
    </div>
  );
};

export default ReadyToJoin;
