import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-serif text-4xl text-text-primary mb-4">404</h1>
        <p className="text-text-secondary mb-6">This page doesn&apos;t exist.</p>
        <Link
          href="/"
          className="text-accent hover:underline"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
