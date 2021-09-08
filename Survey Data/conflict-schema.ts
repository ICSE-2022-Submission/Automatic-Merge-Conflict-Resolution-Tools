export interface ResolutionSuggestion {
  label: string;
  id: string | number;
  source: string;
  group: string;
}

export interface LineRange {
  start: number;
  end: number;
}

export interface ConflictRegion {
  conflict_id: number | string;
  base: LineRange;
  a: LineRange;
  b: LineRange;
  resolutionSuggestions: ResolutionSuggestion[];
}

export interface AuthorInfo {
  name: string;
  email: string;
}

export interface MergeConflict {
  _id: string;
  repository_origin_url: string;
  commit_id: string;
  commit_date: string;
  commit_message: string;
  conflict_file_id: number | string;
  filename: string;
  last_commit_on_a: string;
  last_commit_on_b: string;
  author_info_a: AuthorInfo;
  author_info_b: AuthorInfo;
  num_conflict_regions: number;
  files: {
    conflictFile: string;
    a: string;
    b: string;
  };
  conflicts: ConflictRegion[];
}
