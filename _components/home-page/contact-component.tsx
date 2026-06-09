import ContactForm from "@/_components/contact-form";
import ContactInfo from "@/_components/contact-info";
import Image from "next/image";

const ContactComponent = () => {
  return (
    <section
      id="contact"
      className="grid gap-10 pt-15 border-t border-black/25 scroll-mt-16 desktop:scroll-mt-20 desktop:grid-cols-2"
    >
      <div className="flex flex-col gap-10">
        <h2 className="text-dark-blue">Get in touch</h2>
        <ContactInfo />
        <ContactForm />
      </div>
      <div className="hidden relative h-full w-full desktop:block">
        <Image
          src="/images/BaySauna-11-LR.jpg"
          alt="Bay Sauna"
          fill
          className="object-cover"
          sizes="900px"
        />
      </div>
    </section>
  );
};

export default ContactComponent;
