export type DynamicType<T> = {
  [P in keyof T]: T[P];
};
