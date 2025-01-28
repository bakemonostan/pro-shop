import { APP_NAME } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full border-t">
      <div className="py-5 flex-center">
        Copyright {currentYear} {APP_NAME}
      </div>
    </footer>
  );
}
