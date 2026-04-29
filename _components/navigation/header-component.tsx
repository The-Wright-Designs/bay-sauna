import HeaderDesktop from "./desktop/header-desktop";
import { HeaderMobile } from "./mobile/header-mobile";

const HeaderComponent = () => {
  return (
    <header className="top-0 sticky z-20 p-5 bg-beige border-b-4 border-light-blue shadow-md desktop:px-15">
      <HeaderDesktop cssClasses="hidden desktop:block max-w-[1280px] mx-auto" />
      <HeaderMobile cssClasses="desktop:hidden" />
    </header>
  );
};

export default HeaderComponent;
