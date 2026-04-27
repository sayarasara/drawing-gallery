import Image from "next/image";
import Link from "next/link";

export default function PastelworkPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-4">Pastel Work Gallery</h1>
      <p className="text-gray-400">This is the pastelwork page</p>  
      {/* Add a back button */}
      <Link href="/" className="inline-block mt-8 text-red-500 hover:text-red-400">
        ← Back to Home
      </Link>
    </div>
  );
}