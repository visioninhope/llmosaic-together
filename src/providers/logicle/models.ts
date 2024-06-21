import { EnrichedModel } from '../../types';

export const modelEnrichmentData:EnrichedModel[] = [
  {
    name: 'GPT-4o',
    description: 'Our most advanced, multimodal flagship model that’s cheaper and faster than GPT-4 Turbo. Currently points to gpt-4o-2024-05-13.',
    id: 'gpt-4o',
    object: 'model',
    created: 1698959748,
    owned_by: 'openai',
    context_length: 128000,
    tokenizer: 'o200k_base',
    capabilities: {
      vision: true,
      function_calling: true
    },
    prices: {
      input: 5,
      output: 15
    }
  },
  {
    name: 'GPT-3.5 Turbo',
    description: 'Currently points to gpt-3.5-turbo-0125',
    id: 'gpt-3.5-turbo',
    object: 'model',
    created: 1698959748,
    owned_by: 'openai',
    context_length: 16385,
    tokenizer: 'cl100k_base',
    capabilities: {
      vision: false,
      function_calling: true
    },
    prices: {
      input: 0.5,
      output: 1.5
    }
  },
  {
    name: 'Claude 3.5 Sonnet',
    description: 'Most intelligent model yet',
    id: 'claude-3-5-sonnet',
    object: 'model',
    created: 1698959748,
    owned_by: 'anthropic',
    context_length: 200000,
    tokenizer: 'anthropic',
    capabilities: {
      vision: true,
      function_calling: true
    },
    prices: {
      input: 3,
      output: 15
    }
  },
  {
    name: 'Claude 3 Opus',
    description: 'Powerful model for highly complex tasks',
    id: 'claude-3-opus',
    object: 'model',
    created: 1698959748,
    owned_by: 'anthropic',
    context_length: 200000,
    tokenizer: 'anthropic',
    capabilities: {
      vision: true,
      function_calling: true
    },
    prices: {
      input: 15,
      output: 75
    }
  },
  {
    name: 'Claude 3 Sonnet',
    description: 'Balance of intelligence and speed',
    id: 'claude-3-sonnet',
    object: 'model',
    created: 1698959748,
    owned_by: 'anthropic',
    context_length: 200000,
    tokenizer: 'anthropic',
    capabilities: {
      vision: true,
      function_calling: true
    },
    prices: {
      input: 3,
      output: 15
    }
  },
  {
    name: 'Claude 3 Haiku',
    description: 'Fastest and most compact model for near-instant responsiveness',
    id: 'claude-3-haiku',
    object: 'model',
    created: 1698959748,
    owned_by: 'anthropic',
    context_length: 200000,
    tokenizer: 'anthropic',
    capabilities: {
      vision: true,
      function_calling: true
    },
    prices: {
      input: 0.25,
      output: 1.25
    }
  },
  {
    name: 'Claude 2.1',
    description: 'Updated version of Claude 2 with improved accuracy',
    id: 'claude-2.1',
    object: 'model',
    created: 1698959748,
    owned_by: 'anthropic',
    context_length: 200000,
    tokenizer: 'anthropic',
    capabilities: {
      vision: false,
      function_calling: false
    },
    prices: {
      input: 8,
      output: 24
    }
  },
  {
    name: 'Claude 2',
    description: 'Predecessor to Claude 3, offering strong all-round performance',
    id: 'claude-2.0',
    object: 'model',
    created: 1698959748,
    owned_by: 'anthropic',
    context_length: 100000,
    tokenizer: 'anthropic',
    capabilities: {
      vision: false,
      function_calling: false
    },
    prices: {
      input: 8,
      output: 24
    }
  },
  {
    name: 'Claude Instant 1.2',
    description: 'Our cheapest small and fast model, a predecessor of Claude Haiku.',
    id: 'claude-instant-1.2',
    object: 'model',
    created: 1698959748,
    owned_by: 'anthropic',
    context_length: 100000,
    tokenizer: 'anthropic',
    capabilities: {
      vision: false,
      function_calling: false
    },
    prices: {
      input: 0.8,
      output: 2.4
    }
  }
];