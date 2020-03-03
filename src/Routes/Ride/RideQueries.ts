import { gql } from 'apollo-boost';

export const GET_RIDE = gql`
  query GetRide($rideId: Int!) {
    GetRide(rideId: $rideId) {
      ok
      error
      ride {
        id
        status
        pickUpAddress
        dropOffAddress
        price
        distance
        duration
        driver {
          id
          fullName
          profilePhoto
        }
        passenger {
          id
          fullName
          profilePhoto
        }
        chatId
      }
    }
  }
`;

export const RIDE_SUBSCRIPTION = gql`
  subscription RideUpdates {
    RideStatusSubscription {
      id
      status
      pickUpAddress
      dropOffAddress
      price
      distance
      duration
      driver {
        id
        fullName
        profilePhoto
      }
      passenger {
        id
        fullName
        profilePhoto
      }
      chatId
    }
  }
`;

export const UPDATE_RIDE_STATUS = gql`
  mutation UpdateRide($rideId: Int!, $status: StatusOptions!) {
    UpdateRideStatus(rideId: $rideId, status: $status) {
      ok
      error
      rideId
    }
  }
`;
