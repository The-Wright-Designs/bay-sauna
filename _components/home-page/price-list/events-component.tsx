import Link from "next/link";
import classNames from "classnames";
import ShowEmailAddress from "@/_components/ui/contact/show-email-address";
import ShowPhoneNumber from "@/_components/ui/contact/show-phone-number";

interface Props {
  cssClasses?: string;
}

export default function EventsComponent({ cssClasses }: Props) {
  return (
    <div
      className={classNames(
        "bg-light-blue flex flex-col gap-7 p-10 rounded-md w-full",
        cssClasses,
      )}
    >
      <p className="text-subheading text-beige uppercase tablet:text-[35px]">
        Events:
      </p>
      <div className="flex flex-col gap-5 desktop:gap-7">
        <p className="text-beige">
          We will bring the sauna to you, set it up and one of our team will
          remain with the sauna for your safety and comfort.
        </p>
        <div className="flex flex-col gap-5 border-t border-white/25 pt-5 desktop:pt-7">
          <p className="text-[18px] text-beige">
            Please get in touch for more information, pricing & bookings:
          </p>
          <div className="flex flex-col gap-3">
            <p className="text-beige font-medium underline underline-offset-4">
              Stuart
            </p>
            <div className="flex gap-10 items-center justify-between phone:max-w-[250px] desktop:max-w-full">
              <div className="flex flex-col gap-3 desktop:gap-1">
                <ShowPhoneNumber />
                <ShowEmailAddress />
              </div>
              <Link
                href="#"
                aria-label="Get in touch on WhatsApp"
                className="tablet:hover:opacity-80"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    d="M18 0C27.9411 0 36 8.05887 36 18C36 27.9411 27.9411 36 18 36C8.05887 36 0 27.9411 0 18C0 8.05887 8.05887 0 18 0ZM18.5928 6.59961C12.6934 6.59984 7.892 11.4015 7.88965 17.3027C7.88886 19.189 8.38181 21.0302 9.31836 22.6533L7.7998 28.2002L13.4736 26.7119C15.037 27.5646 16.7975 28.014 18.5889 28.0146H18.5938C24.4947 28.012 29.2943 23.2112 29.2969 17.3115C29.298 14.4518 28.1856 11.7623 26.165 9.73926C24.1442 7.7161 21.456 6.60085 18.5928 6.59961Z"
                    fill="#FBF5F2"
                  />
                  <path
                    d="M18.5973 8.40723C20.9733 8.40817 23.2068 9.33514 24.8863 11.0166C26.5657 12.6981 27.4907 14.9327 27.4899 17.3096C27.4879 22.2149 23.4967 26.206 18.5934 26.2061H18.5895C16.9932 26.2054 15.4279 25.7763 14.0621 24.9658L13.7369 24.7734L10.3697 25.6562L11.2682 22.374L11.0572 22.0371C10.1667 20.6207 9.6962 18.9837 9.69688 17.3027C9.69883 12.3978 13.6902 8.40723 18.5973 8.40723ZM14.8043 12.3604C14.626 12.3604 14.3356 12.4266 14.0904 12.6943C13.8453 12.9621 13.1549 13.6095 13.1549 14.9258C13.1549 16.2422 14.113 17.5139 14.2467 17.6924C14.3809 17.8717 16.1328 20.5721 18.815 21.7305C19.4531 22.006 19.952 22.1707 20.3404 22.2939C20.9808 22.4973 21.5635 22.4683 22.024 22.3994C22.5379 22.3227 23.6067 21.7526 23.8297 21.1279C24.0522 20.5035 24.0527 19.9683 23.9859 19.8564C23.9191 19.7449 23.7406 19.6778 23.4733 19.5439C23.2058 19.4101 21.8903 18.7632 21.6451 18.6738C21.4003 18.5847 21.2217 18.5401 21.0436 18.8076C20.8653 19.0753 20.3529 19.678 20.1969 19.8564C20.0409 20.0348 19.8849 20.0576 19.6178 19.9238C19.3504 19.79 18.4889 19.5068 17.4674 18.5957C16.6723 17.8865 16.1351 17.0109 15.9791 16.7432C15.8232 16.4755 15.9624 16.3306 16.0963 16.1973C16.2166 16.0774 16.364 15.8846 16.4977 15.7285C16.6311 15.5726 16.6762 15.4613 16.7652 15.2832C16.8543 15.1047 16.8096 14.9483 16.7428 14.8145C16.6759 14.6806 16.1414 13.3636 15.9186 12.8281C15.7015 12.3068 15.4802 12.3774 15.316 12.3691C15.1604 12.3613 14.9823 12.3604 14.8043 12.3604Z"
                    fill="#FBF5F2"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
