import type { RequestHandler } from './$types';
import { firestore as db } from '$lib/firebaseServer';

export const GET: RequestHandler = async () => {
	// Create an object with the data you want to return as JSON
	const docRef = db.collection('users').doc('alovelace');

	await docRef.set({
		first: 'Ada',
		last: 'Lovelace',
		born: 1815
	});
	const responseData = {
		message: 'Hello, JSON!',
		value: 42
	};

	// Serialize the data as JSON
	const jsonResponse = JSON.stringify(responseData);

	// Create a Response object with the JSON data and appropriate headers
	const response = new Response(jsonResponse, {
		headers: {
			'Content-Type': 'application/json'
		}
	});

	return response;
};
