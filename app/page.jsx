import Image from "next/image";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=" flex  gap-x-3">
        <a
          className=" bg-slate-700 rounded-lg p-2 text-white"
          href="/api/auth/login"
        >
          Login
        </a>
        <a className=" bg-amber-500 rounded-lg p-2 text-white" href="/profile">
          Profile
        </a>
        <a className=" bg-gray-500 rounded-lg p-2 text-white" href="/api/auth/logout">
          Logout
        </a>
      </div>
    </main>
  );
}
