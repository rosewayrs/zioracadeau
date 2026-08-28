import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-40 pb-40 wrap text-center">
      <p className="eyebrow mb-6">404</p>
      <h1 className="display-1">This Page Has Wandered Off.</h1>
      <p className="text-bark mt-6 max-w-md mx-auto">
        The page you're looking for doesn't exist, or has moved.
      </p>
      <Link href="/" className="btn btn-outline mt-10 inline-flex">
        Return Home
      </Link>
    </div>
  );
}
