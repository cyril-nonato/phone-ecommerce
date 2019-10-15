import { createSelector } from 'reselect';

const selectHome = state => state.home;

export const selectSections = createSelector(
  [selectHome],
  home => home.sections
);