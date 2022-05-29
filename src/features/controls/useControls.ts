import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { ControlsState, SelectOption } from './controls.types';
import { selectAllControls } from "./controlsSelectors";
import { setSearch } from "./controlsSlice";
import { setRegion } from "./controlsSlice";
import {Regions} from './controls.types';

type UseControls = [ControlsState, (search: string) => void, (region: SelectOption) => void];

export const useControls = (): UseControls => {
  const dispatch = useAppDispatch()
  const controls = useAppSelector(selectAllControls);

  const handleSearch = (search: string): void => {
    dispatch(setSearch(search));
  };

  const handleRegion = (region: SelectOption): void => {
    dispatch(setRegion(region?.value || Regions.All));
  };

  return [controls, handleSearch, handleRegion];
};
