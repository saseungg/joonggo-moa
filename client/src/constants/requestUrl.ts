const BASE_URL = 'http://15.164.155.100:8080';

const REQUEST_URL = {
  REGIONS: `${BASE_URL}/regions`,
  USERS: `${BASE_URL}/users`,
  USER_REGIONS: `${BASE_URL}/users/regions`,
  POSTS: `${BASE_URL}/posts`,
  POST_OF_INTEREST: `${BASE_URL}/posts/interests`,
  BADGES: `${BASE_URL}/posts/badges`,
  CATEGORY: `${BASE_URL}/categories`,
  CATEGORY_RECOMMENDS: `${BASE_URL}/categories/recommended`,
  OAUTH: `${BASE_URL}/oauth`,
  CHAT_ROOMS: `http://localhost:4000/chat-rooms`,
} as const;

export { REQUEST_URL };
