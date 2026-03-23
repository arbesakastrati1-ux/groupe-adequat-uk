import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <p className="text-6xl font-bold text-primary">404</p>
      <h1 className="mt-4 text-2xl font-bold text-dark">Page not found</h1>
      <p className="mt-2 text-gray-500 max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8 flex gap-4">
        <Link href="/" className="btn-primary">Go home</Link>
        <Link href="/jobs" className="btn-outline">Browse jobs</Link>
      </div>
    </div>
  );
}
