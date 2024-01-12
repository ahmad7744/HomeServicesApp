import { request, gql } from 'graphql-request'

const MASTER_URL = "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clr54wep424zi01uqwww8bqag/master"
// slider from api 
const GetSlider = async () => {
  const query = gql`
    query GetSlider {
        sliders {
          id
          name
          image {
            url
          }
        }
      }
      
`
  const result = await request(MASTER_URL, query);
  return result;

}

const getCategoriess = async () => {
  const query = gql`
    query GetCategory {
        categories {
          id
          name
          icon {
            url
          }
        }
      }
      `

  const result = await request(MASTER_URL, query);
  return result;

}


const getBusinessList = async () => {
  const query = gql`
    query GetBusinessList {
        businessLists {
          id
          name
          email
          contactPerson
          category {
            name
          }
          address
          about
          image {
            url
          }
        }
      }`;

  const result = await request(MASTER_URL, query);
  return result;
}

const getBusinessListByCategory = async (category) => {
  const query = gql`
query GetBusinessList {
  businessLists(where: {category: {name: "`+ category + `"}}) {
    id
    name
    email
    contactPerson
    category {
      name
    }
    address
    about
    image {
      url
    }
  }
}
`
  const result = await request(MASTER_URL, query);
  return result;


}


const createBooking = async (data) => {
  const mutationQuery = gql`
  mutation createBooking {
    createBooking(
      data: {bookingStatus: Booked,
         bookings: {connect: {id: "`+ data.businessId + `"}},
          date: "`+ data.date + `",
           time: "`+ data.time + `", 
           userEmail: "`+ data.userEmail + `",
            userName: "`+ data.userName + `"}
    ) {
      id
    }
    publishManyBookings(to: PUBLISHED) {
      count
    }
  }
  `

  const result = await request(MASTER_URL, mutationQuery);
  return result;



}


const getUserBookings = async (userEmail) => {
  const query = gql`
  query GetUserBookings {
    bookings(orderBy: updatedAt_DESC,
      where: {userEmail: "`+userEmail+`"}) {
      time
      userEmail
      userName
      bookingStatus
      date
      id
      bookings {
        id
        image {
          url
        }
        name
        address
        contactPerson
        email
        about
      }
    }
  }
  `

  const result = await request(MASTER_URL, query);
  return result;

}


export default {
  GetSlider,
  getCategoriess,
  getBusinessList,
  getBusinessListByCategory,
  createBooking,
  getUserBookings

}