export interface Element {
  title: string,
  criteria: Array<Criterion>,
  subheadings?: Array<Subheading>,
  resources?: Array<Resource>,
  codeSamples?: Array<CodeSample>
}

export interface Criterion {
  description: string,
  wcag: string,
  code?: string,
  code2?: string,
}

export interface Subheading {
  title: string,
  criteria: Array<Criterion>,
  resources?: Array<Resource>,
  codeSamples?: Array<CodeSample>
}

export interface Resource {
  title: string,
  link: string
  description?: string
}

export interface CodeSample {
  title: string,
  output?: string,
  code: string
}
