/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMember = /* GraphQL */ `
  mutation CreateMember(
    $input: CreateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    createMember(input: $input, condition: $condition) {
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
export const updateMember = /* GraphQL */ `
  mutation UpdateMember(
    $input: UpdateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    updateMember(input: $input, condition: $condition) {
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
export const deleteMember = /* GraphQL */ `
  mutation DeleteMember(
    $input: DeleteMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    deleteMember(input: $input, condition: $condition) {
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
export const createHorse = /* GraphQL */ `
  mutation CreateHorse(
    $input: CreateHorseInput!
    $condition: ModelHorseConditionInput
  ) {
    createHorse(input: $input, condition: $condition) {
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
export const updateHorse = /* GraphQL */ `
  mutation UpdateHorse(
    $input: UpdateHorseInput!
    $condition: ModelHorseConditionInput
  ) {
    updateHorse(input: $input, condition: $condition) {
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
export const deleteHorse = /* GraphQL */ `
  mutation DeleteHorse(
    $input: DeleteHorseInput!
    $condition: ModelHorseConditionInput
  ) {
    deleteHorse(input: $input, condition: $condition) {
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
export const createBarn = /* GraphQL */ `
  mutation CreateBarn(
    $input: CreateBarnInput!
    $condition: ModelBarnConditionInput
  ) {
    createBarn(input: $input, condition: $condition) {
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
export const updateBarn = /* GraphQL */ `
  mutation UpdateBarn(
    $input: UpdateBarnInput!
    $condition: ModelBarnConditionInput
  ) {
    updateBarn(input: $input, condition: $condition) {
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
export const deleteBarn = /* GraphQL */ `
  mutation DeleteBarn(
    $input: DeleteBarnInput!
    $condition: ModelBarnConditionInput
  ) {
    deleteBarn(input: $input, condition: $condition) {
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
