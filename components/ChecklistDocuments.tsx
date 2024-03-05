import React from "react";
import { Check } from "lucide-react";
import styled from "styled-components";

type ChecklistItem = {
  theme: string;
  hasSameDocuments: boolean;
  checklistItems: {
    title: string;
    documents: {
      title: string;
    }[];
  }[];
};

export default function ChecklistDocuments({
  theme,
  hasSameDocuments,
  checklistItems,
}: ChecklistItem) {
  const [selected, setSelected] = React.useState(0);

  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 gap-16" theme={theme}>
      {
        hasSameDocuments ? (
          <>
            <div className="flex flex-col gap-4">
              {checklistItems.map((item: any, index: number) => (
                <Checklist
                  key={item.title}
                  theme={theme}
                  className={`inline-block w-fit max-w-full py-3 pl-6 pr-10 rounded-lg`}
                >
                  <a
                    key={index}
                    className="cursor-pointer flex gap-4 -ml-4 md:-ml-0"
                  >
                    <Check color="#008207" className="md:mr-2 mt-1 shrink-0" />
                    <p className="text-base md:text-lg font-semibold">
                      {item.title}
                    </p>
                  </a>
                </Checklist>
              ))}
            </div>
            <DocumentsCard theme={theme} className="p-6 md:p-12">
              <div className="flex flex-col gap-4">
                <p className="text-lg font-semibold mb-4">Documents required (Same for all)</p>
                <ul className="flex flex-col gap-2">
                  {checklistItems[0].documents.map(
                    (document: any, index: number) => (
                      <li
                        key={`document-${index}`}
                        className="text-sm"
                      >
                        {document.title}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </DocumentsCard>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-4">
              {checklistItems.map((item: any, index: number) => (
                <Checklist
                  key={item.title}
                  theme={theme}
                  className={`inline-block w-fit max-w-full py-3 pl-6 pr-10 rounded-lg ${
                    index === selected ? "active" : ""
                  }`}
                >
                  <a
                    key={index}
                    className="cursor-pointer flex gap-4 -ml-4 md:-ml-0"
                    onClick={() => setSelected(index)}
                  >
                    <Check color="#008207" className="md:mr-2 mt-1 shrink-0" />
                    <p className="text-base md:text-lg font-semibold">
                      {item.title}
                    </p>
                  </a>
                </Checklist>
              ))}
            </div>
            <DocumentsCard theme={theme} className="p-6 md:p-12">
              <div className="flex flex-col gap-4">
                <p className="text-lg font-semibold mb-4">Documents required for {checklistItems[selected].title}</p>
                <ul className="flex flex-col gap-2">
                  {checklistItems[selected].documents.map(
                    (document: any, index: number) => (
                      <li
                        key={`document-${index}`}
                        className="text-sm"
                      >
                        {document.title}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </DocumentsCard>
          </>
        )
      }
    </Container>
  );
}

const Container = styled.div<{theme:string;}>`
  & p, li {
    color: ${props => props.theme === "dark" ? "#fff" : "#000"};
    opacity: 0.8;
  }
`;

const Checklist = styled.div<{theme:string;}>`
  &.active {
    background: ${props => props.theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.03)"};
  }
`;

const DocumentsCard = styled.div<{theme:string;}>`
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.16);
  background: ${props => props.theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "#fbfaf4"};

  & ul {
    list-style: disc;
    margin-left: 16px;
  }

  & li {
    font-size: 16px;
    margin-bottom: 12px;
  }
`;
