import check from '../assets/svg/Check.svg';
import edit from '../assets/svg/Edit.svg';
import plus from '../assets/svg/Plus.svg';
import trash from '../assets/svg/Trash.svg';

export const iconsList = {
  check,
  edit,
  plus,
  trash,
};

export type IconName = keyof typeof iconsList;
