import { Stack, usePathname, useRouter } from "expo-router";
import { useEffect } from "react";

export default function Layout() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      router.replace("/login");
    }
  }, [pathname]);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
