import React, { useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import "./Dialog.css";
import { X } from "lucide-react";
import M from "materialize-css";

interface DialogDemoProps {
  children: React.ReactNode;
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

const DialogDemo = ({ children }: DialogDemoProps) => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent dialog-question">
          <Dialog.Title className="DialogTitle">Responder as perguntas</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Depois de responder as perguntas, clique em "Salvar" para finalizar.
          </Dialog.Description>
          <table className="black-text">
            <thead>
              <tr>
                <th>
                  <span className="">Pergunta</span>
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
                    <td key={colIndex}>z
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
          <div style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}>
            <Dialog.Close asChild>
              <button className="Button green white-text">Salvar</button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              <X />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DialogDemo;
