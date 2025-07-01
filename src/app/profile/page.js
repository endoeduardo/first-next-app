import Navbar from "../components/navbar";

export default function Profile() {
    return (
        <>
            <Navbar />
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <h1 className="text-4xl font-bold">Profile</h1>
                <p className="mt-4 text-lg">This is the profile page.</p>
            </main>
        </>
    );
}   