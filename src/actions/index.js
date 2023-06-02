export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export  const CE="CE Clear Display";

export const MEMORY_PLUS="MEMORY_PLUS hafızaya at";
export const MEMORY_RECORD="MEMORY_RECAL hafızadaki değeri ekrandaki ile toplar";
export const MEMORY_CLEAR="MEMORY_CLEAR hafızayı temizle";

export const addOne = () => {
  return ({ type: ADD_ONE });
}

export const applyNumber = (number) => {
  return ({ type: APPLY_NUMBER, payload: Number(number) });
}

export const changeOperation = (operation) => {
  return ({ type: CHANGE_OPERATION, payload: operation });
}