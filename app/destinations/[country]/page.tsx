import { notFound } from "next/navigation";
import { destinationsData } from "@/lib/data/destinations";
import CountryContent from "@/components/CountryContent";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface CountryPageProps {
    params: Promise<{
        country: string;
    }>;
}

export default async function CountryPage({ params }: CountryPageProps) {
    const resolvedParams = await params;
    const country = destinationsData.find((c) => c.id === resolvedParams.country);

    if (!country) {
        notFound();
    }

    return (
        <>
            <Header />
            <CountryContent country={country} />
            <Footer />
        </>
    );
}
