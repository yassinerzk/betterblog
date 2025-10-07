"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { DropdownMenuGroup, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";

export function Logout() {
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/");
  };

  return (
    <DropdownMenuGroup>
    <DropdownMenuItem >
      <LogOut />
      Logout
    </DropdownMenuItem>
    </DropdownMenuGroup>

  );
}