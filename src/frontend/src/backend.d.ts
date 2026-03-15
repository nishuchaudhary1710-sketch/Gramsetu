import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface SuccessStory {
    id: bigint;
    title: string;
    sdgTags: Array<string>;
    story: string;
    location: string;
}
export interface Scheme {
    id: bigint;
    applyLink: string;
    name: string;
    eligibility: string;
    category: SchemeCategory;
    benefits: string;
}
export interface PlatformStats {
    totalSchemes: bigint;
    totalUpvotes: bigint;
    totalPosts: bigint;
    totalStories: bigint;
}
export interface UserProfile {
    name: string;
}
export interface CommunityPost {
    id: bigint;
    upvotes: bigint;
    resolved: boolean;
    title: string;
    description: string;
    category: PostCategory;
    location: string;
}
export enum PostCategory {
    womenEmpowerment = "womenEmpowerment",
    education = "education",
    infrastructure = "infrastructure",
    agriculture = "agriculture",
    digitalAccess = "digitalAccess",
    health = "health"
}
export enum SchemeCategory {
    finance = "finance",
    education = "education",
    employment = "employment",
    women = "women",
    agriculture = "agriculture",
    health = "health"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    addScheme(name: string, category: SchemeCategory, eligibility: string, benefits: string, applyLink: string): Promise<bigint>;
    addSuccessStory(title: string, story: string, location: string, sdgTags: Array<string>): Promise<bigint>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getAllCommunityPosts(): Promise<Array<CommunityPost>>;
    getAllSchemes(): Promise<Array<Scheme>>;
    getAllSuccessStories(): Promise<Array<SuccessStory>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getPlatformStats(): Promise<PlatformStats>;
    getPostsByCategory(category: PostCategory): Promise<Array<CommunityPost>>;
    getSchemesByCategory(category: SchemeCategory): Promise<Array<Scheme>>;
    getTopUpvotedPosts(limit: bigint): Promise<Array<CommunityPost>>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    initialize(): Promise<void>;
    isCallerAdmin(): Promise<boolean>;
    markPostAsResolved(postId: bigint): Promise<void>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    submitCommunityPost(title: string, description: string, location: string, category: PostCategory): Promise<bigint>;
    upvotePost(postId: bigint): Promise<void>;
}
