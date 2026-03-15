import Set "mo:core/Set";
import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Text "mo:core/Text";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import AccessControl "authorization/access-control";
import MixinAuthorization "authorization/MixinAuthorization";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  /////////////////// User Profile Types ///////////////////

  public type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  /////////////////// Core Types ///////////////////

  // Community Voice Board Types
  public type PostCategory = {
    #infrastructure;
    #health;
    #education;
    #womenEmpowerment;
    #agriculture;
    #digitalAccess;
  };

  public type CommunityPost = {
    id : Nat;
    title : Text;
    description : Text;
    location : Text; // Village/District
    category : PostCategory;
    upvotes : Nat;
    resolved : Bool;
  };

  // Government Schemes Types
  public type SchemeCategory = {
    #agriculture;
    #women;
    #health;
    #education;
    #finance;
    #employment;
  };

  public type Scheme = {
    id : Nat;
    name : Text;
    category : SchemeCategory;
    eligibility : Text;
    benefits : Text;
    applyLink : Text;
  };

  // Success Stories Types
  public type SuccessStory = {
    id : Nat;
    title : Text;
    story : Text;
    location : Text;
    sdgTags : [Text];
  };

  // Platform Stats Type
  public type PlatformStats = {
    totalPosts : Nat;
    totalUpvotes : Nat;
    totalSchemes : Nat;
    totalStories : Nat;
  };

  module CommunityPost {
    public func compare(a : CommunityPost, b : CommunityPost) : Order.Order {
      Nat.compare(a.upvotes, b.upvotes);
    };
  };

  /////////////////// Data Structures ///////////////////

  var nextPostId = 1;
  var nextSchemeId = 1;
  var nextStoryId = 1;

  let communityPosts = Map.empty<Nat, CommunityPost>();
  let postsUpvoters = Map.empty<Nat, Set.Set<Principal>>();
  let schemes = Map.empty<Nat, Scheme>();
  let successStories = Map.empty<Nat, SuccessStory>();

  /////////////////// User Profile Functions ///////////////////

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  ///////////////// Initialize Seed Data /////////////////

  public shared ({ caller }) func initialize() : async () {
    // Only allow admin to call
    if (caller.toText() == "2vxsx-fae") {
      Runtime.trap("Anonymous principal cannot initialize");
    };

    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admin can initialize");
    };

    // Seed Government Schemes
    let initialSchemes = [
      ("PM-KISAN", #agriculture, "Small & marginal farmers", "₹6,000 annual benefit", "https://pmkisan.gov.in/"),
      ("MNREGA", #employment, "Rural households", "100 days guaranteed employment", "https://nrega.nic.in/"),
      (
        "Beti Bachao Beti Padhao",
        #women,
        "All citizens",
        "Promotes girl child education",
        "https://wcd.nic.in/bbbp-schemes"
      ),
      (
        "Jan Dhan Yojana",
        #finance,
        "Financially excluded",
        "Zero balance bank account",
        "https://pmjdy.gov.in/"
      ),
      ("PM Awas Yojana", #women, "Rural & urban poor", "Affordable housing", "https://pmaymis.gov.in/"),
      ("Skill India", #employment, "Youth", "Skill development programs", "https://skillindia.gov.in/"),
      (
        "Digital India",
        #employment,
        "All citizens",
        "Digital literacy & connectivity",
        "https://digitalindiamission.gov.in/"
      ),
      (
        "Pradhan Mantri Fasal Bima Yojana",
        #agriculture,
        "Farmers",
        "Crop insurance scheme",
        "https://pmfby.gov.in/"
      ),
    ];

    for ((name, category, eligibility, benefits, link) in initialSchemes.values()) {
      let scheme : Scheme = {
        id = nextSchemeId;
        name;
        category;
        eligibility;
        benefits;
        applyLink = link;
      };
      schemes.add(nextSchemeId, scheme);
      nextSchemeId += 1;
    };

    // Seed Success Stories
    let initialStories = [
      (
        "Water Conservation in Maharashtra",
        "A village transformed by rainwater harvesting, leading to abundant crops and reduced migration.",
        "Maharashtra",
        ["SDG 6", "SDG 2"],
      ),
      (
        "Women-led Dairy Cooperative",
        "Rural women established a successful dairy business, boosting income and community confidence.",
        "Gujarat",
        ["SDG 5", "SDG 8"],
      ),
      (
        "Digital Literacy Drive",
        "A remote village achieved 90% digital literacy, improving access to services and education.",
        "Uttarakhand",
        ["SDG 9", "SDG 4"],
      ),
    ];

    for ((title, story, location, sdgTags) in initialStories.values()) {
      let successStory : SuccessStory = {
        id = nextStoryId;
        title;
        story;
        location;
        sdgTags;
      };
      successStories.add(nextStoryId, successStory);
      nextStoryId += 1;
    };
  };

  /////////////////// Community Voice Board Functions ///////////////////

  public shared ({ caller }) func submitCommunityPost(title : Text, description : Text, location : Text, category : PostCategory) : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can submit community posts");
    };

    let post : CommunityPost = {
      id = nextPostId;
      title;
      description;
      location;
      category;
      upvotes = 0;
      resolved = false;
    };

    communityPosts.add(nextPostId, post);
    postsUpvoters.add(nextPostId, Set.empty<Principal>());
    nextPostId += 1;
    post.id;
  };

  public shared ({ caller }) func upvotePost(postId : Nat) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can upvote posts");
    };

    let post = switch (communityPosts.get(postId)) {
      case (?found) { found };
      case (null) { Runtime.trap("Post not found") };
    };

    let upvoters = switch (postsUpvoters.get(postId)) {
      case (?set) { set };
      case (null) { Set.empty<Principal>() };
    };

    if (upvoters.contains(caller)) {
      Runtime.trap("You have already upvoted this post");
    };

    upvoters.add(caller);
    postsUpvoters.add(postId, upvoters);

    let updatedPost : CommunityPost = {
      id = post.id;
      title = post.title;
      description = post.description;
      location = post.location;
      category = post.category;
      upvotes = post.upvotes + 1;
      resolved = post.resolved;
    };

    communityPosts.add(postId, updatedPost);
  };

  public shared ({ caller }) func markPostAsResolved(postId : Nat) : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admin can mark posts as resolved");
    };

    let post = switch (communityPosts.get(postId)) {
      case (?found) { found };
      case (null) { Runtime.trap("Post not found") };
    };

    let updatedPost : CommunityPost = {
      id = post.id;
      title = post.title;
      description = post.description;
      location = post.location;
      category = post.category;
      upvotes = post.upvotes;
      resolved = true;
    };

    communityPosts.add(postId, updatedPost);
  };

  public query func getAllCommunityPosts() : async [CommunityPost] {
    communityPosts.values().toArray();
  };

  public query func getPostsByCategory(category : PostCategory) : async [CommunityPost] {
    communityPosts.values().toArray().filter(func(post) { post.category == category });
  };

  public query func getTopUpvotedPosts(limit : Nat) : async [CommunityPost] {
    let all = communityPosts.values().toArray();
    let sorted = all.sort();
    sorted.sliceToArray(0, limit);
  };

  /////////////////// Government Schemes Functions ///////////////////

  public query func getAllSchemes() : async [Scheme] {
    schemes.values().toArray();
  };

  public query func getSchemesByCategory(category : SchemeCategory) : async [Scheme] {
    schemes.values().toArray().filter(func(scheme) { scheme.category == category });
  };

  public shared ({ caller }) func addScheme(
    name : Text,
    category : SchemeCategory,
    eligibility : Text,
    benefits : Text,
    applyLink : Text,
  ) : async Nat {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admin can add schemes");
    };

    let scheme : Scheme = {
      id = nextSchemeId;
      name;
      category;
      eligibility;
      benefits;
      applyLink;
    };

    schemes.add(nextSchemeId, scheme);
    nextSchemeId += 1;
    scheme.id;
  };

  /////////////////// Success Stories Functions ///////////////////

  public query func getAllSuccessStories() : async [SuccessStory] {
    successStories.values().toArray();
  };

  public shared ({ caller }) func addSuccessStory(
    title : Text,
    story : Text,
    location : Text,
    sdgTags : [Text],
  ) : async Nat {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admin can add success stories");
    };

    let successStory : SuccessStory = {
      id = nextStoryId;
      title;
      story;
      location;
      sdgTags;
    };

    successStories.add(nextStoryId, successStory);
    nextStoryId += 1;
    successStory.id;
  };

  /////////////////// Platform Stats ///////////////////

  public query func getPlatformStats() : async PlatformStats {
    var totalUpvotes = 0;
    for ((_, post) in communityPosts.entries()) {
      totalUpvotes += post.upvotes;
    };

    {
      totalPosts = communityPosts.size();
      totalUpvotes;
      totalSchemes = schemes.size();
      totalStories = successStories.size();
    };
  };
};
