import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import {
  SpaceDashboardRounded as SpaceDashboardRoundedIcon,
  LibraryBooksRounded as LibraryBooksRoundedIcon,
  PersonRounded as PersonRoundedIcon,
  AddCircleRounded as AddCircleRoundedIcon,
  NotificationsActiveRounded as NotificationsActiveRoundedIcon,
  SettingsRounded as SettingsRoundedIcon,
  AccountCircleRounded as AccountCircleRoundedIcon,
} from "@mui/icons-material";

interface menuListType {
  index: number;
  icon: OverridableComponent<SvgIconTypeMap<object, "svg">> & {
    muiName: string;
  };
  label: string;
  end?: boolean;
}

export const menuLists: menuListType[] = [
  {
    index: 0,
    icon: SpaceDashboardRoundedIcon,
    label: "DashBoard",
  },
  {
    index: 1,
    icon: LibraryBooksRoundedIcon,
    label: "Books",
  },
  {
    index: 2,
    icon: PersonRoundedIcon,
    label: "Owner",
  },
  {
    index: 3,
    icon: AddCircleRoundedIcon,
    label: "Other",
  },
  {
    index: 4,
    icon: AddCircleRoundedIcon,
    label: "Other",
  },
  {
    index: 5,
    icon: AddCircleRoundedIcon,
    label: "Other",
    end: true,
  },
  {
    index: 6,
    icon: NotificationsActiveRoundedIcon,
    label: "Notification",
  },
  {
    index: 7,
    icon: SettingsRoundedIcon,
    label: "Setting",
  },
  {
    index: 8,
    icon: AccountCircleRoundedIcon,
    label: "Login as Book Owner",
  },
];
