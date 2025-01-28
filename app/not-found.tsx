"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();
  const handleGoToHome = () => {
    router.push("/");
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Image
        src="/images/logo.svg"
        alt={`${APP_NAME} Logo`}
        width={50}
        height={50}
        priority={true}
      />
      <div className="p-6 w-1/3 rounded-lg shadow-md text-center space-y-4">
        <h1 className="text-3xl font-bold">Page Not Found</h1>
        <p className="text-sm text-destructive">
          The page you are looking for does not exist.
        </p>
        <Button
          className="mt-4"
          variant={"outline"}
          onClick={handleGoToHome}>
          Go to Home
        </Button>
      </div>
    </div>
  );
}
