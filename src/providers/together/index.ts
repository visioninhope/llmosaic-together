import OpenAI from 'openai';
import { EnrichedModelList, IProviderWrapper, ModelList, StandardModelList } from '../../types';
import {
  HandlerModelParams,
  HandlerParams,
  ResultStreaming,
  ResultNotStreaming,
  Result,
  Model,
  EnrichedModel,
} from '../../types';

import { modelEnrichmentData } from './models';

const modelStandardData: Model[] = [{id: 'zero-one-ai/Yi-34B-Chat', object: 'model', created: 1713479642, owned_by: '01.AI'}, {id: 'allenai/OLMo-7B-Instruct', object: 'model', created: 1713479642, owned_by: 'Allen AI'}, {id: 'allenai/OLMo-7B-Twin-2T', object: 'model', created: 1713479642, owned_by: 'Allen AI'}, {id: 'allenai/OLMo-7B', object: 'model', created: 1713479642, owned_by: 'Allen AI'}, {id: 'Austism/chronos-hermes-13b', object: 'model', created: 1713479642, owned_by: 'Austism'}, {id: 'cognitivecomputations/dolphin-2.5-mixtral-8x7b', object: 'model', created: 1713479642, owned_by: 'cognitivecomputations'}, {id: 'databricks/dbrx-instruct', object: 'model', created: 1713479642, owned_by: 'databricks'}, {id: 'deepseek-ai/deepseek-coder-33b-instruct', object: 'model', created: 1713479642, owned_by: 'DeepSeek'}, {id: 'deepseek-ai/deepseek-llm-67b-chat', object: 'model', created: 1713479642, owned_by: 'DeepSeek'}, {id: 'garage-bAInd/Platypus2-70B-instruct', object: 'model', created: 1713479642, owned_by: 'garage-bAInd'}, {id: 'google/gemma-2b-it', object: 'model', created: 1713479642, owned_by: 'Google'}, {id: 'google/gemma-7b-it', object: 'model', created: 1713479642, owned_by: 'Google'}, {id: 'Gryphe/MythoMax-L2-13b', object: 'model', created: 1713479642, owned_by: 'Gryphe'}, {id: 'lmsys/vicuna-13b-v1.5', object: 'model', created: 1713479642, owned_by: 'LM Sys'}, {id: 'lmsys/vicuna-7b-v1.5', object: 'model', created: 1713479642, owned_by: 'LM Sys'}, {id: 'codellama/CodeLlama-13b-Instruct-hf', object: 'model', created: 1713479642, owned_by: 'Meta'}, {id: 'codellama/CodeLlama-34b-Instruct-hf', object: 'model', created: 1713479642, owned_by: 'Meta'}, {id: 'codellama/CodeLlama-70b-Instruct-hf', object: 'model', created: 1713479642, owned_by: 'Meta'}, {id: 'codellama/CodeLlama-7b-Instruct-hf', object: 'model', created: 1713479642, owned_by: 'Meta'}, {id: 'meta-llama/Llama-2-70b-chat-hf', object: 'model', created: 1713479642, owned_by: 'Meta'}, {id: 'meta-llama/Llama-2-13b-chat-hf', object: 'model', created: 1713479642, owned_by: 'Meta'}, {id: 'meta-llama/Llama-2-7b-chat-hf', object: 'model', created: 1713479642, owned_by: 'Meta'}, {id: 'meta-llama/Llama-3-8b-chat-hf', object: 'model', created: 1713479642, owned_by: 'Meta'}, {id: 'meta-llama/Llama-3-70b-chat-hf', object: 'model', created: 1713479642, owned_by: 'Meta'}, {id: 'microsoft/WizardLM-2-8x22B', object: 'model', created: 1713479642, owned_by: 'Microsoft'}, {id: 'mistralai/Mistral-7B-Instruct-v0.1', object: 'model', created: 1713479642, owned_by: 'mistralai'}, {id: 'mistralai/Mistral-7B-Instruct-v0.2', object: 'model', created: 1713479642, owned_by: 'mistralai'}, {id: 'mistralai/Mixtral-8x7B-Instruct-v0.1', object: 'model', created: 1713479642, owned_by: 'mistralai'}, {id: 'mistralai/Mixtral-8x22B-Instruct-v0.1', object: 'model', created: 1713479642, owned_by: 'mistralai'}, {id: 'NousResearch/Nous-Capybara-7B-V1p9', object: 'model', created: 1713479642, owned_by: 'NousResearch'}, {id: 'NousResearch/Nous-Hermes-2-Mistral-7B-DPO', object: 'model', created: 1713479642, owned_by: 'NousResearch'}, {id: 'NousResearch/Nous-Hermes-2-Mixtral-8x7B-DPO', object: 'model', created: 1713479642, owned_by: 'NousResearch'}, {id: 'NousResearch/Nous-Hermes-2-Mixtral-8x7B-SFT', object: 'model', created: 1713479642, owned_by: 'NousResearch'}, {id: 'NousResearch/Nous-Hermes-llama-2-7b', object: 'model', created: 1713479642, owned_by: 'NousResearch'}, {id: 'NousResearch/Nous-Hermes-Llama2-13b', object: 'model', created: 1713479642, owned_by: 'NousResearch'}, {id: 'NousResearch/Nous-Hermes-2-Yi-34B', object: 'model', created: 1713479642, owned_by: 'NousResearch'}, {id: 'openchat/openchat-3.5-1210', object: 'model', created: 1713479642, owned_by: 'OpenChat'}, {id: 'Open-Orca/Mistral-7B-OpenOrca', object: 'model', created: 1713479642, owned_by: 'OpenOrca'}, {id: 'Qwen/Qwen1.5-0.5B-Chat', object: 'model', created: 1713479642, owned_by: 'Qwen'}, {id: 'Qwen/Qwen1.5-1.8B-Chat', object: 'model', created: 1713479642, owned_by: 'Qwen'}, {id: 'Qwen/Qwen1.5-4B-Chat', object: 'model', created: 1713479642, owned_by: 'Qwen'}, {id: 'Qwen/Qwen1.5-7B-Chat', object: 'model', created: 1713479642, owned_by: 'Qwen'}, {id: 'Qwen/Qwen1.5-14B-Chat', object: 'model', created: 1713479642, owned_by: 'Qwen'}, {id: 'Qwen/Qwen1.5-32B-Chat', object: 'model', created: 1713479642, owned_by: 'Qwen'}, {id: 'Qwen/Qwen1.5-72B-Chat', object: 'model', created: 1713479642, owned_by: 'Qwen'}, {id: 'snorkelai/Snorkel-Mistral-PairRM-DPO', object: 'model', created: 1713479642, owned_by: 'Snorkel AI'}, {id: 'togethercomputer/alpaca-7b', object: 'model', created: 1713479642, owned_by: 'Stanford'}, {id: 'teknium/OpenHermes-2-Mistral-7B', object: 'model', created: 1713479642, owned_by: 'Teknium'}, {id: 'teknium/OpenHermes-2p5-Mistral-7B', object: 'model', created: 1713479642, owned_by: 'Teknium'}, {id: 'togethercomputer/Llama-2-7B-32K-Instruct', object: 'model', created: 1713479642, owned_by: 'Together'}, {id: 'togethercomputer/RedPajama-INCITE-Chat-3B-v1', object: 'model', created: 1713479642, owned_by: 'Together'}, {id: 'togethercomputer/RedPajama-INCITE-7B-Chat', object: 'model', created: 1713479642, owned_by: 'Together'}, {id: 'togethercomputer/StripedHyena-Nous-7B', object: 'model', created: 1713479642, owned_by: 'Together'}, {id: 'Undi95/ReMM-SLERP-L2-13B', object: 'model', created: 1713479642, owned_by: 'Undi95'}, {id: 'Undi95/Toppy-M-7B', object: 'model', created: 1713479642, owned_by: 'Undi95'}, {id: 'WizardLM/WizardLM-13B-V1.2', object: 'model', created: 1713479642, owned_by: 'WizardLM'}, {id: 'upstage/SOLAR-10.7B-Instruct-v1.0', object: 'model', created: 1713479642, owned_by: 'upstage'}];

class TogetherWrapper implements IProviderWrapper {
  private together: OpenAI;

  constructor(apiKey?: string, baseUrl?: string) {
    const finalApiKey = apiKey ?? process.env.TOGETHER_API_KEY;
    const finalBaseUrl = baseUrl ?? 'https://api.together.xyz/v1';

    this.together = new OpenAI({
      apiKey: finalApiKey,
      baseURL: finalBaseUrl,
    });
  }

  async models(params: HandlerModelParams & { enrich: true }):Promise<EnrichedModelList>;

  async models(params: HandlerModelParams & { enrich?: false }):Promise<StandardModelList>;

  async models(
    params: HandlerModelParams & { enrich?: boolean },
  ):Promise<ModelList>{
    const standardModelList = {
      object: "string",
      data: (await this.openai.models.list()).data,
    } as ModelList;
    if (params.enrich) {
      return enrichToStandardDynamicModelList(standardModelList, modelEnrichmentData);
    } else {
      return standardModelList;
    }
  }

  public async completions(params: HandlerParams & { stream: true }): Promise<ResultStreaming>;

  public async completions(params: HandlerParams & { stream?: false }): Promise<ResultNotStreaming>;
  
  public async completions(
    params: HandlerParams & { stream?: boolean },
  ): Promise<Result> {
    if (params.stream) {
      // Process streaming responses
      const response = await this.together.chat.completions.create({
        ...params,
        stream: params.stream,
      });
      return response;
    } else {
      // Process non-streaming responses
      const response = await this.together.chat.completions.create({
        ...params,
        stream: false,
      });
      return response;
    }
  }
}

export default TogetherWrapper;