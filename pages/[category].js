import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { juicy, random, bestfriend, newfriend, deep, fun } from "../components/questions";

export default function Category() {
    const router = useRouter();
    const [questions, setQuestions] = useState([]);
    const [active, setActive] = useState();

    useEffect(() => {
        const category = router.query.category;

        // Depending on the category, we will display different questions
        let unfiltered = [];
        switch (category) {
            case "juicy":
                unfiltered = juicy;
                break;
            case "random":
                unfiltered = random;
                break;
            case "bestfriend":
                unfiltered = bestfriend;
                break;
            case "newfriend":
                unfiltered = newfriend;
                break;
            case "deep":
                unfiltered = deep;
                break;
            case "fun":
                unfiltered = fun;
                break;
            default:
                setQuestions([]);
                return;
        }

        // Filter out questions that have been answered before
        const history = JSON.parse(localStorage.getItem("history")) || [];
        const filtered = unfiltered.filter(question => !history.includes(question));
        setQuestions(filtered);
    }, [router]);

    useEffect(() => {
        if (questions.length) {
            setActive(questions[0]);
        }
    }, [questions]);

    const nextQuestion = () => {
        const index = questions.indexOf(active);
        if (index >= questions.length - 1) {
            setActive("Je hebt alle vragen beantwoord!");
            return;
        }

        // Add the active question to the history in local storage
        const history = JSON.parse(localStorage.getItem("history")) || [];
        history.push(active);
        localStorage.setItem("history", JSON.stringify(history));

        // Set the next question as active
        setActive(questions[index + 1]);
    };

    return (
        <section className="section-ourmenu bg2-pattern" style={{
            height: "100vh", 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center"
        }}>
            <div className="container" style={{display: "flex", flexDirection: "column", 
            alignItems: "center", }}>
                <div className="title-section-ourmenu t-center m-b-22">
                    <span className="tit2 t-center">
                    {active}
                    </span>
                </div>
                <button className="btn3 flex-c-m size18 txt11 trans-0-4 m-10" onClick={nextQuestion}>
                    Volgende
                </button>
            </div>
        </section>
    );
}
