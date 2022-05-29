import { useEffect } from "react";
import { loadNeighborsByBorder } from "./detailsThunks";
import { selectCountryNeighbors } from "./detailsSelectors";
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';

export const useNeighbors = (borders: string[]) => {
  const dispatch = useAppDispatch();
  const neighbors = useAppSelector(selectCountryNeighbors);

  useEffect(() => {
    if (borders.length) {
      dispatch(loadNeighborsByBorder(borders));
    }
  }, [dispatch, borders]);

  return neighbors;
};
