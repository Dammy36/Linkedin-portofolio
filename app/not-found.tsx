import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="container section case-study">
      <p className="eyebrow">404 / NOT FOUND</p>
      <h1>This page isn’t here.</h1>
      <p>Let’s get you back to something purposeful.</p>
      <Link className="button primary" href="/">
        Back to home
      </Link>
    </main>
  );
}
