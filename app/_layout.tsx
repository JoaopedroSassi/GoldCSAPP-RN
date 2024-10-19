import { Stack, usePathname, useRouter } from "expo-router";
import React from "react";
import { useEffect } from "react";
import Toast from "react-native-toast-message";

export default function Layout() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      router.replace("/login");
    }
  }, [pathname]);

  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
      <Toast />
    </>
  );
}
