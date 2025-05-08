import { SocialLinks } from "@/components/navigation/social-links";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

const ContactPage = async () => {
  const t = await getTranslations();

  return (
    <div className="w-screen md:h-[calc(100vh-110px)] flex md:flex-row flex-col-reverse items-stretch bg-white">
      <div className="md:w-1/2 w-full md:h-full h-[600px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.676914102168!2d43.2965575!3d41.3811037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4042f6ad9e62ddf9%3A0x7c371117836d8edc!2z4YOV4YOQ4YOg4YOr4YOY4YOQIOGDoOGDlOGDluGDneGDoOGDouGDmA!5e0!3m2!1ska!2sge!4v1745532096260!5m2!1ska!2sge"
          width="100%"
          height="100%"
          loading="lazy"
        ></iframe>
      </div>
      <div className="md:w-1/2 w-full h-full md:py-5 py-10 flex flex-col items-center justify-center gap-3 p-5">
        <h2 className="text-4xl">{t("common.contact_info")}</h2>

        <div className="w-8 h-[1px] bg-black my-2"></div>

        <p className=" font-medium">{t("common.address")}</p>
        <Link
          href="tel:+995 591 321 515"
          className="hover:text-primary-main transition duration-300 font-medium"
        >
          +995 591 321 515
        </Link>

        <Link
          href="mailto:info@vardziaresort.com"
          className="hover:text-primary-main transition duration-300 font-medium"
        >
          info@vardziaresort.com
        </Link>

        <SocialLinks
          isHomePage={false}
          iconClassName="h-5 w-5 text-black mt-3"
        />
      </div>
    </div>
  );
};

export default ContactPage;
