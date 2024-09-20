import SignInUpPopup from "@/components/signin";

export default function HomePage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to Our App</h1>
      <SignInUpPopup />
    </div>
  );
}
