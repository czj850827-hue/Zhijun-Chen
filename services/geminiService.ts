import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API Key not found in environment variables");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const analyzeDebtSituation = async (userInput: string): Promise<string> => {
  const client = getClient();
  if (!client) {
    return "系统正在维护中，请联系客服进行人工诊断。";
  }

  try {
    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `
        你不仅是一个AI助手，你是【贷略研习社】的资深金融规划导师。
        
        你的核心价值观：
        1. 我们不是贷款中介，我们是教人融资的老师。
        2. 我们帮助用户从高息负债置换为低息银行贷款。
        3. 强调"底层逻辑"和"征信优化"。
        
        用户输入了他们的财务状况： "${userInput}"
        
        请给出一段简短、专业、有共鸣的分析（150字以内）。
        不要直接给具体的贷款方案（因为需要详细资料），而是指出他们当前可能存在的问题（如利息过高、征信太花、网贷太多），并告诉他们贷略研习社可以如何帮助他们建立"银行融资思维"来解决这个问题。
        语气要诚恳、专业、给人希望。
      `,
    });
    return response.text || "无法生成分析，请稍后重试。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "智能诊断服务暂时繁忙，请直接添加下方微信咨询导师。";
  }
};