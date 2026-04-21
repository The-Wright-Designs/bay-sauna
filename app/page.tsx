import PageWrapper from "@/_lib/utils/page-wrapper";
import Image from "next/image";

export default function HomePage() {
  return (
    <PageWrapper>
      <div className="grid place-items-center w-full min-h-screen">
        <div className="flex flex-col items-center gap-7 border-y-4 border-dark-blue py-7">
          <h1 className="text-center flex flex-col gap-1 desktop:text-[52px]">
            <span className="text-center text-[24px] desktop:text-[28px]">
              The new home of
            </span>{" "}
            Bay Sauna
          </h1>
          <div className="relative size-[200px] animate-pulse-scale desktop:size-[280px]">
            <Image
              src="/logo/bay-sauna-logo.png"
              alt="Bay Sauna logo"
              fill
              sizes="(max-width:800px) 400px, 600px"
              priority
            />
          </div>
          <h2 className="text-center text-[24px] font-normal desktop:text-[28px]">
            Is coming soon
          </h2>
        </div>
      </div>
    </PageWrapper>
  );
}
