export interface SuggestionResponse {
  semantically_equivalent: string;
  ordering: string;
  feedback: string;
}
export interface SurveyResponse {
  SkipConflict: {
    reasons: string[];
    ordering: string;
    external_context: string;
    feedback: string;
  };
  UseSuggestion: Record<string, SuggestionResponse>;
}

