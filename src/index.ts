
// we just haven't set up a way of having a shared types module

export interface UserIdentity { // don't forget this is merged with the rest of the JWT standard fields
  token_id: string; // Generated, unique per token
  token_version: '0.1-alpha'; // Generated, hardcoded
  identity: { // Unique per user, lookup from profiles, people, user management services
    user_id: string;
    external: Array<{
      id: string;
      domain: string; // e.g. "elife-profiles", "elife-people", "orcid"
    }>;
  };

  // Generic user roles, basically to know which
  // So a user is associated with a `journal` when they've got a role with it?
  roles: Array<{
    journal: string; // e.g. "elife"
    kind: string; // e.g. "author", "reviewer", e.t.c
  }>;
  meta: unknown; // could be anything
}

// End of duplicated code
