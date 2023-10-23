export interface ProductInfo {
    currentUser: {
        image: string;
        name: string;
        username: string;
    }
    productRequests: ProductReqList[];
}

export interface ProductReqList{
    id: number;
    title: string;
    category: string;
    upvotes: number;
    status: string;
    description: string;
    comments: CommentList[]
}

interface CommentList {
    id: number;
    content: string;
    user: {
        image: string;
        name: string;
        username: string;
    }
}