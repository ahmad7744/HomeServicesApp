import { request, gql } from 'graphql-request'

const MASTER_URL = "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clr54wep424zi01uqwww8bqag/master"

const GetSlider = async () =>{
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

export default{
    GetSlider
}