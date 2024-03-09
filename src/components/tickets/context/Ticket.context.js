import { createContext, useState } from "react";

const TicketContext = createContext({});

export const TicketProvider = ({ children }) => {
	const [tickets, setTickets] = useState([]);

	const addNewTicket = (ticket) => {
		setTickets((prevState) => [...prevState, ticket]);
	};

	const data = {
		tickets,
		addNewTicket,
		message: "Happy Coding",
	};

	return (
		<TicketContext.Provider value={{ ...data }}>
			{children}
		</TicketContext.Provider>
	);
};

export default TicketContext;
