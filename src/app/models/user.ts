import { Post } from "./post";

export interface User {
    id?: number;
    username: string; // Ensure this is always a string
    email: string; // Ensure this is always a string
    imageUrl: string; // Ensure this is always a string
    password?: string | null;
    role?: string;
    dob?: string;
    posts: Post[]; // Ensure this is always an array
    likedPostsCount: number; // Ensure this is always a number
  }
  
