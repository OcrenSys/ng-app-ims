export const environment = {
	firebase: {
		apiKey: import.meta.env.IMS_FIREBASE_API_KEY,
		authDomain: import.meta.env.IMS_FIREBASE_AUTH_DOMAIN,
		projectId: import.meta.env.IMS_FIREBASE_PROJECT_ID,
		storageBucket: import.meta.env.IMS_FIREBASE_STORAGE_BUCKET,
		messagingSenderId: import.meta.env.IMS_FIREBASE_MESSAGING_SENDER_ID,
		appId: import.meta.env.IMS_FIREBASE_APP_ID,
		measurementId: import.meta.env.IMS_FIREBASE_MEASUREMENT_ID
	}
};