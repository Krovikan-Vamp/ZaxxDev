import Link from 'next/link';

export default function ThankYouPage() {
    return (
        <div className="container mx-auto p-4">
            <h1>Thank You for Contacting Us!</h1>
            <p className="mt-4">
                We appreciate you reaching out. Our team will get back to you as soon as possible.
            </p>
            <div className="mt-6">
                <Link className="inline-block border border-foreground/20 rounded-md px-4 py-2 text-foreground" href="/">
                    Return to Home
                </Link>
            </div>
        </div>
    );
}
