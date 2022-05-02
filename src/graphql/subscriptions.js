/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMember = /* GraphQL */ `
  subscription OnCreateMember {
    onCreateMember {
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
export const onUpdateMember = /* GraphQL */ `
  subscription OnUpdateMember {
    onUpdateMember {
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
export const onDeleteMember = /* GraphQL */ `
  subscription OnDeleteMember {
    onDeleteMember {
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
export const onCreateHorse = /* GraphQL */ `
  subscription OnCreateHorse {
    onCreateHorse {
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
export const onUpdateHorse = /* GraphQL */ `
  subscription OnUpdateHorse {
    onUpdateHorse {
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
export const onDeleteHorse = /* GraphQL */ `
  subscription OnDeleteHorse {
    onDeleteHorse {
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
export const onCreateBarn = /* GraphQL */ `
  subscription OnCreateBarn {
    onCreateBarn {
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
export const onUpdateBarn = /* GraphQL */ `
  subscription OnUpdateBarn {
    onUpdateBarn {
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
export const onDeleteBarn = /* GraphQL */ `
  subscription OnDeleteBarn {
    onDeleteBarn {
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
