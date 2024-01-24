export type AdditionalDetectionInvocationType = "none" | "cli" | "client";

export interface CoreConfig {
  actualDir: string;
  workingDir: string;
  threshold?: number;
  thresholdPixel?: number;
  thresholdRate?: number;
  matchingThreshold?: number;
  enableAntialias?: boolean;
  ximgdiff?: {
    invocationType: AdditionalDetectionInvocationType;
  };
  concurrency?: number;
}

export interface WorkingDirectoryInfo {
  base: string;
  actualDir: string;
  expectedDir: string;
  diffDir: string;
}

export interface RegSuitConfiguration {
  core: CoreConfig;
  plugins?: {
    [key: string]: any;
  };
}

export interface CreateQuestionsOptions {
  pluginNames: string[];
}

export interface ComparisonResult {
  failedItems: string[];
  newItems: string[];
  deletedItems: string[];
  passedItems: string[];
  expectedItems: string[];
  actualItems: string[];
  diffItems: string[];
  actualDir: string;
  expectedDir: string;
  diffDir: string;
}
