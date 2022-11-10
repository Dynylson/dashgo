import { Stack } from "@chakra-ui/react";

import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";

import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine} color="white">
          DASHBOARD
        </NavLink>
        <NavLink icon={RiContactsLine} color="white">
          USUÁRIOS
        </NavLink>
      </NavSection>
      <NavSection title="AUTOMAÇÃO">
        <NavLink icon={RiInputMethodLine} color="white">
          FORMULÁRIOS
        </NavLink>
        <NavLink icon={RiGitMergeLine} color="white">
          AUTOMAÇÃO
        </NavLink>
      </NavSection>
    </Stack>
  );
}
