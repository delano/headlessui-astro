// Export Menu components
import MenuComponent from './components/menu/Menu.astro';
import MenuLoadComponent from './components/menu/Menu.load.astro';
import MenuButtonComponent from './components/menu/MenuButton.astro';
import MenuItemsComponent from './components/menu/MenuItems.astro';
import MenuItemComponent from './components/menu/MenuItem.astro';
import MenuSectionComponent from './components/menu/MenuSection.astro';
import MenuHeadingComponent from './components/menu/MenuHeading.astro';
import MenuSeparatorComponent from './components/menu/MenuSeparator.astro';

export const Menu = MenuComponent;
export const MenuLoad = MenuLoadComponent;
export const MenuButton = MenuButtonComponent;
export const MenuItems = MenuItemsComponent;
export const MenuItem = MenuItemComponent;
export const MenuSection = MenuSectionComponent;
export const MenuHeading = MenuHeadingComponent;
export const MenuSeparator = MenuSeparatorComponent;

// Export Dialog components
export { default as Dialog } from './components/dialog/Dialog.astro';
export { default as DialogLoad } from './components/dialog/Dialog.load.astro';
export { default as DialogPanel } from './components/dialog/DialogPanel.astro';
export { default as DialogTitle } from './components/dialog/DialogTitle.astro';
export { default as DialogDescription } from './components/dialog/DialogDescription.astro';

// Export Disclosure components
export { default as Disclosure } from './components/disclosure/Disclosure.astro';
export { default as DisclosureLoad } from './components/disclosure/Disclosure.load.astro';
export { default as DisclosureButton } from './components/disclosure/DisclosureButton.astro';
export { default as DisclosurePanel } from './components/disclosure/DisclosurePanel.astro';

// Export Listbox components
export { default as Listbox } from './components/listbox/Listbox.astro';
export { default as ListboxLoad } from './components/listbox/Listbox.load.astro';
export { default as ListboxButton } from './components/listbox/ListboxButton.astro';
export { default as ListboxOptions } from './components/listbox/ListboxOptions.astro';
export { default as ListboxOption } from './components/listbox/ListboxOption.astro';
export { default as ListboxLabel } from './components/listbox/ListboxLabel.astro';

// Export Combobox components
export { default as Combobox } from './components/combobox/Combobox.astro';
export { default as ComboboxLoad } from './components/combobox/Combobox.load.astro';
export { default as ComboboxInput } from './components/combobox/ComboboxInput.astro';
export { default as ComboboxButton } from './components/combobox/ComboboxButton.astro';
export { default as ComboboxOptions } from './components/combobox/ComboboxOptions.astro';
export { default as ComboboxOption } from './components/combobox/ComboboxOption.astro';
export { default as ComboboxLabel } from './components/combobox/ComboboxLabel.astro';

// Export types
export type {
  // Base types
  BaseProps,
  HydrationProps,
} from './types/common';

// Menu types
export type {
  MenuProps, 
  MenuButtonProps, 
  MenuItemsProps, 
  MenuItemProps,
  MenuSectionProps,
  MenuHeadingProps,
  MenuSeparatorProps,
} from './types/menu';

// Dialog types
export type {
  DialogProps,
  DialogPanelProps,
  DialogTitleProps,
  DialogDescriptionProps,
} from './types/dialog';

// Disclosure types
export type {
  DisclosureProps,
  DisclosureButtonProps,
  DisclosurePanelProps,
} from './types/disclosure';

// Listbox types
export type {
  ListboxProps,
  ListboxButtonProps,
  ListboxOptionsProps,
  ListboxOptionProps,
  ListboxLabelProps,
} from './types/listbox';

// Combobox types
export type {
  ComboboxProps,
  ComboboxInputProps,
  ComboboxButtonProps,
  ComboboxOptionsProps,
  ComboboxOptionProps,
  ComboboxLabelProps,
  ComboboxGroupProps,
  ComboboxGroupLabelProps,
  ComboboxEmptyStateProps,
} from './types/combobox';

// Tabs types
export type {
  TabGroupProps,
  TabListProps,
  TabProps,
  TabPanelsProps,
  TabPanelProps,
} from './types/tabs';

// RadioGroup types
export type {
  RadioGroupProps,
  RadioGroupLabelProps,
  RadioGroupOptionProps,
  RadioGroupDescriptionProps,
} from './types/radiogroup';

// Switch types
export type {
  SwitchProps,
  SwitchGroupProps,
  SwitchLabelProps,
  SwitchDescriptionProps,
} from './types/switch';

// Popover types
export type {
  PopoverProps,
  PopoverButtonProps,
  PopoverPanelProps,
  PopoverGroupProps,
} from './types/popover';

// Export Tabs components
export { default as TabGroup } from './components/tabs/TabGroup.astro';
export { default as TabGroupLoad } from './components/tabs/TabGroup.load.astro';
export { default as TabList } from './components/tabs/TabList.astro';
export { default as Tab } from './components/tabs/Tab.astro';
export { default as TabPanels } from './components/tabs/TabPanels.astro';
export { default as TabPanel } from './components/tabs/TabPanel.astro';

// Export RadioGroup components
export { default as RadioGroup } from './components/radiogroup/RadioGroup.astro';
export { default as RadioGroupLoad } from './components/radiogroup/RadioGroup.load.astro';
export { default as RadioGroupLabel } from './components/radiogroup/RadioGroupLabel.astro';
export { default as RadioGroupOption } from './components/radiogroup/RadioGroupOption.astro';
export { default as RadioGroupDescription } from './components/radiogroup/RadioGroupDescription.astro';

// Export Switch components
export { default as Switch } from './components/switch/Switch.astro';
export { default as SwitchLoad } from './components/switch/Switch.load.astro';
export { default as SwitchGroup } from './components/switch/SwitchGroup.astro';
export { default as SwitchLabel } from './components/switch/SwitchLabel.astro';
export { default as SwitchDescription } from './components/switch/SwitchDescription.astro';

// Export Popover components
export { default as Popover } from './components/popover/Popover.astro';
export { default as PopoverLoad } from './components/popover/Popover.load.astro';
export { default as PopoverButton } from './components/popover/PopoverButton.astro';
export { default as PopoverPanel } from './components/popover/PopoverPanel.astro';
export { default as PopoverGroup } from './components/popover/PopoverGroup.astro';