import Link from "next/link";
import { ArrowRight } from "@/components/Icons";

export default function NotFound() {
    return (
        <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-5 py-20 sm:px-8">
            <p className="eyebrow mb-4">
                <span className="text-accent">404</span>
                <span className="ml-3">Not found</span>
            </p>
            <h1 className="display text-5xl sm:text-6xl md:text-7xl">
                That page
                <br />
                <span className="italic text-fg-muted">doesn&apos;t exist.</span>
            </h1>
            <p className="mt-6 max-w-md text-fg-muted">
                The link may be out of date. Everything on the site is reachable from the home page.
            </p>
            <Link href="/" className="btn btn-primary mt-8 w-fit">
                Back home
                <ArrowRight width={16} height={16} />
            </Link>
        </div>
    );
}
