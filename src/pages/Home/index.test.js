import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";
import EventCard from "../../components/EventCard";
import EventList from "../../containers/Events";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });
});

describe("When a page is created", () => {
  it("a list of events is displayed", () => {
    render(
      <Home>
        <EventList />
      </Home>
    );
    screen.findByText("expérience digitale");
    screen.findByText("conférence");
    screen.findByTestId("card-testid");
  });
  it("a list a people is displayed", () => {
    render(<Home />);
    screen.findByText("Samira");
    screen.findByText("Directeur marketing");
    screen.findByTestId("card-image-testid");
  });
  it("a footer is displayed", () => {
    render(<Home />);
    screen.findByText("45 avenue de la République, 75000 Paris");
    screen.findByText(
      "Une agence événementielle propose des prestations de service spécialisées dans la conception et l'organisation de divers événements tels que des événements festifs, des manifestations sportives et culturelles, des événements professionnels"
    );
  });
  it("an event card, with the last event, is displayed", () => {
    render(
      <Home>
        <EventCard />
      </Home>
    );
    screen.findByTestId("card-image-testid");
  });
});
