import { InteractiveFaq, FaqItemBlok } from "./InteractiveFaq";

interface FaqSectionBlok {
  _uid: string;
  component: "faq_section";
  heading: string;
  email: string;
  faq: FaqItemBlok[];
}

export const Faq = ({ blok }: { blok: FaqSectionBlok }) => {
  return (
    <div className="bg-white sm:p-1 py-4 px-6 md:p-10 rounded-xl shadow-sm max-w-[1285px] mx-4 xl:mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-faq sm:text-[19px]">
        {blok.heading || "FAQs"}
      </h2>

      <InteractiveFaq items={blok.faq} />

      <p className="text-center mt-8 text-email1 font-semibold text-base sm:text-base">
        Have other Questions? Email{" "}
        <a
          href={`mailto:${blok.email}`}
          className="text-email2 hover:underline font-semibold text-base"
        >
          {blok.email}
        </a>
      </p>
    </div>
  );
};
