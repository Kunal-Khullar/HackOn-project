import { ApolloClient, createHttpLink } from "@apollo/client";
import { cache } from "./graphql/cache";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
});

const getToken = async () => {
  try {
    const value = await localStorage.getItem("@token");
    if (value) {
      return value;
    }
  } catch (err) {
    console.log(err);
  }
};

const authLink = setContext(async (_, { headers }) => {
  const token = await getToken();
  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});

export default client;
