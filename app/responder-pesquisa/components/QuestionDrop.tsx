import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import "./filtros.css";
import { SearchIcon } from "lucide-react";

interface AccordionDemoProps {
    value: string;
    item: string;
}
const questions = [
    "Com quem você troca informações sobre trabalho?",
    "Com quem você compartilha decisões importantes?",
    "Com quem você busca ajuda técnica?",
    "Com quem você discute inovações?",
    "Com quem você conversa informalmente?",
];

const columns = [
    "Nulo",
    "Baixo",
    "Medio",
    "Alto",
];

const AccordionQuestion = ({  value , item}: AccordionDemoProps) => (
    <Accordion.Root
        style={{ background: "white", width: "100%", border: "none", outline: "none", boxShadow: "none" }}
        className="AccordionRoot "
        type="single"
        collapsible
        value={value}
    >
        <Accordion.Item  className="AccordionItem" style={{width: "100%"}} value={item}>
            <Accordion.AccordionContent className="AccordionContent " style={{ padding: "4px", width: "100%", background: "white" }}>
                <ContentFilter />
            </Accordion.AccordionContent>
        </Accordion.Item>

    </Accordion.Root>
);

function ContentFilter() {
    return (
        <div className="" style={{ width: "100%", display: "flex", flexDirection: "column" }}>
            <div>
                <table className="black-text">
                    <thead>
                        <tr>
                            <th>
                                <span className="">#</span>
                            </th>
                            {columns.map((col, index) => (
                                <th key={index}>
                                    <span className="">{col}</span>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {questions.map((question, index) => (
                            <tr key={index}>
                                <td>
                                    <span className="DialogDescription">
                                        {index + 1} - {question}
                                    </span>
                                </td>
                                {columns.map((line, colIndex) => (
                                    <td key={colIndex}>
                                        <label>
                                            <input
                                                name={question}
                                                className="blue"
                                                type="radio"
                                                defaultChecked={colIndex === 0}
                                            />
                                            <span></span>
                                        </label>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>)
}

export default AccordionQuestion;
