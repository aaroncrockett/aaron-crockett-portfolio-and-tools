import { initializeApp } from 'firebase-admin/app';
import { credential as adminCredential } from 'firebase-admin';

import { GOOGLE_APPLICATION_CREDENTIALS } from '$env/static/private';

const serviceAccount = JSON.parse(GOOGLE_APPLICATION_CREDENTIALS);

initializeApp({
	credential: adminCredential.cert(serviceAccount)
});
