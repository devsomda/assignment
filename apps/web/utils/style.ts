/**
 * 클래스네임 조합 유틸리티 함수
 * @param classes - 클래스네임 배열
 * @returns 조합된 클래스네임
 */
export const combineClasses = (...classes: (string | undefined | false)[]): string => {
  return classes.filter(Boolean).join(" ");
};
