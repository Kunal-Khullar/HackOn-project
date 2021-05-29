import { gql } from "@apollo/client";
export const DEMO_QUERY = gql`
query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;
