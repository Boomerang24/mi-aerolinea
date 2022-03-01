import { types } from "../types";

export type UiAction = { type: string };

export const uiOpenModal = () => ({ type: types.uiOpenModal });

export const uiCloseModal = () => ({ type: types.uiCloseModal });
