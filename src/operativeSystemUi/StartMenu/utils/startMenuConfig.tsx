import {
  Computer3,
  FileFind,
  FolderExe,
  FolderExe2,
  FolderFile,
  FolderPrint,
  FolderSettings,
  HelpBook,
  LoaderBat,
  Main300,
  McmEarth,
  MicrosoftExchange,
  MicrosoftNetwork,
  MsDos,
  Progman1,
  Progman12,
  Settings,
  Shell32137,
  WindowsExplorer,
} from "@react95/icons";

export interface MenuItem {
  name: string;
  icon: React.ReactNode;
  subItems?: Record<string, MenuItem>;
  onClick?: () => void;
  isSectionDivider?: boolean;
}

export const startMenuConfig: Record<string, MenuItem> = {
  programs: {
    name: "Programs",
    icon: <FolderExe2 />,
    subItems: {
      accessories: {
        name: "Accessories",
        icon: <FolderExe variant="16x16_4" />,
        subItems: {
          system_tools: {
            name: "System Tools",
            icon: <Shell32137 variant="16x16_4" />,
            subItems: {
              disk_cleanup: {
                name: "Disk Cleanup",
                icon: <Progman12 variant="32x32_4" />,
                onClick: () => console.log("You have clicked Disk Cleanup"),
              },
              scan_disk: {
                name: "ScanDisk",
                icon: <Progman12 variant="32x32_4" />,
                onClick: () => console.log("You have clicked ScanDisk"),
              },
              defrag: {
                name: "Disk Defragmenter",
                icon: <Progman12 variant="32x32_4" />,
                onClick: () =>
                  console.log("You have clicked Disk Defragmenter"),
              },
            },
          },
          games: {
            name: "Games",
            icon: <Progman1 variant="32x32_4" />,
            subItems: {
              minesweeper: {
                name: "Minesweeper",
                icon: <Progman1 variant="32x32_4" />,
                onClick: () => console.log("You have clicked Minesweeper"),
              },
              solitaire: {
                name: "Solitaire",
                icon: <Progman1 variant="32x32_4" />,
                onClick: () => console.log("You have clicked Solitaire"),
              },
            },
          },
          multimedia: {
            name: "Multimedia",
            icon: <McmEarth variant="32x32_4" />,
            onClick: () => console.log("You have clicked Multimedia"),
          },
          communications: {
            name: "Communications",
            icon: <McmEarth variant="32x32_4" />,
            onClick: () => console.log("You have clicked Communications"),
          },
        },
      },
      microsoft_exchange: {
        name: "Microsoft Exchange",
        icon: <MicrosoftExchange variant="16x16_4" />,
        onClick: () => console.log("You have clicked Microsoft Exchange"),
      },
      ms_dos_prompt: {
        name: "MS-DOS Prompt",
        icon: <MsDos variant="16x16_32" />,
        onClick: () => console.log("You have clicked MS-DOS Prompt"),
      },
      the_microsoft_network: {
        name: "The Microsoft Network",
        icon: <MicrosoftNetwork variant="16x16_4" />,
        onClick: () => console.log("You have clicked The Microsoft Network"),
      },
      windows_explorer: {
        name: "Windows Explorer",
        icon: <WindowsExplorer variant="16x16_4" />,
        onClick: () => console.log("You have clicked Windows Explorer"),
      },
    },
  },
  documents: {
    name: "Documents",
    icon: <FolderFile />,
    onClick: () => console.log("You have clicked Documents"),
  },
  settings: {
    name: "Settings",
    icon: <Settings />,
    subItems: {
      control_panel: {
        name: "Control Panel",
        icon: <FolderSettings variant="16x16_4" />,
        onClick: () => console.log("You have clicked Control Panel"),
      },
      printers: {
        name: "Printers",
        icon: <FolderPrint variant="16x16_4" />,
        onClick: () => console.log("You have clicked Printers"),
      },
      taskbar_start_menu: {
        name: "Taskbar & Start Menu",
        icon: <Progman12 variant="32x32_4" />,
        onClick: () => console.log("You have clicked Taskbar & Start Menu"),
      },
    },
  },
  find: {
    name: "Find",
    icon: <FileFind />,
    subItems: {
      files_folders: {
        name: "Files or Folders",
        icon: <Progman1 variant="32x32_4" />,
        onClick: () => console.log("You have clicked Find Files or Folders"),
      },
      computer: {
        name: "Computer",
        icon: <Main300 variant="16x16_4" />,
        onClick: () => console.log("You have clicked Find Computer"),
      },
    },
  },
  help: {
    name: "Help",
    icon: <HelpBook />,
    onClick: () => console.log("You have clicked Help"),
  },
  run: {
    name: "Run...",
    icon: <LoaderBat />,
    onClick: () => console.log("You have clicked Run..."),
  },
  shut_down: {
    name: "Shut Down...",
    icon: <Computer3 />,
    onClick: () => console.log("You have clicked Shut Down..."),
    isSectionDivider: true,
  },
};

export default startMenuConfig;
