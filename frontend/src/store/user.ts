import { createEvent, createStore } from 'effector';
import persist from 'effector-localstorage';

export type Token = {
  access_token: string;
  token_type: string;
};

export const setToken = createEvent<Token | null>();

export const $token = createStore<Token | null>(null).on(
  setToken,
  (_, token) => token,
);

persist({
  key: 'token',
  store: $token,
});
