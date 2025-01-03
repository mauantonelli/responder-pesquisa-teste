"use client";

import Head from "next/head";
import React, { useEffect, useCallback, useState } from "react";
import "./style.css";
import { MyHead } from "../components/Head";
import AccordionDemo from "./components/FiltrosDrop";
import AccordionQuestion from "./components/QuestionDrop";
import { Edit2Icon, NotebookPen } from "lucide-react";
interface SortedColumn {
    name: boolean;
    department: boolean;
    sector: boolean;
    participant: boolean;
    attr1: boolean;
    attr2: boolean;
    attr3: boolean;
    attr4: boolean
}
interface Participant {
    id: number;
    name: string;
    cpf: string;
    email: string;
    area: string;
    attr1: string;
    attr2: string;
    attr3: string;
    attr4: string;
    department: string;
    sector: string;
    participant: string;

}

const fakeParticipants: Participant[] = [{ id: 1, name: "Manuel Silvano", cpf: "123.456.789-00", email: "manuel@example.com", area: "RH", attr1: "A1", attr2: "B1", attr3: "C1", attr4: "D1", department: "Recursos Humanos", sector: "Setor 1", participant: "Participante 1" },
{ id: 2, name: "Ana Paula", cpf: "987.654.321-00", email: "ana@example.com", area: "TI", attr1: "A2", attr2: "B2", attr3: "C2", attr4: "D2", department: "Tecnologia da Informação", sector: "Setor 2", participant: "Participante 2" },
{ id: 3, name: "Carlos Eduardo", cpf: "456.789.123-00", email: "carlos@example.com", area: "Marketing", attr1: "A3", attr2: "B3", attr3: "C3", attr4: "D3", department: "Marketing", sector: "Setor 3", participant: "Participante 3" },
{ id: 4, name: "Fernanda Lima", cpf: "789.123.456-00", email: "fernanda@example.com", area: "Financeiro", attr1: "A4", attr2: "B4", attr3: "C4", attr4: "D4", department: "Financeiro", sector: "Setor 4", participant: "Participante 4" },
{ id: 5, name: "João Pedro", cpf: "321.654.987-00", email: "joao@example.com", area: "Vendas", attr1: "A5", attr2: "B5", attr3: "C5", attr4: "D5", department: "Vendas", sector: "Setor 5", participant: "Participante 5" },
];
const SurveyPage = () => {

    const [valueQuestion, setValueQuestion] = useState("");
    const showAlert = useCallback(() => {
        alert(`
             Bem-vindo à Pesquisa!
             Esta pesquisa tem como objetivo coletar informações para aprimorar nossa organização. 
             Por favor, leia atentamente as perguntas e responda de acordo com a interação com os participantes.
 
             - Clique em "Alta" para interação diária ou muito frequente.
             - Clique em "Média" para interação semanal ou menos frequente.
             - Clique em "Baixa" para interação esporádica.
             - Não responda se nunca interage com a pessoa.
 
             Caso precise sair antes de terminar, salve seu progresso. Quando concluir, clique em "Finalizar".
         `);
    }, []);

    useEffect(() => {
        showAlert();
        import("materialize-css").then((M) => M.AutoInit());
    }, []);

    const questions = [
        "Com quem você troca informações sobre trabalho?",
        "Com quem você compartilha decisões importantes?",
        "Com quem você busca ajuda técnica?",
        "Com quem você discute inovações?",
        "Com quem você conversa informalmente?",
    ];
    const [sortedColumn, setSortedColumn] = useState<SortedColumn>({
        name: false,
        department: false,
        sector: false,
        participant: false,
        attr1: false,
        attr2: false,
        attr3: false,
        attr4: false
    });

    function isSorted(participant: Participant[], column: keyof Participant) {
        for (let index = 1; index < participant.length; index++) {
            if (participant[index][column].toLocaleString().localeCompare(participant[index - 1][column].toLocaleString()) < 0) {
                return false;
            }
        }
        return true;
    }

    function clickColumn(column: "name" | "department" | "sector" | "participant" | "attr1" | "attr2" | "attr3" | "attr4") {
        switch (column) {
            case "name":
                if (isSorted(participants, "name")) {
                    setParticipants([...participants].sort((a, b) => b.name.localeCompare(a.name)));
                    setSortedColumn({ ...sortedColumn, name: false });
                    return;
                }
                setParticipants([...participants].sort((a, b) => a.name.localeCompare(b.name)));
                setSortedColumn({ ...sortedColumn, name: true });
                break;
            case "department":

                if (isSorted(participants, "department")) {
                    setParticipants([...participants].sort((a, b) => b.department.localeCompare(a.department)));
                    setSortedColumn({ ...sortedColumn, department: false });
                    return;
                }
                setParticipants([...participants].sort((a, b) => a.department.localeCompare(b.department)));
                setSortedColumn({ ...sortedColumn, department: true });
                break;
            case "sector":
                if (isSorted(participants, "sector")) {
                    setParticipants([...participants].sort((a, b) => b.sector.localeCompare(a.sector)));
                    setSortedColumn({ ...sortedColumn, sector: false });
                    return;
                }
                setParticipants([...participants].sort((a, b) => a.sector.localeCompare(b.sector)));
                setSortedColumn({ ...sortedColumn, sector: true });

                break;
            case "participant":
                if (isSorted(participants, "participant")) {
                    setParticipants([...participants].sort((a, b) => b.participant.localeCompare(a.participant)));
                    setSortedColumn({ ...sortedColumn, participant: false });
                    return;
                }
                setParticipants([...participants].sort((a, b) => a.participant.localeCompare(b.participant)));
                setSortedColumn({ ...sortedColumn, participant: true });

                break;
            case "attr1":
                if (isSorted(participants, "attr1")) {
                    setParticipants([...participants].sort((a, b) => b.attr1.localeCompare(a.attr1)));
                    setSortedColumn({ ...sortedColumn, attr1: false });
                    return;
                }
                setParticipants([...participants].sort((a, b) => a.attr1.localeCompare(b.attr1)));
                setSortedColumn({ ...sortedColumn, attr1: true });
                break;
            case "attr2":
                if (isSorted(participants, "attr2")) {
                    setParticipants([...participants].sort((a, b) => b.attr2.localeCompare(a.attr2)));
                    setSortedColumn({ ...sortedColumn, attr2: false });
                    return;
                }
                setParticipants([...participants].sort((a, b) => a.attr2.localeCompare(b.attr2)));
                setSortedColumn({ ...sortedColumn, attr2: true });
                break;
            case "attr3":
                if (isSorted(participants, "attr3")) {
                    setParticipants([...participants].sort((a, b) => b.attr3.localeCompare(a.attr3)));
                    setSortedColumn({ ...sortedColumn, attr3: false });
                    return;
                }
                setParticipants([...participants].sort((a, b) => a.attr3.localeCompare(b.attr3)));
                setSortedColumn({ ...sortedColumn, attr3: true });
                break;
            case "attr4":
                if (isSorted(participants, "attr4")) {
                    setParticipants([...participants].sort((a, b) => b.attr4.localeCompare(a.attr4)));
                    setSortedColumn({ ...sortedColumn, attr1: false });
                    return;
                }
                setParticipants([...participants].sort((a, b) => a.attr4.localeCompare(b.attr4)));
                setSortedColumn({ ...sortedColumn, attr4: true });
                break;
            default:
                break;
        }
    }
    const [openList, setOpenList] = useState<Array<String>>([])

    function addOpenQuention(id: string) {
        const exists = openList.some((data) => data === id)
        if (!exists) {
            openList.push(id)
            setOpenList(openList)
        }
    }
    function isAddedList(id: string) {
        return openList.some((data) => data === id)
    }
    const [participants, setParticipants] = useState<Participant[]>(fakeParticipants);


    const renderOptions = (questionIndex: number) => (
        <div className="radio-group">
            {["Baixa", "Média", "Alta"].map((label, idx) => (
                <label key={idx}>
                    <input
                        name={`question_${questionIndex}`}
                        type="radio"
                        value={label.toLowerCase()}
                        aria-label={`Opção ${label}`}
                    />
                    <span>{label}</span>
                </label>
            ))}
        </div>
    );

    function toggleQuestion(id: string) {
        if (valueQuestion === id) {
            setValueQuestion("");
            return;
        }
        setValueQuestion(id);
        addOpenQuention(id)
    }
    function handleSave() {
        const { toast } = require("materialize-css");
        toast({html:"Pesquisa salva com sucesso"})
    }
    function handleFinal() {
        if (confirm("Tem certeza que deseja finalizar sua pesquisa? Essa ação não pode ser desfeita.")) { }
    }
    return (
        <>
            <Head>
                <MyHead title="Survey App" />
            </Head>
            <div>
                <div className="navbar-fixed">
                    <nav className="blue darken-4 ">
                        <div className="nav-wrapper ">
                            <div className="brand-logo hide-on-small-only">
                                <img src="/img/logo-neuroredes-header.png" alt="Logo"
                                    width={100}
                                    height={60}
                                />
                            </div>
                            <ul id="nav-mobile" className="right">
                                <li>
                                    <a href="#" onClick={handleSave} className="salvar">Salvar</a>
                                </li>
                                <li>
                                    <a href="#" onClick={handleFinal} className="finalizar">Finalizar</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="first-bar">

                    <div className="title-bar">
                        <span className="title-page">Pesquisa</span>
                        <span className="subtitle">Case Genérico</span>
                    </div>
                    <div className="login-info right-align">
                        Logado como:|{' '}
                        <a
                            href="/index?acao=logout"
                            className="btn btn-small blue darken-4 waves-effect waves-light"
                        >
                            Sair
                        </a>
                    </div>
                </div>

                <div className="row">
                    <div className="top-bar">
                        <div>
                            <AccordionDemo />

                        </div>

                    </div>
                    <div className=" my-container">
                        <table className="mytable">
                            <thead>
                                <tr>
                                    <th style={{ width: "200px" }} onClick={() => clickColumn("name")}>Nome
                                        <i className="material-icons right" style={{ marginLeft: '-4px' }}>
                                            {sortedColumn.name ? "arrow_drop_up" : "arrow_drop_down"}
                                        </i>
                                    </th>
                                    <th style={{ width: "200px" }} onClick={() => clickColumn("department")}>Area
                                        <i className="material-icons right" style={{ marginLeft: '-4px' }}>
                                            {sortedColumn.department ? "arrow_drop_up" : "arrow_drop_down"}
                                        </i>
                                    </th>
                                    <th style={{ width: "150px" }} onClick={() => clickColumn("participant")}>Cargo
                                        <i className="material-icons right" style={{ marginLeft: '-4px' }}>
                                            {sortedColumn.participant ? "arrow_drop_up" : "arrow_drop_down"}

                                        </i>
                                    </th>
                                    <th style={{ width: "150px" }} onClick={() => clickColumn("sector")}>Região
                                        <i className="material-icons right" style={{ marginLeft: '-4px' }}>
                                            {sortedColumn.sector ? "arrow_drop_up" : "arrow_drop_down"}
                                        </i>

                                    </th>
                                    <th style={{ width: "150px" }} onClick={() => clickColumn("attr4")}>
                                        Attr4
                                        <i className="material-icons right" style={{ marginLeft: '-4px' }}>
                                            {sortedColumn.attr4 ? "arrow_drop_up" : "arrow_drop_down"}
                                        </i>
                                    </th>
                                    <th style={{ width: "150px" }} onClick={() => clickColumn("attr3")}>
                                        Att3
                                        <i className="material-icons right" style={{ marginLeft: '-4px' }}>
                                            {sortedColumn.attr3 ? "arrow_drop_up" : "arrow_drop_down"}
                                        </i>
                                    </th>
                                    <th style={{ width: "150px" }} onClick={() => clickColumn("attr1")}>
                                        Attr1
                                        <i className="material-icons right" style={{ marginLeft: '-4px' }}>
                                            {sortedColumn.attr1 ? "arrow_drop_up" : "arrow_drop_down"}
                                        </i>
                                    </th>
                                    <th style={{ width: "150px" }} onClick={() => clickColumn("attr2")}>
                                        Attr2
                                        <i className="material-icons right" style={{ marginLeft: '-4px' }}>
                                            {sortedColumn.attr2 ? "arrow_drop_up" : "arrow_drop_down"}
                                        </i>
                                    </th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {participants.map((part) => (
                                    <React.Fragment key={part.id}>
                                        <tr>
                                            <td style={{ cursor: "pointer" }} onClick={() => toggleQuestion(part.id.toString())}>{part.name}</td>
                                            <td>{part.department}</td>
                                            <td>{part.participant}</td>
                                            <td>{part.sector}</td>
                                            <td>{part.attr4}</td>
                                            <td>{part.attr3}</td>
                                            <td>{part.attr2}</td>
                                            <td>{part.attr1}</td>
                                            <td style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                <button
                                                    onClick={() => toggleQuestion(part.id.toString())}
                                                    className="btn-question"
                                                    data-id=""
                                                    data-position="top"
                                                    data-tooltip="Clique para responder"
                                                >
                                                    <NotebookPen size={20} />
                                                </button>
                                                &nbsp;&nbsp;
                                                <label>
                                                    <input type="checkbox" checked={isAddedList(part.id.toString())} />
                                                    <span></span>
                                                </label>
                                            </td>
                                        </tr>
                                        {
                                            <tr>
                                                <td colSpan={8} style={{ padding: 0 }}>
                                                    <div style={{ padding: "0", paddingLeft: "30px" }}>
                                                        <AccordionQuestion item={part.id.toString()} value={valueQuestion} />
                                                    </div>
                                                </td>
                                            </tr>
                                        }
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>


                <div id="modal1" className="modal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                <p>
                                    Bem-vindo à Pesquisa!
                                    <br />
                                    Por favor, responda com atenção para melhorar nossa organização.
                                </p>
                                <p style={{ color: "red", fontWeight: "bold" }}>
                                    ATENÇÃO: Deixe em branco se não houver interação.
                                </p>
                            </div>
                            <div className="modal-footer">
                                <a href="#!" className="modal-close btn btn-success">Entendi</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SurveyPage;
