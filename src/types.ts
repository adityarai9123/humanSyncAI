export type HumanSyncProps = {
  brandName: string;
  brandSuffix: string;

  intro: {
    title: string;
    highlight: string;
    subtitle: string[];
  };

  systems: {
    title: string;
    highlightedLines: string[];
    tags: string[];
  };

  workspace: {
    title: string;
    description: string;
  };

  collaboration: {
    title: string;
    highlightedWords: string[];
  };

  workflow: {
    headline: string[];
    metrics: {
      label: string;
      value: string;
      suffix?: string;
    }[];
  };
};