import { ReactComponent as AbortIcon } from "../../../assets/icons/abort.svg";
import { ReactComponent as BinIcon } from "../../../assets/icons/bin.svg";
import { ReactComponent as CheckmarkIcon } from "../../../assets/icons/checkmark.svg";
import { ReactComponent as DotIcon } from "../../../assets/icons/dot.svg";
import { ReactComponent as FilterIcon } from "../../../assets/icons/filter.svg";
import { ReactComponent as LockedIcon } from "../../../assets/icons/locked.svg";
import { ReactComponent as MoonIcon } from "../../../assets/icons/moon.svg";
import { ReactComponent as PencilIcon } from "../../../assets/icons/pencil.svg";
import { ReactComponent as RefreshIcon } from "../../../assets/icons/refresh.svg";
import { ReactComponent as SearchIcon } from "../../../assets/icons/search.svg";
import { ReactComponent as SunIcon } from "../../../assets/icons/sun.svg";
import { ReactComponent as VArrowIcon } from "../../../assets/icons/v_arrow.svg";
import { ReactComponent as XMediumIcon } from "../../../assets/icons/x-medium.svg";

const ICONS = {
  abort: AbortIcon,
  bin: BinIcon,
  checkmark: CheckmarkIcon,
  dot: DotIcon,
  filter: FilterIcon,
  locked: LockedIcon,
  moon: MoonIcon,
  pencil: PencilIcon,
  refresh: RefreshIcon,
  search: SearchIcon,
  sun: SunIcon,
  arrow: VArrowIcon,
  close: XMediumIcon,
};

export const Icon = ({ name, className }) => {
  const Icon = ICONS[name];

  return <Icon className={className} />;
};
