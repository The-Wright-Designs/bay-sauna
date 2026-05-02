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
          "text-paragraph text-beige text-left italic self-start tablet:hover:cursor-pointer tablet:hover:opacity-90",
          buttonClasses,
        )}
        aria-label="Show email address"
      >
        {showSpinnerEmail ? (
          <div>
            <div className="spinner"></div>
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
        "text-paragraph text-beige self-start",
        linkClasses,
      )}
    >
      {showEmail}
    </Link>
  );
};

export default ShowEmailAddress;
