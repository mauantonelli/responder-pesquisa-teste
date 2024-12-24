import React, { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import "./filtros.css";
import { ChevronDownCircleIcon, SearchIcon } from "lucide-react";

interface AccordionDemoProps {
    children: React.ReactNode;
}

const AccordionDemo = () => {
    const [isOpen, setIsOpen] = useState(false)
    return <Accordion.Root
        style={{ background: "white", width: "800px", border: "none", outline: "none", boxShadow: "none" }}
        className="AccordionRoot "
        type="single"
        collapsible
    >
        <Accordion.Item className="AccordionItem " value="item-1">
            <Accordion.AccordionTrigger className="AccordionTrigger conteiner-filtro" style={{ padding: "0" }}>
                <div
                    className=""
                    data-position="top"
                    data-tooltip="Clique para responder"
                >
                    <span onClick={() => setIsOpen(!isOpen)} className={`filtro-button`}>Filtros &nbsp;<ChevronDownCircleIcon className={` dropdown-arrow ${isOpen ? "open" : ""}`} style={{ color: "#cecece" }} /></span>
                </div>
            </Accordion.AccordionTrigger>
            <Accordion.AccordionContent className="AccordionContent " >
                <ContentFilter />
            </Accordion.AccordionContent>
        </Accordion.Item>

    </Accordion.Root>
};

function ContentFilter() {
    return (
        <div className="" style={{ width: "100%", display: "flex", flexDirection: "column", }}>
            <div style={{width:"500px"}}>
                <div className="filter-top row">
                    <div className="col s10">
                        <input placeholder="Pesquisar" className="search" type="text" style={{ flexGrow: 1, flexBasis: 0, flexShrink: 1, alignItems: "center" }} />
                    </div>

                    <div className="col s2"><SearchIcon /></div>
                </div>
            </div>


            <div>
                <table className="tableFilter">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" />
                                    <span>Area</span>
                                </label>
                            </th>
                            <th>
                                <label>
                                    <input type="checkbox" />
                                    <span>Cargo</span>
                                </label>
                            </th>
                            <th>
                                <label>
                                    <input type="checkbox" />
                                    <span>Local</span>
                                </label>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <label>
                                    <input type="checkbox" />
                                    <span>Financeiro</span>
                                </label>
                            </td>
                            <td>
                                <label>
                                    <input type="checkbox" />
                                    <span>Diretor</span>
                                </label>
                            </td>
                            <td>
                                <label>
                                    <input type="checkbox" />
                                    <span>Sao Paulo</span>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    <input type="checkbox" />
                                    <span>Financeiro</span>
                                </label>
                            </td>
                            <td>
                                <label>
                                    <input type="checkbox" />
                                    <span>Diretor</span>
                                </label>
                            </td>
                            <td>
                                <label>
                                    <input type="checkbox" />
                                    <span>Sao Paulo</span>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    <input type="checkbox" />
                                    <span>Financeiro</span>
                                </label>
                            </td>
                            <td>
                                <label>
                                    <input type="checkbox" />
                                    <span>Diretor</span>
                                </label>
                            </td>
                            <td>
                                <label>
                                    <input type="checkbox" />
                                    <span>Sao Paulo</span>
                                </label>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>)
}

export default AccordionDemo;
