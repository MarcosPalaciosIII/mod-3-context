import React, { useContext } from "react";
import TicketContext from "./context/Ticket.context";

export default function TicketingHome() {
	const { tickets, addNewTicket, message } = useContext(TicketContext);

	console.log({ message });

	return (
		<div>
			<h2>Ticketing Home</h2>
		</div>
	);
}
