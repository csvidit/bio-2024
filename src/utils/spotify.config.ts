import { SpotifyWebApi } from "@spotify/web-api-ts-sdk";

// Choose one of the following:
const sdk = SpotifyApi.withUserAuthorization(
  "client-id",
  "https://localhost:3000",
  ["scope1", "scope2"],
);
const sdk = SpotifyApi.withClientCredentials("client-id", "secret", [
  "scope1",
  "scope2",
]);
