export const Types = `
    type Member {
        id:         String  
        name:       String
        email:      String 
        phone:      Int
        profile:    String
    }
    
    input MemberFilter {
        name:        String
        categories:  String
    }
`;

export const Queries = `
    members(filter: MemberFilter): [Member]
    member(id: String): Member
`;

export const Mutations = `
    memberReview(orderNumber: String, review: String, rating: Float): Member
`;
