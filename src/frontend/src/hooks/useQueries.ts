import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type {
  CommunityPost,
  PlatformStats,
  Scheme,
  SuccessStory,
} from "../backend";
import { PostCategory, SchemeCategory } from "../backend";
import { useActor } from "./useActor";

export function useGetAllSchemes() {
  const { actor, isFetching } = useActor();
  return useQuery<Scheme[]>({
    queryKey: ["schemes"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllSchemes();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetSchemesByCategory(category: SchemeCategory | null) {
  const { actor, isFetching } = useActor();
  return useQuery<Scheme[]>({
    queryKey: ["schemes", category],
    queryFn: async () => {
      if (!actor) return [];
      if (!category) return actor.getAllSchemes();
      return actor.getSchemesByCategory(category);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAllCommunityPosts() {
  const { actor, isFetching } = useActor();
  return useQuery<CommunityPost[]>({
    queryKey: ["posts"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllCommunityPosts();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetPostsByCategory(category: PostCategory | null) {
  const { actor, isFetching } = useActor();
  return useQuery<CommunityPost[]>({
    queryKey: ["posts", category],
    queryFn: async () => {
      if (!actor) return [];
      if (!category) return actor.getAllCommunityPosts();
      return actor.getPostsByCategory(category);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAllSuccessStories() {
  const { actor, isFetching } = useActor();
  return useQuery<SuccessStory[]>({
    queryKey: ["stories"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllSuccessStories();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetPlatformStats() {
  const { actor, isFetching } = useActor();
  return useQuery<PlatformStats>({
    queryKey: ["stats"],
    queryFn: async () => {
      if (!actor)
        return {
          totalSchemes: 0n,
          totalUpvotes: 0n,
          totalPosts: 0n,
          totalStories: 0n,
        };
      return actor.getPlatformStats();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useIsCallerAdmin() {
  const { actor, isFetching } = useActor();
  return useQuery<boolean>({
    queryKey: ["isAdmin"],
    queryFn: async () => {
      if (!actor) return false;
      return actor.isCallerAdmin();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitCommunityPost() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      title,
      description,
      location,
      category,
    }: {
      title: string;
      description: string;
      location: string;
      category: PostCategory;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitCommunityPost(title, description, location, category);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
}

export function useUpvotePost() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (postId: bigint) => {
      if (!actor) throw new Error("Not connected");
      return actor.upvotePost(postId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
}

export function useMarkPostResolved() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (postId: bigint) => {
      if (!actor) throw new Error("Not connected");
      return actor.markPostAsResolved(postId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
}

export { PostCategory, SchemeCategory };
