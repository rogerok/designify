import React from "react";
import { clientsData } from "../../data/clientsData";
import { Container, TitleWithDecoration } from "../../globalStyles";

import {
  ClientsSection,
  ClientsRow,
  ClientsColumn,
  ClientImage,
  ClientWrapper,
} from "./ClientsStyles";

const Clients = () => (
  <ClientsSection>
    <Container>
      <TitleWithDecoration large>Clients</TitleWithDecoration>
      <TitleWithDecoration decoration>
        We’ve been working with teams around the world.
      </TitleWithDecoration>
      <ClientsRow>
        <ClientsRow>
          {clientsData.map((arr, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <ClientsColumn key={index}>
              {arr.map((client) => (
                <ClientWrapper key={client.name}>
                  <ClientImage src={`./images/clients/${client.name}.svg`} />
                </ClientWrapper>
              ))}
            </ClientsColumn>
          ))}
        </ClientsRow>
      </ClientsRow>
    </Container>
  </ClientsSection>
);

export default Clients;
