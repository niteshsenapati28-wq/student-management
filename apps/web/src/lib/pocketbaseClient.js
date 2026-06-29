import Pocketbase from 'pocketbase';

// In production, set VITE_POCKETBASE_URL to your deployed PocketBase URL
// (e.g. https://your-backend.onrender.com). Falls back to the old relative
// path for local/preview environments where a proxy handles routing.
const POCKETBASE_API_URL = import.meta.env.VITE_POCKETBASE_URL || '/hcgi/platform';

const pocketbaseClient = new Pocketbase(POCKETBASE_API_URL);

export default pocketbaseClient;

export { pocketbaseClient };
