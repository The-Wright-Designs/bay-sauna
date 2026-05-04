"use client";

import Link from "next/link";
import { useState } from "react";
import classNames from "classnames";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { fetchEmail } from "@/_actions/contact-actions";
import { ShowEmailAddressProps } from "@/_types/general-types";

const ShowEmailAddress = ({
  buttonClasses,
  linkClasses,
  blackText = false,
}: ShowEmailAddressProps) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [showEmail, setShowEmail] = useState("Show email address");
  const [showSpinnerEmail, setShowSpinnerEmail] = useState(false);

  const handleShowEmailAddress = async () => {
    setShowSpinnerEmail(true);
    try {
      let recaptchaToken: string | undefined;
      if (executeRecaptcha) {
        recaptchaToken = await executeRecaptcha("fetch_email");
      }
      const emailAddress =
        (await fetchEmail(recaptchaToken)) || "Email not found";
      setShowEmail(emailAddress);
    } catch (error) {
      console.error("Error fetching email:", error);
      setShowEmail("Email not available");
    }
    setShowSpinnerEmail(false);
  };

  if (showEmail === "Show email address") {
    return (
      <button
        onClick={handleShowEmailAddress}
        className={classNames(
          "text-paragraph text-left italic self-start desktop:hover:cursor-pointer desktop:hover:opacity-90",
          blackText ? "text-black" : "text-beige",
          buttonClasses,
        )}
        aria-label="Show email address"
      >
        {showSpinnerEmail ? (
          <div>
            <div className={blackText ? "spinner-blue" : "spinner"}></div>
          </div>
        ) : (
          showEmail
        )}
      </button>
    );
  }

  return (
    <Link
      href={`mailto:${showEmail}`}
      className={classNames(
        "text-paragraph self-start tablet:hover:opacity-90",
        blackText ? "text-black" : "text-beige",
        linkClasses,
      )}
    >
      {showEmail}
    </Link>
  );
};

export default ShowEmailAddress;
