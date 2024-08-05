import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import {
  SpaceDashboardRounded as SpaceDashboardRoundedIcon,
  LibraryBooksRounded as LibraryBooksRoundedIcon,
  PersonRounded as PersonRoundedIcon,
  AddCircleRounded as AddCircleRoundedIcon,
  NotificationsActiveRounded as NotificationsActiveRoundedIcon,
  SettingsRounded as SettingsRoundedIcon,
  AccountCircleRounded as AccountCircleRoundedIcon,
} from '@mui/icons-material';

interface menuListType {
  icon: OverridableComponent<SvgIconTypeMap<object, 'svg'>> & {
    muiName: string;
  };
  label: string;
  end?: boolean;
}

export const menuLists: menuListType[] = [
  {
    icon: SpaceDashboardRoundedIcon,
    label: 'Dash Board',
  },
  {
    icon: LibraryBooksRoundedIcon,
    label: 'Books',
  },
  {
    icon: PersonRoundedIcon,
    label: 'Owner',
  },
  {
    icon: AddCircleRoundedIcon,
    label: 'Other',
  },
  {
    icon: AddCircleRoundedIcon,
    label: 'Other',
  },
  {
    icon: AddCircleRoundedIcon,
    label: 'Other',
    end: true,
  },
  {
    icon: NotificationsActiveRoundedIcon,
    label: 'Notification',
  },
  {
    icon: SettingsRoundedIcon,
    label: 'Setting',
  },
  {
    icon: AccountCircleRoundedIcon,
    label: 'Login as Book Owner',
  },
];
