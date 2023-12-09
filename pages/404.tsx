import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <h2 className="text-4xl">Page Not Found</h2>
      <div className="my-6 flex gap-12">
        <Link href={"/"}>Go back home</Link>
      </div>
    </div>
  );
}
