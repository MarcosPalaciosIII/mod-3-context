import "./App.scss";
import TicketingHome from "./components/tickets/TicketingHome";
import { TicketProvider } from "./components/tickets/context/Ticket.context";

function App() {
	return (
		<div className="App">
			<header className="App-header"> My Header</header>

			<TicketProvider>
				<TicketingHome />
			</TicketProvider>
		</div>
	);
}

export default App;
