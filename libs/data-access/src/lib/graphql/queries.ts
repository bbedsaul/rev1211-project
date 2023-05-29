import { gql } from 'apollo-angular';

export const LOGIN_MUTATION = gql`
  mutation Login($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
      user {
        id
        email
        confirmed
        blocked
      }
    }
  }
`;

export const ALL_USERS = gql`
  query Users {
    users {
      username
      email
    }
  }
`;

export const UPDATE_STICKY = gql`
  mutation UpdateSticky($input: updateStickyInput) {
    updateSticky(input: $input) {
      sticky {
        id
        name
        points
        order
        category {
          id
          name
          color
        }
        description
        status
        sprint {
          name
          id
        }
        sprinter {
          id
          firstname
          lastname
          user {
            id
            email
          }
          todo: stickies(sort: "order:asc", where: { status: "todo" }) {
            id
            name
            description
            points
            status
            method
            icon
            order
            category {
              name
              color
            }
          }
          doing: stickies(sort: "order:asc", where: { status: "doing" }) {
            id
            name
            description
            points
            status
            method
            icon
            order
            category {
              name
              color
            }
          }
          completed: stickies(
            sort: "order:asc"
            where: { status: "completed" }
          ) {
            id
            name
            description
            points
            status
            method
            icon
            order
            category {
              name
              color
            }
          }
        }
      }
    }
  }
`;

export const CREATE_STICKY = gql`
  mutation CreateSticky($input: createStickyInput) {
    createSticky(input: $input) {
      sticky {
        id
        name
        points
        order
        category {
          id
          name
          color
        }
        description
        status
        sprint {
          name
          id
        }
        sprinter {
          id
          firstname
          lastname
          user {
            id
            email
          }
          todo: stickies(sort: "order:asc", where: { status: "todo" }) {
            id
            name
            description
            points
            status
            order
          }
          doing: stickies(sort: "order:asc", where: { status: "doing" }) {
            id
            name
            description
            points
            status
            order
          }
          completed: stickies(
            sort: "order:asc"
            where: { status: "completed" }
          ) {
            id
            name
            description
            points
            status
            order
          }
        }
      }
    }
  }
`;

export const GET_WHITEBOARD = gql`
  query GetSprint($sprintid: ID!) {
    sprint(id: $sprintid) {
      id
      name
      updatedAt
      sprinters {
        id
        firstname
        lastname
        user {
          id
          email
        }
        todo: stickies(sort: "order:asc", where: { status: "todo" }) {
          id
          name
          description
          points
          order
          method
          icon
          category {
            name
            color
          }
          status
        }
        doing: stickies(sort: "order:asc", where: { status: "doing" }) {
          id
          name
          description
          points
          order
          method
          icon
          category {
            name
            color
          }
          status
        }
        completed: stickies(sort: "order:asc", where: { status: "completed" }) {
          id
          name
          description
          points
          order
          method
          icon
          category {
            name
            color
          }
          status
        }
      }
    }
  }
`;

export const GET_USER = gql`
  query User($input: ID!) {
    user(id: $input) {
      id
      username
      email
      sprinter {
        id
        sprints {
          id
          name
        }
      }
    }
  }
`;

export const GET_STICKIES = gql`
  query GetStickies($input: JSON) {
    stickies(where: $input) {
      id
      name
      points
      description
      status
      updatedAt
    }
  }
`;

export const GET_DEFAULT_STICKIES = gql`
  query DefaultStickies {
    defaultStickies {
      id
      createdAt
      updatedAt
      name
      description
      points
      method
      icon
      category {
        id
        name
        color
      }
    }
  }
`;

export const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      id
      createdAt
      updatedAt
      name
      color
    }
  }
`;

export const GET_STICKY_ACTIVITY_LOGS = gql`
  query GetStickyActivityLogs($input: JSON!) {
    stickyActivityLogs(where: $input) {
      id
      sticky {
        id
        name
        description
      }
      activity
      details
      createdAt
      updatedAt
    }
  }
`;

export const GET_STICKY_ACTIVITY = gql`
  query GetStickyActivity($input: ID!) {
    stickyActivityLog(id: $input) {
      id
      sticky {
        id
        name
        description
      }
      activity
      details
      createdAt
      updatedAt
    }
  }
`;

export const GET_SPRINT_ACTIVITY_LOGS = gql`
  query GetSprintActivityLogs($input: JSON!) {
    sprintActivityLogs(sort: "createdAt:desc", where: $input) {
      id
      sprint {
        id
        name
        description
      }
      activity
      sprintno
      detail
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_STICKY_ACTIVITY_LOG = gql`
  mutation CreateStickyActivityLog($input: createStickyActivityLogInput) {
    createStickyActivityLog(input: $input) {
      stickyActivityLog {
        id
        activity
        details
        createdAt
        sticky {
          id
          name
          description
          order
          points
          method
          category {
            id
            name
            color
          }
        }
      }
    }
  }
`;

export const CREATE_SPRINT_ACTIVITY_LOG = gql`
  mutation CreateSprintActivityLog($input: createSprintActivityLogInput) {
    createSprintActivityLog(input: $input) {
      sprintActivityLog {
        id
        activity
        sprintno
        detail
        createdAt
        updatedAt
        sprint {
          id
          name
          description
          createdAt
          sprinters {
            id
            firstname
            lastname
            displayname
          }
        }
      }
    }
  }
`;

export const GET_ALL_NEXT_SPRINT = gql`
  query GetAllNextSprint($sprintid: ID!) {
    sprint(id: $sprintid) {
      id
      name
      updatedAt
      sprinters {
        id
        firstname
        lastname
        next_stickies {
          id
          default_sticky {
            id
            name
            description
            points
            category {
              name
              color
            }
            method
            icon
          }
          sprint {
            id
            name
          }
          sprinter {
            id
            lastname
            firstname
          }
        }
        user {
          id
          email
        }
      }
    }
  }
`;

export const GET_NEXT_SPRINT = gql`
  query GetNextSprint($sprintid: ID!, $sprinterid: ID!) {
    sprint(id: $sprintid) {
      id
      name
      updatedAt
      sprinters(where: { id: $sprinterid }) {
        id
        firstname
        lastname
        next_stickies {
          id
          default_sticky {
            name
            description
            points
            category {
              name
              color
            }
            method
            icon
          }
          sprint {
            id
            name
          }
          sprinter {
            lastname
            firstname
          }
        }
        user {
          id
          email
        }
      }
    }
  }
`;

export const CREATE_NEXT_STICKY = gql`
  mutation CreateNextSticky($input: createNextStickyInput) {
    createNextSticky(input: $input) {
      nextSticky {
        id
        default_sticky {
          name
          description
          points
          category {
            name
            color
          }
          method
          icon
        }
        sprint {
          id
          name
        }
        sprinter {
          id
          lastname
          firstname
          next_stickies {
            id
            default_sticky {
              name
              description
              points
              category {
                name
                color
              }
              method
              icon
            }
            sprint {
              id
              name
            }
            sprinter {
              lastname
              firstname
            }
          }
        }
      }
    }
  }
`;

export const GET_CURRENT_SPRINT = gql`
  query GetCurrentSprint($sprintid: ID!, $lowdate: String!) {
    sprint(id: $sprintid) {
      id
      name
      updatedAt
      sprinters {
        id
        firstname
        lastname
        user {
          id
          email
        }
        todo: stickies(
          sort: "order:asc"
          where: { status: "todo", updatedAt_gte: $lowdate }
        ) {
          id
          name
          description
          points
          order
          method
          updatedAt
          icon
          category {
            name
            color
          }
          status
        }
        doing: stickies(
          sort: "order:asc"
          where: { status: "doing", updatedAt_gte: $lowdate }
        ) {
          id
          name
          description
          points
          order
          method
          updatedAt
          icon
          category {
            name
            color
          }
          status
        }
        completed: stickies(
          sort: "order:asc"
          where: { status: "completed", updatedAt_gte: $lowdate }
        ) {
          id
          name
          description
          points
          order
          method
          updatedAt
          icon
          category {
            name
            color
          }
          status
        }
      }
    }
  }
`;

export const GET_CURRENT_SPRINT_DATE = gql`
  query GetCurrentSprint($sprintid: ID!, $lowdate: Date!) {
    sprint(id: $sprintid) {
      id
      name
      updatedAt
      sprinters {
        id
        firstname
        lastname
        user {
          id
          email
        }
        todo: stickies(
          sort: "order:asc"
          where: { status: "todo", updatedAt_gte: $lowdate }
        ) {
          id
          name
          description
          points
          order
          method
          updatedAt
          icon
          category {
            name
            color
          }
          status
        }
        doing: stickies(
          sort: "order:asc"
          where: { status: "doing", updatedAt_gte: $lowdate }
        ) {
          id
          name
          description
          points
          order
          method
          updatedAt
          icon
          category {
            name
            color
          }
          status
        }
        completed: stickies(
          sort: "order:asc"
          where: { status: "completed", updatedAt_gte: $lowdate }
        ) {
          id
          name
          description
          points
          order
          method
          updatedAt
          icon
          category {
            name
            color
          }
          status
        }
      }
    }
  }
`;

export const DELETE_NEXT_STICKY = gql`
  mutation DeleteNextSticky($input: deleteNextStickyInput) {
    deleteNextSticky(input: $input) {
      nextSticky {
        id
      }
    }
  }
`;

export const GET_HISTORY_SPRINT = gql`
  query GetHistorySprint(
    $sprintid: ID!
    $lowdate: String!
    $highdate: String!
  ) {
    sprint(id: $sprintid) {
      id
      name
      updatedAt
      sprinters {
        id
        firstname
        lastname
        user {
          id
          email
        }
        todo: stickies(
          sort: "order:asc"
          where: {
            status: "todo"
            updatedAt_gte: $lowdate
            updatedAt_lte: $highdate
          }
        ) {
          id
          name
          description
          points
          order
          method
          updatedAt
          icon
          category {
            name
            color
          }
          status
        }
        doing: stickies(
          sort: "order:asc"
          where: { status: "doing",
                   updatedAt_gte: $lowdate,
                   updatedAt_lte: $highdate }
        ) {
          id
          name
          description
          points
          order
          method
          updatedAt
          icon
          category {
            name
            color
          }
          status
        }
        completed: stickies(
          sort: "order:asc"
          where: { status: "completed",
                   updatedAt_gte: $lowdate,
                   updatedAt_lte: $highdate }
        ) {
          id
          name
          description
          points
          order
          method
          updatedAt
          icon
          category {
            name
            color
          }
          status
        }
      }
    }
  }
`;
