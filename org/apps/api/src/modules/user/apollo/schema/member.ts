export const Types = `
    type Member {
        id:         String  
        username:   String
        email:      String 
        phone:      Int
        age:        Int
        balance:    Int
        remainingtime: String

    }

    type Admin {
        id:         String  
        username:   String
    }   
    
    input MemberFilter {
        username:        String
        email:           String
        phone:           Int
    }

    input memberInput {
        username:   String
        email:      String
        phone:      Int
        age:        Int
        balance:    Int
    }
`;

export const Queries = `
    members(filter: MemberFilter): [Member]
    member(id: String): Member
`;

export const Mutations = `
    memberReview(input: memberInput): Member
`;
