"use client";

import { useEffect, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import Link from "next/link";
import { sendEmail } from "@/_actions/send-email-actions";
import ButtonType from "@/_components/ui/buttons/button-type";

const ContactForm = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false);

  useEffect(() => {
    if (submitted) {
      const element = document.getElementById("contact");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, [submitted]);

  return (
    <div className="flex flex-col gap-10 bg-light-blue -mx-7 px-7 py-10 tablet:-mx-10 tablet:px-10 desktop:px-7 desktop:mx-0 desktop:rounded-md">
      {submitted ? (
        <p className="text-white text-subheading">
          Your email has been sent, we will be in touch soon.
        </p>
      ) : (
        <>
          <p className="text-white">
            Please fill out the form below and we will be in touch ASAP...
          </p>
          <form
            className="flex flex-col gap-5"
            action={async (formData) => {
              try {
                setError(null);
                setIsSubmitting(true);

                if (!executeRecaptcha) {
                  await new Promise((resolve) => setTimeout(resolve, 1000));
                  if (!executeRecaptcha) {
                    setError(
                      "Security verification unavailable. Please refresh and try again.",
                    );
                    return;
                  }
                }

                const recaptchaToken = await executeRecaptcha("contact_form");
                formData.append("recaptchaToken", recaptchaToken);

                const result = await sendEmail(formData);

                if (result.success) {
                  setSubmitted(true);
                } else {
                  setError(
                    result.error || "Failed to send message. Please try again.",
                  );
                }
              } catch (err) {
                setError("An unexpected error occurred. Please try again.");
                console.error("Contact form error:", err);
              } finally {
                setIsSubmitting(false);
              }
            }}
          >
            <input type="hidden" name="_honey" className="hidden" />

            <label htmlFor="fullName" className="flex flex-col gap-3">
              <span className="text-white">Name: *</span>
              <input
                type="text"
                id="fullName"
                name="name"
                className="bg-white h-10 w-full rounded border border-black/25 px-3"
                autoComplete="name"
                required
              />
            </label>

            <label htmlFor="phoneNumber" className="flex flex-col gap-3">
              <span className="text-white">Phone:</span>
              <input
                type="tel"
                id="phoneNumber"
                name="phone"
                className="bg-white h-10 w-full rounded border border-black/25 px-3"
                autoComplete="tel"
              />
            </label>

            <label htmlFor="emailAddress" className="flex flex-col gap-3">
              <span className="text-white">Email: *</span>
              <input
                type="email"
                id="emailAddress"
                name="email"
                className="bg-white h-10 w-full rounded border border-black/25 px-3"
                autoComplete="email"
                required
              />
            </label>

            <label htmlFor="message" className="flex flex-col gap-3">
              <span className="text-white">Message: *</span>
              <textarea
                id="message"
                name="message"
                className="bg-white h-38 w-full rounded border border-black/25 px-3 py-2"
                required
              />
            </label>

            {error && <p className="text-[14px] text-red-500">{error}</p>}

            <div className="flex flex-col gap-4 mt-5">
              <label
                htmlFor="disclaimer"
                className="flex items-center gap-3 desktop:hover:cursor-pointer"
              >
                <input
                  type="checkbox"
                  id="disclaimer"
                  checked={disclaimerAccepted}
                  onChange={(e) => setDisclaimerAccepted(e.target.checked)}
                  className="w-5 h-5 tablet:hover:cursor-pointer"
                />
                <span className="text-[14px] text-white">
                  I have read and agree to the{" "}
                  <Link
                    href="/disclaimer"
                    className="underline text-white underline-offset-4 font-medium tablet:hover:opacity-90"
                    target="_blank"
                  >
                    Health &amp; Liability Disclaimer
                  </Link>
                </span>
              </label>
              <ButtonType
                type="submit"
                colorDarkBlue
                disabled={isSubmitting || !disclaimerAccepted}
                cssClasses="w-full tablet:w-auto tablet:self-start"
                title={
                  isSubmitting
                    ? "Submitting your message..."
                    : !disclaimerAccepted
                      ? "Please agree to the Health & Liability Disclaimer to submit"
                      : undefined
                }
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </ButtonType>
              <p className="text-[12px] text-white text-center tablet:text-left">
                This site is protected by reCAPTCHA and the Google{" "}
                <Link
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  className="underline text-white"
                >
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link
                  href="https://policies.google.com/terms"
                  target="_blank"
                  className="underline text-white"
                >
                  Terms of Service
                </Link>{" "}
                apply.
              </p>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default ContactForm;
