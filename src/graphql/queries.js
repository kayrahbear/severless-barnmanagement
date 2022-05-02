/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMember = /* GraphQL */ `
  query GetMember($id: ID!) {
    getMember(id: $id) {
      id
      first_name
      last_name
      contact_number
      email
      Horses {
        items {
          id
          owner
          sex
          birth_year
          breed
          is_show_horse
          short_name
          is_lesson_horse
          rider_experience_level
          horse_img
          show_name
          createdAt
          updatedAt
        }
        nextToken
      }
      barn
      createdAt
      updatedAt
    }
  }
`;
export const listMembers = /* GraphQL */ `
  query ListMembers(
    $filter: ModelMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        first_name
        last_name
        contact_number
        email
        Horses {
          nextToken
        }
        barn
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getHorse = /* GraphQL */ `
  query GetHorse($id: ID!) {
    getHorse(id: $id) {
      id
      owner
      sex
      birth_year
      breed
      is_show_horse
      short_name
      is_lesson_horse
      rider_experience_level
      horse_img
      show_name
      createdAt
      updatedAt
    }
  }
`;
export const listHorses = /* GraphQL */ `
  query ListHorses(
    $filter: ModelHorseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHorses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        sex
        birth_year
        breed
        is_show_horse
        short_name
        is_lesson_horse
        rider_experience_level
        horse_img
        show_name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBarn = /* GraphQL */ `
  query GetBarn($id: ID!) {
    getBarn(id: $id) {
      id
      name
      phone
      Members {
        items {
          id
          first_name
          last_name
          contact_number
          email
          barn
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBarns = /* GraphQL */ `
  query ListBarns(
    $filter: ModelBarnFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBarns(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        phone
        Members {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
