import Faq from "./Faq";
import faqsData from "./Faqs_Data.js";
import style from "./faqs.module.css";

const Faqs = () => {
  return (
    <main className={style.container}>
      <section className={style.faqs}>
        <h1>Freequently Ask Question (FAQ)</h1>
        {faqsData.map((faqdata) => (
          <Faq key={faqdata.id} {...faqdata} />
        ))}
      </section>
    </main>
  );
};
export default Faqs;
