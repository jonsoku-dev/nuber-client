import { gql } from 'apollo-boost';

export const VERIFY_PHONE = gql`
  mutation VerifyPhone($key: String!, $phoneNumber: String!) {
    CompletePhoneVerification(key: $key, phoneNumber: $phoneNumber) {
      ok
      error
      token
    }
  }
`;
