import { getDb } from '@/lib/db';
import { universities } from '@/db/schema';
import UniversitiesDisplay from '@/components/marketing/UniversitiesDisplay';

// Demo Data for Local Dev
const MOCK_UNIVERSITIES = [
    { id: 1, name: 'Harvard University', country: 'USA', ranking: 1, imageUrl: 'https://placehold.co/600x400/png' },
    { id: 2, name: 'University of Oxford', country: 'UK', ranking: 2, imageUrl: 'https://placehold.co/600x400/png' },
    { id: 3, name: 'University of Melbourne', country: 'Australia', ranking: 19, imageUrl: 'https://placehold.co/600x400/png' },
];

export default async function UniversitiesSection() {
    const db = await getDb();

    // Fetch real data if DB is connected, otherwise mock
    const data = db ? await db.select().from(universities).all() : MOCK_UNIVERSITIES;

    return <UniversitiesDisplay data={data} />;
}
