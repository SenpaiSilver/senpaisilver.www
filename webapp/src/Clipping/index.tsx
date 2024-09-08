import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AppContext } from "../context";
import { LanguageContext } from "../Language/locale";

export default function Clipping() {
    const useAppContext = useContext(AppContext);
    const locale = useContext(LanguageContext);

    return (
        <>
            <Helmet>
                <link rel="canonical" href="https://senpaisilver.com/clipping" />
            </Helmet>
            <section>
                <div>
                    <h2>{locale.translations("clipping_head_rules")}</h2>
                    {locale.translations("clipping_p1")}
                    {locale.translations("clipping_rules")}

                    <h2>{locale.translations("clipping_head_credit")}</h2>
                    <h3>{locale.translations("clipping_head_credit_how")}</h3>
                    {locale.translations("clipping_credit_how")}
                    <h3>{locale.translations("clipping_head_credit_where")}</h3>
                    {locale.translations("clipping_credit_where")}

                    <h2>{locale.translations("clipping_head_monetization")}</h2>
                    {locale.translations("clipping_monetization")}
                </div>
            </section>
        </>
    );
}
