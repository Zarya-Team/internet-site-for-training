import { createEvent, createStore } from 'effector';
import persist from 'effector-localstorage';

export type User = {
  id: string;
  email: string;
};

export const setUser = createEvent<User | null>();

export const $user = createStore<User | null>(null).on(
  setUser,
  (_, user) => user,
);

persist({
  key: 'user',
  store: $user,
});
